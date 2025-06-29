
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Premium Pakistani Fabrics
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover our exquisite collection of unstitched Pakistani fabrics for women. 
            From elegant lawn to luxurious silk, we offer wholesale prices for premium quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-8 py-3 text-lg border border-amber-200"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/923261052244', '_blank')}
              className="px-8 py-3 text-lg border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-amber-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gray-200 rounded-full opacity-30"></div>
    </section>
  );
};

export default HeroSection;
