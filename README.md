# EthPay

EthPay is a modern, secure, and user-friendly decentralized application (dApp) for sending Ethereum (ETH) with custom messages and keywords. Built with React, TailwindCSS, ethers.js, and Solidity smart contracts, EthPay enables fast, transparent, and stylish ETH transfers on the blockchain.

## Features

- **Bank-Level Security:** Transactions are protected by blockchain and encryption.
- **Lightning Fast:** Optimized for quick ETH transfers with low gas fees.
- **Global Access:** Send ETH anywhere, anytime, without banking restrictions.
- **Mobile Optimized:** Responsive design for all devices.
- **Real-time Tracking:** Monitor transaction status instantly.
- **Privacy First:** Only essential data is stored for processing.

## Screenshots

![EthPay Screenshot](public/vite.svg) <!-- Replace with actual screenshot if available -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MetaMask](https://metamask.io/) or any Ethereum wallet extension

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/EthPay.git
cd EthPay
```

#### 2. Install dependencies

For the client (React app):

```bash
cd client
npm install
```

For the smart contract (Hardhat):

```bash
cd ../smart_contract
npm install
```

#### 3. Set up environment variables

- In `client/.env`, add your GIPHY API key and any other required keys:

  ```
  VITE_GIPHY_API_KEY=your_giphy_api_key
  ```

- In `smart_contract/.env`, add your Ethereum node provider key (e.g., Infura or Alchemy).

#### 4. Deploy the Smart Contract

```bash
cd smart_contract
npx hardhat run scripts/deploy.js --network sepolia
```

Update the deployed contract address in `client/src/utils/constants.js`.

#### 5. Start the Client

```bash
cd ../client
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
EthPay/
  client/           # React frontend
    src/
      components/   # UI components
      context/      # React context for blockchain logic
      utils/        # Constants and helpers
    public/
    ...
  smart_contract/   # Solidity smart contract & Hardhat config
    contracts/
    scripts/
    test/
    ...
```

## Usage

1. Connect your MetaMask wallet.
2. Enter the recipient address, amount, keyword, and an optional message.
3. Click "Send ETH Transfer".
4. Track your transaction and view it on Etherscan.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

**EthPay** — Send ETH with style, security, and a personal
