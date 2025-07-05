
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

const ModernHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/bg-web.webp')" }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2">
              <Plus className="h-3 w-3 mr-2" />
              Trending Fashion Chronicles
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-6 text-gray-900">
              Your fashion should make
              <span className="block font-normal text-gray-600 mt-2">
                you feel good, look great.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Stay in the loop with daily trend updates at Wholesale Threads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full">
                Explore Collection
              </Button>
            </div>
            
            {/* Customer Avatars */}
            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-teal-400 border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-600 ml-3">Trusted by 10,000+ customers</span>
            </div>
          </div>
          
          {/* Right Content - Clothing Display */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-light text-gray-800 mb-2">Premium Collection</h3>
                <p className="text-gray-600">Handcrafted unstitched fabrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
