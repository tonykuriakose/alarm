import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Wifi, Bluetooth, Play, Settings, Zap, 
  Flame, HeartPulse, ShieldAlert, Siren, Key, 
  GalleryVerticalEnd, DoorOpen, Warehouse, Building2, Plane, 
  Activity, ArrowRight, Construction
} from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"
          >
            Premium Security Services
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From advanced smart hubs to industrial grade automation, we provide the complete spectrum of security technology.
          </p>
        </div>

        {/* Section 1: IQ4 Hub - Smart Home Automation */}
        <div className="mb-32">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-all" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-sm mb-6 border border-emerald-500/20">
                  Smart Center
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  IQ4 Hub: The Brain of Your Home
                </h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Everything you want, nothing you don't. The IQ4 Hub connects your entire home ecosystem with military-grade encryption and lightning-fast response times.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "All-In-One", desc: "8 Core Processor, LTE/Wi-Fi Dual Path", icon: Cpu },
                    { title: "Bluetooth Music", desc: "Touchless disarming & Music Streaming", icon: Wifi },
                    { title: "System Automation", desc: "Z-Wave 800, PowerG IoT Automation", icon: Settings },
                    { title: "Easy Install", desc: "SmartMount & On-screen Wizard", icon: Zap },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="bg-slate-800 p-3 rounded-xl h-fit">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                {/* Abstract visual representation of the tablet since we don't use external images without user permission, or we create a CSS stylized version */}
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl transform rotate-y-12">
                   <div className="bg-slate-200 rounded-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center border-4 border-slate-100">
                      <div className="text-slate-900 text-center">
                        <ShieldAlert className="w-16 h-16 mx-auto text-emerald-600 mb-2" />
                        <h4 className="text-2xl font-bold">System Armed</h4>
                        <p className="text-sm text-slate-500">12:55 PM</p>
                      </div>
                   </div>
                   <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-4 rounded-full font-bold shadow-lg">
                      IQ4
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: 24/7 Monitoring Ecosystem */}
        <div className="mb-32">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">24/7 Emergency Response</h3>
                <p className="text-slate-400 max-w-xl">
                  A complete safety loop connecting your home sensors directly to emergency services via GSM Cellular Networks.
                </p>
              </div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { title: "Burglary", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", icon: Key },
                { title: "Fire Threat", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", icon: Flame },
                { title: "Medical", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", icon: HeartPulse },
                { title: "Police", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", icon: Siren },
                { title: "Duress", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", icon: ShieldAlert },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`${item.bg} ${item.border} border p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-all hover:shadow-lg`}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <span className={`font-semibold ${item.color}`}>{item.title}</span>
                </motion.div>
              ))}
           </div>
           
           {/* Flow Visual */}
           <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-500 font-mono text-sm">
              <div className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-lg">Home Sensors</div>
              <ArrowRight className="animate-pulse text-emerald-500" />
              <div className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-lg">GSM Network</div>
              <ArrowRight className="animate-pulse text-emerald-500" />
              <div className="bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 px-6 py-3 rounded-lg font-bold">Command Center</div>
              <ArrowRight className="animate-pulse text-emerald-500" />
              <div className="flex gap-2">
                 <span className="bg-blue-900/30 text-blue-400 border border-blue-500/30 px-3 py-1 rounded">Police</span>
                 <span className="bg-red-900/30 text-red-400 border border-red-500/30 px-3 py-1 rounded">Fire</span>
                 <span className="bg-green-900/30 text-green-400 border border-green-500/30 px-3 py-1 rounded">EMS</span>
              </div>
           </div>
        </div>

        {/* Section 3: Entrance Automation */}
        <div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Entrance Automation</h3>
              <p className="text-slate-400">Advanced motorized solutions for residential, industrial, and high-security access control.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {[
                { name: "Sliding Gates", icon: GalleryVerticalEnd },
                { name: "Swing Gates", icon: DoorOpen },
                { name: "Boom Barriers", icon: Construction },
                { name: "Rolling Shutters", icon: Warehouse },
                { name: "Glass Doors", icon:  DoorOpen },
                { name: "Bollards", icon: Zap },
              ].map((product, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center gap-3 hover:border-emerald-500/30 transition-colors group cursor-default">
                  <div className="bg-slate-900 p-3 rounded-full group-hover:bg-emerald-500/20 transition-colors">
                    <product.icon className="w-5 h-5 text-slate-300 group-hover:text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{product.name}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-800 pt-8">
               <p className="text-center text-slate-500 text-sm mb-6 uppercase tracking-widest font-semibold">Deployment Sectors</p>
               <div className="flex flex-wrap justify-center gap-3">
                 {["Residential", "Industry", "Airport", "Defence", "Prison", "Public Parking", "Hospitals", "Showrooms"].map((tag, idx) => (
                   <span key={idx} className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm hover:text-white hover:border-slate-600 transition-colors cursor-default">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
