
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

const ModernHero = () => {
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotice(false);
    }, 15000); // Hide after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Notice Bar */}
      {showNotice && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 relative">
          <div className="container mx-auto">
            <div className="flex items-center justify-center text-center">
              <div className="flex items-center space-x-2">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/30">
                  ✓ Verified
                </Badge>
                <span className="text-sm sm:text-base font-medium">
                  Company Verified Products • Open to Bulk Orders • Delivery All Over Pakistan
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowNotice(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-1 h-auto"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/bg-3.webp')" }}
        />
        
        <div className="relative z-10 container mx-auto px-4 h-full">
          <div className="flex flex-col items-center justify-center text-center h-full">
            {/* Main Content */}
            <Badge className="mb-6 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2">
              <Plus className="h-3 w-3 mr-2" />
              Trending Fashion Chronicles
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-4 text-gray-900 max-w-5xl">
              Your fashion should make
              <span className="block font-normal text-gray-600 mt-2">
                you feel good, look great.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Stay in the loop with daily trend updates at Alif Threads. Discover premium unstitched fabrics with authentic Pakistani designs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg">
                Explore Collection
              </Button>
            </div>
            
            {/* Customer Avatars */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-teal-400 border-2 border-white"></div>
              </div>
              <span className="text-base text-gray-600 ml-4">Trusted by 10,000+ customers</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModernHero;
