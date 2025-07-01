
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              SUMMER SALE
              <br />
              <span className="text-red-600">'25</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Discover our exquisite collection of unstitched women's clothing. 
              Premium fabrics with beautiful designs and patterns.
            </p>
            <div className="bg-red-600 text-white inline-block px-4 py-2 rounded-lg mb-4">
              <span className="text-2xl font-bold">UPTO 40% OFF</span>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm uppercase tracking-wide">
                Shop Now
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-sm uppercase tracking-wide">
                View Collection
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/515e1bb2-b7a9-4126-8e72-203817453fb8.png"
              alt="Summer Sale Collection"
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium">SALE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
