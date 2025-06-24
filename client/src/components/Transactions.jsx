import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Card from "./Card";

const Transactions = () => {
  const { transactions, getAllTransactions } = useContext(TransactionContext);

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Transactions
      </h2>
      {transactions && transactions.length > 0 ? (
        transactions
          .slice()
          .reverse()
          .map((tx, idx) => <Card key={tx.id || idx} tx={tx} />)
      ) : (
        <div className="text-gray-400 text-center">No transactions found.</div>
      )}
    </section>
  );
};

export default Transactions;
