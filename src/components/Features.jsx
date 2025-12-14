import React from "react";
import { motion } from "framer-motion";
import { Camera, Bell, Home, Smartphone, ShieldAlert, Cpu } from "lucide-react";
import { cn } from "../lib/utils";

const features = [
  {
    title: "HD CCTV Systems",
    description: "Crystal clear 4K surveillance with night vision and AI motion detection.",
    icon: Camera,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Smart Alarms",
    description: "Instant alerts to your phone. Integrated with local law enforcement.",
    icon: Bell,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Indoor Sensors",
    description: "Motion, glass break, and door sensors that cover every angle.",
    icon: Home,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Mobile App Control",
    description: "Control your entire security system from anywhere in the world.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "24/7 Monitoring",
    description: "Professional monitoring team ready to respond to emergencies.",
    icon: ShieldAlert,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Smart Integration",
    description: "Works seamlessly with Google Home, Alexa, and HomeKit.",
    icon: Cpu,
    color: "from-indigo-500 to-violet-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
            Comprehensive Protection
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our state-of-the-art security ecosystem covers every aspect of your home safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br rounded-2xl", feature.color)} />
      
      <div className={cn("inline-flex p-3 rounded-lg bg-slate-800 mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10")}>
        <feature.icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
        {feature.title}
      </h3>
      <p className="text-slate-400 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default Features;
