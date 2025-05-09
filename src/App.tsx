import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import ProductsSection from './components/sections/ProductsSection';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/products" element={<ProductsSection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;