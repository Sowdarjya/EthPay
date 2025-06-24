import React, { useContext } from "react";
import Header from "./components/Header";
import { TransactionContext } from "./context/TransactionContext";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      App
    </div>
  );
};

export default App;
