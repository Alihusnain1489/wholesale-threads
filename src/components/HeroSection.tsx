
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
    <section className="relative w-full h-[450px] bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/612f7db5-54da-456a-a1b8-58b371df1524.png" 
          alt="Premium Pakistani Fabrics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SUMMER SALE '25
            </h1>
            <p className="text-xl mb-2">UPTO</p>
            <p className="text-6xl md:text-8xl font-bold text-red-500 mb-4">40%</p>
            <p className="text-2xl mb-8">OFF</p>
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold"
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
