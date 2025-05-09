import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Poster } from '../../types';

interface CarouselProps {
  posters: Poster[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  posters, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === posters.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, currentIndex, isTransitioning]);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-black overflow-hidden">
      <div className="relative w-full h-full">
        {posters.map((poster, index) => (
          <div
            key={poster.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${poster.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8 z-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 text-center tracking-wide">
                {poster.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-md text-center font-light">
                {poster.subtitle}
              </p>
              <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300">
                {poster.cta}
              </button>
            </div>
          </div>
        ))}
        
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {posters.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-100' 
                  : 'bg-white bg-opacity-50 scale-75 hover:scale-90 hover:bg-opacity-70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;