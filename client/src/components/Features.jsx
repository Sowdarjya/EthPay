import { Shield, Zap, Globe, Smartphone, Clock, Lock } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    bg: "from-blue-500 to-purple-500",
    title: "Bank-Level Security",
    desc: "Your transactions are protected by military-grade encryption and blockchain security protocols.",
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    bg: "from-green-500 to-blue-500",
    title: "Lightning Fast",
    desc: "Execute transactions in seconds with optimized gas fees and smart routing algorithms.",
  },
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    bg: "from-purple-500 to-pink-500",
    title: "Global Access",
    desc: "Send ETH anywhere in the world, 24/7, without traditional banking limitations.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-white" />,
    bg: "from-orange-500 to-red-500",
    title: "Mobile Optimized",
    desc: "Seamless experience across all devices with responsive design and mobile wallet integration.",
  },
  {
    icon: <Clock className="h-6 w-6 text-white" />,
    bg: "from-teal-500 to-green-500",
    title: "Real-time Tracking",
    desc: "Monitor your transactions in real-time with detailed status updates and confirmations.",
  },
  {
    icon: <Lock className="h-6 w-6 text-white" />,
    bg: "from-indigo-500 to-purple-500",
    title: "Privacy First",
    desc: "Your personal data stays private. We only store what's necessary for transaction processing.",
  },
];

const Features = () => (
  <section id="features" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Choose EthPay?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Built with cutting-edge technology and user experience in mind
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group rounded-xl border p-8 flex flex-col items-center text-center"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-r ${f.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              {f.icon}
            </div>
            <div className="text-white text-lg font-semibold mb-2">
              {f.title}
            </div>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
