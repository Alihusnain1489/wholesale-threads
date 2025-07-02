
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, CreditCard } from "lucide-react";

const FooterModern = () => {
  const handleLinkClick = (section: string) => {
    // You can implement actual navigation or modal opening here
    console.log(`Navigating to ${section}`);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-black">WHOLESALE THREADS</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Pakistan's premier destination for unstitched women's clothing. We specialize in premium quality fabrics including lawn, cotton, chiffon, and silk with beautiful traditional and contemporary designs. Established in 2020, we've been serving customers nationwide with exceptional products and professional stitching services.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Shop 45, Anarkali Bazaar, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 326 1052244</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@wholesalethreads.com</span>
              </div>
            </div>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-black transition-colors text-left">Contact Us</button></li>
              <li><button onClick={() => handleLinkClick('faq')} className="hover:text-black transition-colors text-left">Frequently Asked Questions</button></li>
              <li><button onClick={() => handleLinkClick('size-guide')} className="hover:text-black transition-colors text-left">Size Guide & Measurements</button></li>
              <li><button onClick={() => handleLinkClick('shipping')} className="hover:text-black transition-colors text-left">Shipping Information</button></li>
              <li><button onClick={() => handleLinkClick('returns')} className="hover:text-black transition-colors text-left">Returns & Exchanges</button></li>
              <li><button onClick={() => handleLinkClick('track')} className="hover:text-black transition-colors text-left">Track Your Order</button></li>
              <li><button onClick={() => handleLinkClick('stitching')} className="hover:text-black transition-colors text-left">Stitching Services</button></li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h4 className="font-semibold mb-4 text-black">About Wholesale Threads</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-black transition-colors text-left">Our Story & Mission</button></li>
              <li><button onClick={() => handleLinkClick('quality')} className="hover:text-black transition-colors text-left">Quality Assurance</button></li>
              <li><button onClick={() => handleLinkClick('designers')} className="hover:text-black transition-colors text-left">Our Designers</button></li>
              <li><button onClick={() => handleLinkClick('wholesale')} className="hover:text-black transition-colors text-left">Wholesale Inquiries</button></li>
              <li><button onClick={() => handleLinkClick('careers')} className="hover:text-black transition-colors text-left">Careers & Jobs</button></li>
              <li><button onClick={() => handleLinkClick('press')} className="hover:text-black transition-colors text-left">Media & Press</button></li>
              <li><button onClick={() => handleLinkClick('reviews')} className="hover:text-black transition-colors text-left">Customer Reviews</button></li>
            </ul>
          </div>
          
          {/* Categories & Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Shop Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li><button onClick={() => handleLinkClick('lawn')} className="hover:text-black transition-colors text-left">Lawn Collection</button></li>
              <li><button onClick={() => handleLinkClick('cotton')} className="hover:text-black transition-colors text-left">Cotton Suits</button></li>
              <li><button onClick={() => handleLinkClick('chiffon')} className="hover:text-black transition-colors text-left">Chiffon & Silk</button></li>
              <li><button onClick={() => handleLinkClick('festive')} className="hover:text-black transition-colors text-left">Festive Wear</button></li>
              <li><button onClick={() => handleLinkClick('formal')} className="hover:text-black transition-colors text-left">Formal Collection</button></li>
            </ul>
            
            <h4 className="font-semibold mb-4 text-black">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => handleLinkClick('privacy')} className="hover:text-black transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleLinkClick('terms')} className="hover:text-black transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => handleLinkClick('refund')} className="hover:text-black transition-colors text-left">Refund Policy</button></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media & Payment */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Follow us on social media:</span>
              <div className="flex space-x-3">
                <a href="https://facebook.com/wholesalethreads" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/wholesalethreads" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/wholesalethreads" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/wholesalethreads" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">We accept:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">A</div>
                <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">P</div>
                <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center">💳</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2024 Wholesale Threads Pakistan. All rights reserved. | Registered Business License: WTP-2020-LHR-001
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Specializing in premium unstitched women's clothing with nationwide delivery and professional stitching services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterModern;
