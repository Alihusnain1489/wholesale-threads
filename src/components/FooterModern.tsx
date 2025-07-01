
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, CreditCard } from "lucide-react";

const FooterModern = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-black">WHOLESALE THREADS</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Your premier destination for quality fabrics and fashion. We've been serving customers 
              with exceptional products and service since 2020.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Fashion Street, Lahore, Pakistan</span>
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
              <li><a href="#contact" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">FAQ</a></li>
              <li><a href="#size-guide" className="hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#shipping" className="hover:text-black transition-colors">Shipping Info</a></li>
              <li><a href="#returns" className="hover:text-black transition-colors">Returns & Exchanges</a></li>
              <li><a href="#track" className="hover:text-black transition-colors">Track Your Order</a></li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h4 className="font-semibold mb-4 text-black">About</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#careers" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#press" className="hover:text-black transition-colors">Press</a></li>
              <li><a href="#sustainability" className="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#affiliates" className="hover:text-black transition-colors">Affiliate Program</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-black transition-colors">Cookie Policy</a></li>
              <li><a href="#accessibility" className="hover:text-black transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media & Payment */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
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
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2024 Wholesale Threads. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterModern;
