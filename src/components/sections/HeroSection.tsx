import React, { useEffect, useState } from 'react';

const slogans = [
  'Beyond Perception',
  'Encrypted Elegance',
  'Digital Dystopia',
  'Quantum Aesthetics',
  'Neural Couture'
];

const HeroSection: React.FC = () => {
  const [slogan, setSlogan] = useState(slogans[0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSlogan(s => {
        let idx = slogans.indexOf(s);
        return slogans[(idx + 1) % slogans.length];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient 15s ease infinite'
        }}
      />
      <img
        src="https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 transition-transform duration-1000"
        style={{ filter: 'grayscale(100%) contrast(120%)' }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }}
      />
      <div className="relative z-20 flex flex-col items-center px-4">
        <div className="mb-8 opacity-80">
          <img src="/logo.svg" alt="KAIGAN" className="h-12 w-auto" />
        </div>
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] animate-fade-in-down select-none mb-6 text-center font-mono">
          {slogan}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl tracking-widest mb-12 text-center max-w-xl font-light">
          Encrypted fashion for the digital age
        </p>
        <button
          className="group relative px-12 py-4 overflow-hidden border border-white/30 hover:border-white/60 transition-colors duration-500"
          onClick={() => window.location.href = '/products'}
        >
          <span className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
          <span className="relative text-white text-lg tracking-[0.3em] font-light">ENTER</span>
        </button>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-8 text-white/50">
        <span className="text-xs tracking-[0.2em] animate-pulse">ENCRYPTED</span>
        <span className="text-xs tracking-[0.2em] animate-pulse delay-75">EXCLUSIVE</span>
        <span className="text-xs tracking-[0.2em] animate-pulse delay-150">ENIGMATIC</span>
      </div>
    </section>
  );
};

export default HeroSection;