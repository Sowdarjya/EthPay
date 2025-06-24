import React, { useEffect, useState } from "react";

const truncateAddress = (addr) =>
  addr ? addr.slice(0, 6) + "..." + addr.slice(-4) : "";
const formatTimeAgo = (timestamp) => timestamp;

const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Card = ({ tx }) => {
  const [gifUrl, setGifUrl] = useState(tx.gifUrl || "/placeholder.svg");

  useEffect(() => {
    const fetchGif = async () => {
      if (!tx.keyword) return;
      try {
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${tx.keyword
            .split(" ")
            .join("")}&limit=1`
        );
        const { data } = await res.json();
        if (data && data[0]?.images?.downsized_medium?.url) {
          setGifUrl(data[0].images.downsized_medium.url);
        } else {
          setGifUrl("/placeholder.svg");
        }
      } catch {
        setGifUrl("/placeholder.svg");
      }
    };
    fetchGif();
  }, [tx.keyword]);

  return (
    <div className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden rounded-lg mb-4">
      <div className="flex min-h-[160px]">
        {/* GIF Section */}
        <div className="w-40 h-40 flex-shrink-0">
          <img
            src={gifUrl}
            alt={`${tx.keyword} GIF`}
            className="w-full h-full object-cover rounded-l-lg"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=160&width=160";
            }}
          />
        </div>

        {/* Transaction Details */}
        <div className="flex-1 p-4 space-y-3">
          {/* Header with Amount and Keyword */}
          <div className="flex items-center justify-between">
            <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 capitalize px-2 py-1 rounded text-xs font-semibold">
              {tx.keyword}
            </span>
            <div className="text-right">
              <div className="text-lg font-bold text-white">
                {tx.amount} ETH
              </div>
              <div className="text-xs text-gray-400">
                {formatTimeAgo(tx.timestamp)}
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">From:</span>
              <a
                href={`https://sepolia.etherscan.io/address/${tx.from}`}
                target="_blank"
                className="text-green-400 bg-green-500/10 px-2 py-1 rounded text-xs"
              >
                {truncateAddress(tx.from)}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">To:</span>
              <a
                href={`https://sepolia.etherscan.io/address/${tx.to}`}
                target="_blank"
                className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded text-xs"
              >
                {truncateAddress(tx.to)}
              </a>
            </div>
          </div>

          {/* Message */}
          {tx.message && (
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <p className="text-gray-300 text-sm leading-relaxed">
                "{tx.message}"
              </p>
            </div>
          )}

          {/* Transaction Hash */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">Confirmed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
