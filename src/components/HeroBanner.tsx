
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full"
      style={{ backgroundImage: "url('/bg-web.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight">
            Wholesale Threads
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 px-2">
            Premium Unstitched Women's Collection
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
