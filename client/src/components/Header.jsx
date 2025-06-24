import React, { useContext, useState } from "react";
import { Send } from "lucide-react";
import { TransactionContext } from "../context/TransactionContext";

const Header = () => {
  const { connectWallet, connectedAccount } = useContext(TransactionContext);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Send className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">EthPay</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
            >
              How it Works
            </a>
            <a
              href="#stats"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Stats
            </a>
            {!connectedAccount ? (
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors hover:cursor-pointer"
                onClick={connectWallet}
              >
                Get Started
              </button>
            ) : (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors cursor-pointer ">
                <span className="text-gray-300">
                  Connected: {connectedAccount.slice(0, 6)}...
                  {connectedAccount.slice(-4)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
