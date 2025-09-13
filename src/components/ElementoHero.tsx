import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ElementoHeroProps {
  onLoginClick?: () => void;
  isLoggedIn?: boolean;
}

const ElementoHero = ({ onLoginClick, isLoggedIn = false }: ElementoHeroProps) => {
  const handleShopClick = () => {
    if (!isLoggedIn) {
      onLoginClick?.();
      return;
    }
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[90vh] overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative h-[90vh] w-full">
          <img 
            src="/winter-hero.webp"
            alt="Elegant suit collection"
            className="w-full h-full object-cover object-center "
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Scrolling Text Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="inline-block px-8 text-sm font-light tracking-wide text-gray-900">
            PREPARE FOR YOUR IMPORTANT EVENT • CLEARANCE • NEW WINTER COLLECTION 2024 •
            PREPARE FOR YOUR IMPORTANT EVENT • CLEARANCE • NEW WINTER COLLECTION 2024 •
            PREPARE FOR YOUR IMPORTANT EVENT • CLEARANCE • NEW WINTER COLLECTION 2024 •
          </span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-black text-white border-white/20 backdrop-blur-sm">
              Premium Collection
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight font-mono">
              Style your look
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 font-light leading-relaxed">
              Discover our exquisite collection of Pakistani ladies suits designed for the modern woman.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleShopClick}
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-light"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white  hover:bg-white hover:text-black px-8 py-4 text-lg font-light"
              >
                View Catalog
              </Button>
            </div>
          </div>
        </div>
        </div>
        
    </section>
  );
};

export default ElementoHero;