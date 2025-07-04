
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
      style={{ backgroundImage: "url('/bg-web.webp')" }}
    >
      <div className="hero-overlay absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-5xl px-4 animate-fade-in">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
            Wholesale Threads
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 font-light tracking-wide opacity-90">
            Premium Unstitched Women's Collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="roman-btn-primary text-base sm:text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Shop Collection
            </Button>
            <Button variant="outline" className="bg-white/20 border-white text-white hover:bg-white hover:text-slate-900 font-medium py-4 px-8 rounded-none transition-all duration-300 uppercase tracking-wide text-base sm:text-lg backdrop-blur-sm">
              View Lookbook
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="hidden md:flex justify-center items-center space-x-8 mt-12 text-sm font-medium tracking-wide opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Authentic Designs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
