const About = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simple, secure, and straightforward - sending ETH has never been
            easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect Your Wallet
            </h3>
            <p className="text-gray-300">
              Securely connect your MetaMask or compatible Web3 wallet to get
              started with transfers.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Enter Transfer Details
            </h3>
            <p className="text-gray-300">
              Input the recipient's address, amount, keyword, and optional
              message for your transfer.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Send & Track
            </h3>
            <p className="text-gray-300">
              Execute the transaction and track its progress in real-time until
              confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
