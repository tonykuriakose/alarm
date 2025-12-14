import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Get In Touch
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Ready to secure your home or business? Contact us directly for a free consultation and quote.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Phone, text: "9019603173", label: "Call Us", href: "tel:9019603173" },
                { icon: MessageCircle, text: "Chat on WhatsApp", label: "WhatsApp", href: "https://wa.me/919019603173" },
                { icon: Mail, text: "sales@alaram.in", label: "Email Us", href: "mailto:sales@alaram.in" },
                { icon: MapPin, text: "Angamali, Ernakulam", label: "Visit Office", href: "#" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors group">
                  <div className="bg-emerald-500/10 p-4 rounded-full mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wide">{item.label}</h4>
                  <a href={item.href} className="text-white text-lg font-semibold hover:text-emerald-400 transition-colors">
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
