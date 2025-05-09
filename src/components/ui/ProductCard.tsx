import React, { useState } from 'react';
import { Product } from '../../types';
import { X, Plus, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, image, isNew } = product;
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Simulated multiple product images
  const productImages = [
    image,
    'https://images.pexels.com/photos/6311600/pexels-photo-6311600.jpeg',
    'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg'
  ];

  return (
    <>
      <div 
        className="group cursor-pointer relative" 
        onClick={() => setOpen(true)}
        onMouseEnter={() => {
          const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
          }, 1000);
          return () => clearInterval(interval);
        }}
      >
        <div className="relative overflow-hidden mb-6">
          <div 
            className="aspect-[3/4] bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${productImages[currentImageIndex]})` }}
          />
          {isNew && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm">
              <span className="text-xs tracking-[0.3em] text-white/70">NEW</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
          
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 flex items-center justify-center space-x-2">
            <Plus size={16} className="text-white/70" />
            <p className="text-center text-sm tracking-[0.3em] text-white/70">EXPLORE</p>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <h3 className="font-light text-sm tracking-[0.2em] text-white/70 group-hover:text-white transition-all duration-500 mb-2 transform group-hover:-translate-x-4">
            {name}
          </h3>
          <p className="text-sm tracking-[0.2em] text-white/50 transform group-hover:-translate-x-4 transition-all duration-500 delay-100">
            ${price.toFixed(2)} USD
          </p>
        </div>

        <div className="absolute -inset-4 border border-white/0 group-hover:border-white/10 transition-all duration-700" />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="bg-black/95 border border-white/10 p-8 max-w-4xl w-full mx-4 relative" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors duration-500" 
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div 
                  className="aspect-[3/4] bg-cover bg-center" 
                  style={{ backgroundImage: `url(${productImages[currentImageIndex]})` }} 
                />
                <div className="grid grid-cols-3 gap-4">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      className={`aspect-[3/4] bg-cover bg-center ${
                        currentImageIndex === idx ? 'ring-1 ring-white/30' : ''
                      }`}
                      style={{ backgroundImage: `url(${img})` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl tracking-[0.3em] text-white/90">{name}</h2>
                    <p className="text-lg tracking-[0.2em] text-white/70">${price.toFixed(2)} USD</p>
                  </div>

                  <div className="space-y-8 mb-12">
                    <p className="text-sm tracking-[0.1em] text-white/50 leading-relaxed">
                      Exclusive artifact from the VOID collection. Limited availability. Each piece is uniquely encrypted and authenticated.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm tracking-[0.2em] text-white/40">
                        <span>MATERIAL</span>
                        <span>ENCRYPTED FABRIC</span>
                      </div>
                      <div className="flex items-center justify-between text-sm tracking-[0.2em] text-white/40">
                        <span>ORIGIN</span>
                        <span>25°E VOID</span>
                      </div>
                      <div className="flex items-center justify-between text-sm tracking-[0.2em] text-white/40">
                        <span>AUTHENTICATION</span>
                        <span>QUANTUM SEALED</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full border border-white/20 hover:border-white/40 py-4 text-white/70 hover:text-white text-sm tracking-[0.3em] transition-all duration-700 flex items-center justify-center space-x-2">
                    <span>ADD TO CART</span>
                    <ChevronRight size={16} />
                  </button>
                  <p className="text-center text-xs tracking-[0.2em] text-white/30">
                    LIMITED TO 25 PIECES WORLDWIDE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;