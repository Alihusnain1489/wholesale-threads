
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
      default:
        console.log(`Navigating to ${section}`);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterModern;
