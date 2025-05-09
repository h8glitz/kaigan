import React, { useState } from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, image, isNew } = product;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group cursor-pointer" onClick={() => setOpen(true)}>
        <div className="relative overflow-hidden mb-4">
          <div 
            className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          {isNew && (
            <div className="absolute top-2 right-2 bg-black text-white text-xs uppercase tracking-wider py-1 px-2">
              New
            </div>
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-center text-sm uppercase tracking-wider">Add to Cart</p>
          </div>
        </div>
        <h3 className="font-light text-sm">{name}</h3>
        <p className="text-sm">${price.toFixed(2)}</p>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-2xl" onClick={() => setOpen(false)}>&times;</button>
            <img src={image} alt={name} className="w-full h-80 object-cover rounded mb-4" />
            <h2 className="text-2xl mb-2 font-medium">{name}</h2>
            <p className="text-lg mb-4">${price.toFixed(2)}</p>
            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition-colors">Добавить в корзину</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;