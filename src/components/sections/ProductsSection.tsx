import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const ProductsSection: React.FC = () => {
  // Показываем все товары без фильтрации
  const filteredProducts = products;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl mb-6 text-center font-light tracking-wider uppercase">My Products</h2>
        {/* Категории и фильтры убраны */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;