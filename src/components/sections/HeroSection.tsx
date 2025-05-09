import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const slogans = [
  'DIGITAL ARTIFACTS',
  'ENCRYPTED ELEGANCE',
  'NEURAL SYNTHESIS',
  'QUANTUM AESTHETICS',
  'VOID PROTOCOL'
];

const HeroSection: React.FC = () => {
  const [slogan, setSlogan] = useState(slogans[0]);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; tx: number; ty: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSlogan(s => {
        const idx = slogans.indexOf(s);
        return slogans[(idx + 1) % slogans.length];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const createParticle = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const tx = (Math.random() - 0.5) * 200;
      const ty = (Math.random() - 0.5) * 200;
      return { id: Math.random(), x, y, tx, ty };
    };

    const newParticles = Array(50).fill(null).map(createParticle);
    setParticles(newParticles);
  }, []);

  return (
    <section ref={containerRef} className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="noise-bg"></div>
      
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            '--tx': `${particle.tx}px`,
            '--ty': `${particle.ty}px`
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-20 flex flex-col items-center px-4">
        <div className="mb-16 floating">
          <h1 className="text-[8vw] md:text-[6vw] font-light tracking-[0.5em] text-center leading-none">
            KAIGAN
          </h1>
          <p className="text-center text-sm tracking-[1em] mt-4 text-white/50">ENCRYPTED FASHION</p>
        </div>

        <div className="relative mb-16">
          <h2 className="text-2xl md:text-3xl tracking-[0.3em] text-center font-light">
            {slogan}
          </h2>
          <div className="absolute -inset-4 border border-white/10"></div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <button
            onClick={() => navigate('/products')}
            className="group relative px-12 py-4"
          >
            <span className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors duration-700"></span>
            <span className="relative text-white/70 group-hover:text-white text-sm tracking-[0.4em] transition-colors duration-700">
              ENTER VOID
            </span>
          </button>

          <div className="flex space-x-12 text-xs tracking-[0.3em] text-white/30">
            <span>25°E</span>
            <span>ENCRYPTED</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;