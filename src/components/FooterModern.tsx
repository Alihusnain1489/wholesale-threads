
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FooterModern = () => {
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
      case 'privacy':
        console.log('Privacy policy clicked');
        break;
      default:
        console.log(`Navigating to ${section}`);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">ALIF THREADS</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Premium unstitched women's collection with authentic Pakistani designs. 
              Quality fabrics for the modern woman.
            </p>
            <div className="text-sm text-gray-500">
              <p>📞 +92 326 1052244</p>
              <p>✉️ info@alifthreads.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="hover:text-gray-900 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="hover:text-gray-900 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('customer-services')} 
                  className="hover:text-gray-900 transition-colors"
                >
                  Customer Service
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <button className="hover:text-gray-900 transition-colors">
                  Size Guide
                </button>
              </li>
              <li>
                <button className="hover:text-gray-900 transition-colors">
                  Shipping Info
                </button>
              </li>
              <li>
                <button className="hover:text-gray-900 transition-colors">
                  Returns
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              © 2025 Alif Threads, Powered by Shopify
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <button 
                onClick={() => handleLinkClick('privacy')} 
                className="hover:text-gray-900 transition-colors"
              >
                Privacy policy
              </button>
              <button className="hover:text-gray-900 transition-colors">
                Terms of service
              </button>
              <button className="hover:text-gray-900 transition-colors">
                Refund policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterModern;
