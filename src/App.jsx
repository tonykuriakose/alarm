



import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Contact from './components/Contact';
import LightRays from './components/LightRays';

const App = () => {
  return (
    <div className="bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-400 min-h-screen relative">
      <LightRays speed={3} />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm bg-slate-950">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} ALARM.IN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;