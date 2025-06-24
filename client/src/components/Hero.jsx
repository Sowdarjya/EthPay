import { useContext, useState } from "react";
import {
  Shield,
  Zap,
  Globe,
  Wallet,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { TransactionContext } from "../context/TransactionContext";

const Hero = () => {
  const {
    connectWallet,
    connectedAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState("");
  const [balance] = useState(1.2345); // Replace with real balance logic

  const isConnected = !!connectedAccount;
  const account = connectedAccount;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword } = formData;
    if (!addressTo || !amount || !keyword) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    try {
      await sendTransaction();
      setTxHash("pending"); // You can update this with the real tx hash if available
    } catch (err) {
      setError("Transaction failed.");
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content - Left Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
                🚀 Next-Gen Web3 Transfers
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Send ETH with
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Style & Security
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Experience the future of cryptocurrency transfers. Send ETH
                instantly with custom messages, keywords, and complete
                transaction transparency. Built for the modern Web3 era.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-white mb-1">$2.4M+</div>
                <div className="text-gray-400 text-sm">Total Volume</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-white mb-1">
                  15,000+
                </div>
                <div className="text-gray-400 text-sm">Transactions</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Global Access</span>
              </div>
            </div>
          </div>

          {/* Transfer Form - Right Side */}
          <div className="space-y-6" id="transfer-section">
            {/* Wallet Connection Card */}
            <div className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
              <div className="text-center pb-4 pt-6 px-6">
                <div className="flex items-center justify-center gap-2 text-white text-xl font-semibold">
                  <Wallet className="h-5 w-5" />
                  Wallet Connection
                </div>
              </div>
              <div className="space-y-4 px-6 pb-6">
                {!isConnected ? (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      <Wallet className="h-8 w-8 text-white" />
                    </div>
                    <button
                      onClick={connectWallet}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base px-6 py-4 rounded-lg text-white font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        <>
                          <Wallet className="mr-2 h-4 w-4" />
                          Connect Wallet
                        </>
                      )}
                    </button>
                    <p className="text-gray-400 text-xs">
                      Connect your MetaMask or compatible Web3 wallet
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                      <div>
                        <p className="text-base font-semibold text-green-400 mb-1">
                          Connected
                        </p>
                        <p className="text-xs text-gray-300 font-mono">
                          {account.slice(0, 6)}...{account.slice(-4)}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-green-500/20 text-green-400 border border-green-500/30 text-sm px-3 py-1 rounded">
                          {Number.parseFloat(balance).toFixed(4)} ETH
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Transfer Form */}
            {isConnected && (
              <form
                className="border-0 shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 pb-6 pt-6 space-y-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <div className="flex items-center gap-2 text-white text-xl font-semibold">
                    <Send className="h-5 w-5" />
                    Send ETH
                  </div>
                  <div className="text-gray-300 text-sm mt-1">
                    Transfer ETH with custom message and keyword
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="recipient" className="text-white font-medium">
                    Recipient Address *
                  </label>
                  <input
                    id="recipient"
                    name="addressTo"
                    placeholder="0x742d35Cc6634C0532925a3b8D4C9db96590c6C87"
                    value={formData.addressTo}
                    onChange={(e) => handleChange(e, "addressTo")}
                    className="font-mono bg-white/5 border border-white/20 text-white placeholder:text-gray-400 h-10 rounded px-3 w-full"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label htmlFor="amount" className="text-white font-medium">
                      Amount (ETH) *
                    </label>
                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      step="0.001"
                      placeholder="0.1"
                      value={formData.amount}
                      onChange={(e) => handleChange(e, "amount")}
                      className="bg-white/5 border border-white/20 text-white placeholder:text-gray-400 h-10 rounded px-3 w-full"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="keyword" className="text-white font-medium">
                      Keyword *
                    </label>
                    <input
                      id="keyword"
                      name="keyword"
                      placeholder="Payment, Gift"
                      value={formData.keyword}
                      onChange={(e) => handleChange(e, "keyword")}
                      className="bg-white/5 border border-white/20 text-white placeholder:text-gray-400 h-10 rounded px-3 w-full"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white font-medium">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Add a personal message..."
                    value={formData.message}
                    onChange={(e) => handleChange(e, "message")}
                    className="min-h-[80px] bg-white/5 border border-white/20 text-white placeholder:text-gray-400 resize-none rounded px-3 py-2 w-full"
                  />
                </div>

                <button
                  type="submit"
                  disabled={
                    isLoading ||
                    !formData.addressTo ||
                    !formData.amount ||
                    !formData.keyword
                  }
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send ETH Transfer
                    </>
                  )}
                </button>
                {error && (
                  <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                )}
                {txHash && (
                  <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mt-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>
                      🎉 Transaction successful!
                      <a
                        href={`https://etherscan.io/tx/${txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 underline hover:no-underline font-semibold"
                      >
                        View on Etherscan →
                      </a>
                    </span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
