
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full"
      style={{ backgroundImage: "url('/bg-web.webp')" }}
    >
      <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl text-white animate-fade-in">
          <div className="mb-6">
            <span className="inline-block text-sm sm:text-base font-medium tracking-[0.2em] uppercase text-white/90 mb-4 border-b border-white/30 pb-2">
              New Collection
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 leading-[0.9] tracking-tight">
            <span className="block">Wholesale</span>
            <span className="block font-bold">Threads</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 font-light tracking-wide opacity-90 max-w-2xl leading-relaxed">
            Premium Unstitched Women's Collection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
            <Button className="bg-white text-black hover:bg-gray-100 font-medium py-4 px-8 sm:px-10 rounded-none transition-all duration-300 uppercase tracking-[0.1em] text-sm sm:text-base shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Shop New Arrivals
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-medium py-4 px-8 sm:px-10 rounded-none transition-all duration-300 uppercase tracking-[0.1em] text-sm sm:text-base backdrop-blur-sm bg-white/10"
            >
              View Collection
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wider opacity-80">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="uppercase">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="uppercase">Authentic Designs</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="uppercase">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
