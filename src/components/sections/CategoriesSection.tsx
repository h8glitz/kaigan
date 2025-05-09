import React, { useState } from 'react';
import CategoryCard from '../ui/CategoryCard';
import ProductCard from '../ui/ProductCard';
import { categories } from '../../data/categories';
import { products } from '../../data/products';

const CategoriesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory.toLowerCase())
    : products;

  return (
    <section id="categories" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl mb-8 text-center font-light tracking-wider uppercase">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categories.map(category => (
          <div 
            key={category.id} 
            onClick={() => setSelectedCategory(selectedCategory === category.slug ? null : category.slug)}
            className="cursor-pointer"
          >
            <CategoryCard 
              category={category} 
              isSelected={selectedCategory === category.slug}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl mb-8 text-center font-light tracking-wider uppercase">
          {selectedCategory ? `${selectedCategory.replace('-', ' ')}` : 'All Products'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;