
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
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          {/* Main Content */}
          <Badge className="mb-6 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2">
            <Plus className="h-3 w-3 mr-2" />
            Trending Fashion Chronicles
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-6 text-gray-900 max-w-4xl">
            Your fashion should make
            <span className="block font-normal text-gray-600 mt-2">
              you feel good, look great.
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Stay in the loop with daily trend updates at Wholesale Threads. Discover premium unstitched fabrics with authentic Pakistani designs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full">
              Explore Collection
            </Button>
          </div>
          
          {/* Customer Avatars */}
          <div className="flex items-center justify-center space-x-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-teal-400 border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-600 ml-3">Trusted by 10,000+ customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
