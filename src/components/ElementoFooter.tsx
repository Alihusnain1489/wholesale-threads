import React from 'react';
import { useNavigate } from 'react-router-dom';

const ElementoFooter = () => {
  const navigate = useNavigate();

  const handleLinkClick = (section: string) => {
    switch(section) {
      case 'contact':
        navigate('/contact');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'customer-services':
        navigate('/customer-services');
        break;
      case 'shipping':
        navigate('/shipping');
        break;
      case 'returns':
        navigate('/returns');
        break;
      case 'size-guide':
        navigate('/size-guide');
        break;
      default:
        console.log(`Navigating to ${section}`);
    }
  };

  return (
    <footer className="bg-[hsl(var(--nav-dark))] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light tracking-[0.2em] mb-6">ALIF STORE</h3>
            <p className="text-gray-300 mb-6 max-w-md font-light leading-relaxed">
              Discover our curated collection of premium menswear designed for the modern gentleman. 
              Crafted with attention to detail and superior quality materials.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 +92 326 1052244</p>
              <p>✉️ info@alifstore.com</p>
              <p>📍 Lahore, Pakistan</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-6 text-white">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <button className="hover:text-white transition-colors font-light">
                  Elegant Men's Suits
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors font-light">
                  Classic Suits
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors font-light">
                  Men's Accessories
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors font-light">
                  Men's Tags
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors font-light">
                  Bottoms & Footwear
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition-colors font-light"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition-colors font-light"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('customer-services')}
                  className="hover:text-white transition-colors font-light"
                >
                  Customer Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('size-guide')}
                  className="hover:text-white transition-colors font-light"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('shipping')}
                  className="hover:text-white transition-colors font-light"
                >
                  Shipping Info
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('returns')}
                  className="hover:text-white transition-colors font-light"
                >
                  Returns
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-medium mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4 font-light">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded font-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 font-light mb-4 md:mb-0">
              © 2025 Alif Store. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors font-light">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors font-light">
                Terms of Service
              </button>
              <button className="hover:text-white transition-colors font-light">
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ElementoFooter;