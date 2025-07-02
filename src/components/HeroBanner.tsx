
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] lg:h-[500px] w-full"
      style={{ backgroundImage: "url('/bg-web.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 leading-tight">
            Wholesale Threads
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-4 sm:mb-6 px-4">
            Premium Unstitched Women's Collection
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-medium transition-all duration-200">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
