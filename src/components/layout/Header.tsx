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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-white tracking-[0.3em] text-sm font-light hover:opacity-70 transition-opacity"
          >
            KAIGAN
          </button>

          <div className="hidden md:flex items-center space-x-12">
            {['COLLECTIONS', 'ARCHIVE', 'OBJECTS'].map((item) => (
              <button
                key={item}
                className="text-white/70 hover:text-white text-sm tracking-[0.2em] transition-colors duration-300"
                onClick={() => navigate('/products')}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transform transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-6 py-20">
          <nav className="flex flex-col space-y-8">
            {['COLLECTIONS', 'ARCHIVE', 'OBJECTS'].map((item) => (
              <button
                key={item}
                className="text-white/70 hover:text-white text-2xl tracking-[0.2em] text-left transition-colors duration-300"
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