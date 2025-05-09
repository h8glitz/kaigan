import React from 'react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
  isSelected?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isSelected = false }) => {
  return (
    <div className={`group relative overflow-hidden ${isSelected ? 'ring-2 ring-black' : ''}`}>
      <div 
        className="h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${category.image})` }}
      />
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
        isSelected ? 'bg-opacity-40' : 'bg-opacity-20 group-hover:bg-opacity-30'
      }`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`bg-white bg-opacity-90 py-3 px-6 transform transition-transform duration-300 ${
          isSelected ? '-translate-y-1' : 'group-hover:-translate-y-1'
        }`}>
          <h3 className="text-center text-xl tracking-wider">{category.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;