import React from 'react';
import { Button } from "@/components/ui/button";

const AllbirdsHero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-earth-sand via-earth-cream to-earth-sage overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-earth-stone/20 to-transparent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-earth-sage/30 to-transparent"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="bg-white/80 backdrop-blur-sm text-earth-charcoal px-4 py-2 rounded-full text-sm font-medium tracking-wide">
              LONG WEEKEND, LOW PRICES.
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl xl:text-9xl allbirds-heading font-light leading-tight mb-6">
            <span className="block">Labor Day</span>
            <span className="block text-earth-charcoal">Sale</span>
          </h1>
          
          {/* Discount */}
          <div className="mb-8">
            <span className="text-7xl lg:text-8xl allbirds-heading font-light text-earth-charcoal">
              UP TO
            </span>
            <div className="relative inline-block ml-6">
              <span className="text-9xl lg:text-[12rem] allbirds-heading font-light text-white">
                50%
              </span>
              <span className="text-6xl lg:text-7xl allbirds-heading font-light text-white ml-2">
                OFF
              </span>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg lg:text-xl allbirds-subheading mb-8 max-w-md">
            APPLIES TO SELECT STYLES
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-earth-charcoal hover:bg-earth-charcoal/90 text-white px-8 py-4 rounded-none text-base font-medium tracking-wide"
            >
              SHOP MEN
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-earth-charcoal text-earth-charcoal hover:bg-earth-charcoal hover:text-white px-8 py-4 rounded-none text-base font-medium tracking-wide"
            >
              SHOP WOMEN
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product Image */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
        <div className="h-full flex items-center justify-center">
          <div className="relative">
            {/* Placeholder for product image */}
            <div className="w-96 h-96 bg-gradient-to-br from-white to-earth-stone rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-earth-charcoal/30 text-lg font-medium">Product Image</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllbirdsHero;