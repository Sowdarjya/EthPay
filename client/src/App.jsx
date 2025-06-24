import React, { useContext } from "react";
import Header from "./components/Header";
import { TransactionContext } from "./context/TransactionContext";
import Hero from "./components/Hero";
import Transactions from "./components/Transactions";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Transactions />
    </div>
  );
};

export default App;
