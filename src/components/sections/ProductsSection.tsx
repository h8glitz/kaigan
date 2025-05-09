import React, { useState, useEffect } from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleProducts, setVisibleProducts] = useState<typeof products>([]);
  const categories = Array.from(new Set(products.map(p => p.category)));

  useEffect(() => {
    const filtered = selectedCategory
      ? products.filter(p => p.category === selectedCategory)
      : products;
    setVisibleProducts(filtered);
  }, [selectedCategory]);

  return (
    <section className="min-h-screen bg-black pt-32 pb-16">
      <div className="container mx-auto px-8">
        <div className="mb-24 relative">
          <h1 className="text-4xl md:text-5xl tracking-[0.5em] text-center font-light mb-8">ARTIFACTS</h1>
          <p className="text-center text-white/50 tracking-[0.3em] text-sm mb-16">ENCRYPTED COLLECTION 2025</p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`text-sm tracking-[0.3em] transition-colors duration-500 ${
                selectedCategory === null ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              ALL
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm tracking-[0.3em] uppercase transition-colors duration-500 ${
                  selectedCategory === category ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-white/5 -z-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {visibleProducts.map(product => (
            <div key={product.id} className="opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center space-x-12 text-xs tracking-[0.3em] text-white/30">
          <span>25°E</span>
          <span>VOID PROTOCOL</span>
          <span>2025</span>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;