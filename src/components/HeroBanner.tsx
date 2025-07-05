
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('public/bg-web.webp')" }}
    >
      <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl text-white animate-fade-in">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block text-xs sm:text-sm font-medium tracking-wider uppercase text-white/90 mb-3 sm:mb-4 border-b border-white/30 pb-1 sm:pb-2">
              New Collection
            </span>
          </div>
          
          <h1 className="roman-heading-1 mb-4 sm:mb-6 md:mb-8 text-white">
            <span className="block">Wholesale</span>
            <span className="block font-bold">Threads</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-12 font-light tracking-wide opacity-90 max-w-2xl leading-relaxed">
            Premium Unstitched Women's Collection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            <Button className="roman-btn-primary shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full sm:w-auto">
              Shop New Arrivals
            </Button>
            <Button 
              variant="outline" 
              className="roman-btn-secondary backdrop-blur-sm bg-white/10 w-full sm:w-auto"
            >
              View Collection
            </Button>
          </div>
          
          {/* Feature highlights - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs sm:text-sm font-medium tracking-wider opacity-80">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
              <span className="uppercase">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
              <span className="uppercase">Authentic Designs</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
              <span className="uppercase">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
