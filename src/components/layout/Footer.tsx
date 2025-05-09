import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg mb-4 font-light tracking-wider">MINIMØ</h3>
            <p className="text-gray-600 text-sm mb-4">
              Modern, minimalist clothing for the contemporary individual. Quality fabrics, timeless designs.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase mb-4 tracking-wider">Shop</h4>
            <ul className="space-y-2">
              {['New Arrivals', 'Bestsellers', 'Outerwear', 'Knitwear', 'Accessories'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase mb-4 tracking-wider">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Sustainability', 'Stores', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase mb-4 tracking-wider">Help</h4>
            <ul className="space-y-2">
              {['Customer Service', 'Shipping & Returns', 'Size Guide', 'FAQ', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 MINIMØ. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Instagram', 'Twitter', 'Facebook', 'Pinterest'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-gray-500 text-sm hover:text-black transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;