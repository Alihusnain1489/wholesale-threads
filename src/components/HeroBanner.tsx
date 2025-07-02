
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] w-full"
      style={{ backgroundImage: "url('/bg-web.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Wholesale Threads
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Premium Unstitched Women's Collection
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
