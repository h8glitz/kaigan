import React, { useState } from 'react';
import { Product } from '../../types';
import { X } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, image, isNew } = product;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group cursor-pointer" onClick={() => setOpen(true)}>
        <div className="relative overflow-hidden mb-6">
          <div 
            className="aspect-[3/4] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          {isNew && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm">
              <span className="text-xs tracking-[0.3em] text-white/70">NEW</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
            <p className="text-center text-sm tracking-[0.3em] text-white/70">VIEW ARTIFACT</p>
          </div>
        </div>
        <h3 className="font-light text-sm tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-500 mb-2">{name}</h3>
        <p className="text-sm tracking-[0.2em] text-white/50">${price.toFixed(2)} USD</p>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="bg-black/95 border border-white/10 p-8 max-w-xl w-full mx-4 relative" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors duration-500" 
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-[3/4] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-xl tracking-[0.3em] mb-4 text-white/90">{name}</h2>
                  <p className="text-lg tracking-[0.2em] mb-8 text-white/70">${price.toFixed(2)} USD</p>
                  <p className="text-sm tracking-[0.1em] text-white/50 leading-relaxed mb-8">
                    Exclusive artifact from the VOID collection. Limited availability. Each piece is uniquely encrypted and authenticated.
                  </p>
                </div>
                
                <button className="w-full border border-white/20 hover:border-white/40 py-4 text-white/70 hover:text-white text-sm tracking-[0.3em] transition-all duration-700">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;