import { useContext, useState } from "react";
import { Send, Menu } from "lucide-react";
import { TransactionContext } from "../context/TransactionContext";

const Header = () => {
  const { connectWallet, connectedAccount } = useContext(TransactionContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900/80 via-purple-900/80 to-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow">
              <Send className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              EthPay
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              How it Works
            </a>

            {!connectedAccount ? (
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-5 py-2 rounded-lg text-white font-semibold shadow transition-colors"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg text-white font-semibold shadow">
                <span className="text-xs sm:text-sm font-mono">
                  {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
                </span>
                <span className="hidden sm:inline text-green-400 ml-2">
                  ● Connected
                </span>
              </div>
            )}
          </div>
          <button
            className="md:hidden flex items-center justify-center p-2 rounded hover:bg-white/10 transition cursor-pointer"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg z-50">
            <div className="flex flex-col items-center space-y-4 py-6">
              <a
                href="#features"
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                How it Works
              </a>

              {!connectedAccount ? (
                <button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-5 py-2 rounded-lg text-white font-semibold shadow transition-colors"
                  onClick={() => {
                    connectWallet();
                    setMobileOpen(false);
                  }}
                >
                  Connect Wallet
                </button>
              ) : (
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg text-white font-semibold shadow">
                  <span className="text-xs font-mono">
                    {connectedAccount.slice(0, 6)}...
                    {connectedAccount.slice(-4)}
                  </span>
                  <span className="text-green-400 ml-2">● Connected</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
