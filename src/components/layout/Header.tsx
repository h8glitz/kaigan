import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-8">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-white/90 hover:text-white tracking-[0.4em] text-sm transition-colors duration-500"
          >
            KAIGAN
          </button>

          <div className="hidden md:flex items-center space-x-16">
            {['ARTIFACTS', 'VOID', 'PROTOCOL'].map((item) => (
              <button
                key={item}
                className="text-white/40 hover:text-white text-xs tracking-[0.3em] transition-colors duration-500"
                onClick={() => navigate('/products')}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white/90 hover:text-white transition-colors duration-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-black z-40 transform transition-transform duration-700 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-8 py-24">
          <nav className="flex flex-col space-y-12">
            {['ARTIFACTS', 'VOID', 'PROTOCOL'].map((item) => (
              <button
                key={item}
                className="text-white/40 hover:text-white text-2xl tracking-[0.4em] text-left transition-colors duration-500"
                onClick={() => {
                  navigate('/products');
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;