import React, { useEffect, useState } from 'react';

const slogans = [
  'The Future is Unknown',
  'Enter the Void',
  'AI. Tech. Mystery.',
  'Minimalism Reloaded',
  'Beyond the Obvious'
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
      {/* Постер */}
      <img
        src="/your-poster.jpg"
        alt="Poster"
        className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 transition-transform duration-1000"
        style={{ filter: 'blur(2px) grayscale(0.2)' }}
      />
      {/* Шум */}
      <div className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay opacity-30" style={{
        backgroundImage: 'url(/noise.png)'
      }} />
      {/* Логотип */}
      <div className="absolute top-8 left-8 z-20">
        <img src="/logo.svg" alt="Logo" className="h-10 w-auto cursor-pointer" />
      </div>
      {/* Слоган */}
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-widest animate-fade-in-down select-none drop-shadow-lg text-center">
          {slogan}
        </h1>
        <button
          className="mt-12 px-10 py-4 text-lg bg-white bg-opacity-10 text-white border border-white rounded-full hover:bg-opacity-30 transition-all duration-300 shadow-lg backdrop-blur"
          onClick={() => window.location.href = '/products'}
        >
          Enter
        </button>
      </div>
    </section>
  );
};

export default HeroSection;