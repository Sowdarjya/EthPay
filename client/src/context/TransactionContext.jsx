import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/constants";
import { createContext, useEffect, useState } from "react";
import { BrowserProvider, Contract, parseEther } from "ethers";

export const TransactionContext = createContext();

const getEthereumContract = async () => {
  const { ethereum } = window;
  if (!ethereum) throw new Error("No Ethereum object found");

  const provider = new BrowserProvider(ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setConnectedAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log("Error checking wallet connection:", error);
      throw new Error("No Ethereum object.");
    }
  };

  const connectWallet = async () => {
    const { ethereum } = window;
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.log("Error connecting to wallet:", error);
      throw new Error("No Ethereum object.");
    }
  };

  const sendTransaction = async () => {
    const { ethereum } = window;
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = await getEthereumContract();
      const parsedAmount = parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: "0x5208", // 21000 GWEI
            value: parsedAmount.toString(),
          },
        ],
      });

      const transactionHash = await transactionContract.addToTransactions(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log("Loading - ", transactionHash.hash);
      await transactionHash.wait();
      setIsLoading(false);
      console.log("Transaction successful:", transactionHash.hash);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      window.location.reload();
    } catch (error) {
      console.log("Error sending transaction:", error);
      throw new Error("Transaction failed.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
