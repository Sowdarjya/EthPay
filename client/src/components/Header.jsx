import React, { useState } from "react";
import { AlignCenter, X } from "lucide-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full flex md:justify-center items-center justify-between p-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="md:flex-[0.5] flex-initial justify-center items-center cursor-pointer">
        <h1 className="text-2xl font-bold text-white">EthPay</h1>
      </div>
      <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial text-white">
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Exchange</li>
        <li className="mx-4 cursor-pointer">Wallets</li>
        <li className="bg-[#FFD700] py-2 px-7 mx-4 cursor-pointer hover:bg-[#fddd73] rounded-full transition ease-in duration-200 text-black">
          Login
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="flex relative md:hidden">
        {!showMenu ? (
          <AlignCenter
            fontSize={28}
            className="text-white cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        ) : (
          <X
            fontSize={28}
            className="text-white cursor-pointer z-20"
            onClick={() => setShowMenu(false)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <ul
          className="z-10 fixed top-0 right-0 p-6 w-[70vw] h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 shadow-2xl md:hidden list-none
        flex flex-col justify-start items-start gap-6 animate-slide-in text-white"
        >
          <li
            className="cursor-pointer text-lg"
            onClick={() => setShowMenu(false)}
          >
            Market
          </li>
          <li
            className="cursor-pointer text-lg"
            onClick={() => setShowMenu(false)}
          >
            Exchange
          </li>
          <li
            className="cursor-pointer text-lg"
            onClick={() => setShowMenu(false)}
          >
            Wallets
          </li>
          <li
            className="bg-[#FFD700] text-black py-2 px-5 rounded-full cursor-pointer hover:bg-[#fddd73] transition ease-in duration-200"
            onClick={() => setShowMenu(false)}
          >
            Login
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
