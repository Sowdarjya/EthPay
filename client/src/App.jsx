import Header from "./components/Header";
import Hero from "./components/Hero";
import Transactions from "./components/Transactions";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Transactions />
      <Features />
      <About />
      <Footer />
    </div>
  );
};

export default App;
