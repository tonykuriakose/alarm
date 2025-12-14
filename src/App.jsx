



import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

const App = () => {
  return (
    <div className="bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Alarm-Jaison Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;