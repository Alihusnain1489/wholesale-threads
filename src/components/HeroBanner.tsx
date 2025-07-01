
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              NEW SEASON
              <br />
              <span className="text-gray-600">ESSENTIALS</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Discover our latest collection of premium fabrics and ready-to-wear pieces. 
              From casual to formal, find your perfect style.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm uppercase tracking-wide">
                Shop Women
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-sm uppercase tracking-wide">
                Shop Men
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop"
              alt="New Season Collection"
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-black">NEW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
