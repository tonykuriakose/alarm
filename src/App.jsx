



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';

import Services from './components/Services';

const Home = () => (
  <>
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
        <div className="mt-2">
           <a href="/admin" className="text-xs text-slate-800 hover:text-slate-600 transition-colors">Admin Access</a>
        </div>
      </div>
    </footer>
  </>
);

const App = () => {
  return (
    <div className="bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-400 min-h-screen">
      <Router>
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155',
          },
        }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;