import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import Logo from '../../public/logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const categoriesSection = document.getElementById('categories');
    if (!categoriesSection) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsCategoriesVisible(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );
    observer.observe(categoriesSection);
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        location.pathname === '/products'
          ? 'bg-white py-3'
          : isCategoriesVisible ? 'bg-white py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className={`flex items-center transition-colors duration-300 focus:outline-none ${
              isScrolled || location.pathname === '/products' ? 'text-black' : 'text-white'
            }`}
            style={{ minHeight: 40 }}
          >
            <img src={Logo} alt="Логотип" className="h-10 w-auto block" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setCategoriesOpen(true)}
                className={`text-sm tracking-wider transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                Shop by Category
              </button>
              <button
                onClick={() => navigate('/products')}
                className={`text-sm tracking-wider transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                All Products
              </button>
            </div>
            {location.pathname === '/products' && (
              <div className="flex items-center space-x-4 ml-8">
                <button
                  className={`p-1 transition-colors ${
                    isScrolled || location.pathname === '/products' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'
                  }`}
                  aria-label="Shopping bag"
                  onClick={() => setCartOpen(true)}
                >
                  <ShoppingBag size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-1 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '0' }}
        >
          <div className="container mx-auto px-4 py-20">
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => { handleScrollTo('categories'); setIsMobileMenuOpen(false); }}
                className="text-xl font-light tracking-wider text-left"
              >
                Shop by Category
              </button>
              <button
                onClick={() => { navigate('/products'); setIsMobileMenuOpen(false); }}
                className="text-xl font-light tracking-wider text-left"
              >
                All Products
              </button>
              <div className="pt-6 flex flex-col space-y-6">
                <a href="#" className="text-xl font-light tracking-wider flex items-center">
                  <ShoppingBag size={24} className="mr-2" /> Cart
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Cart Modal */}
        {cartOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setCartOpen(false)}>
            <div className="bg-white rounded-lg p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-2xl" onClick={() => setCartOpen(false)}>&times;</button>
              <h2 className="text-2xl mb-4 font-medium">Корзина</h2>
              <p className="text-gray-500">Корзина пуста</p>
            </div>
          </div>
        )}

        {/* Категории модалка */}
        {categoriesOpen && (
          <>
            {/* Эффект на фон */}
            <div className="fixed inset-0 z-40 backdrop-blur-md bg-black bg-opacity-60 transition-all duration-300"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setCategoriesOpen(false)}>
              <button className="absolute top-6 left-8 text-white text-3xl" onClick={() => setCategoriesOpen(false)}>&times;</button>
              <div className="flex flex-col items-center justify-center w-full h-full" onClick={e => e.stopPropagation()}>
                <ul className="text-white text-xl md:text-2xl font-normal space-y-4 text-center">
                  <li><button className="hover:underline" onClick={() => setCategoriesOpen(false)}>All</button></li>
                  <li><button className="hover:underline" onClick={() => setCategoriesOpen(false)}>Men</button></li>
                  <li><button className="hover:underline" onClick={() => setCategoriesOpen(false)}>Women</button></li>
                  <li><button className="hover:underline" onClick={() => setCategoriesOpen(false)}>Forgotten Materials</button></li>
                  <li><button className="hover:underline" onClick={() => setCategoriesOpen(false)}>Accessories</button></li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;