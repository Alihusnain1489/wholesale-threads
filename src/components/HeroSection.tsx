
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[450px] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/612f7db5-54da-456a-a1b8-58b371df1524.png" 
          alt="Premium Pakistani Fabrics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-800/30 to-transparent"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
              Premium Fabric Collection
            </h1>
            <p className="text-xl mb-2 text-slate-100">Discover Our</p>
            <p className="text-5xl md:text-7xl font-bold text-emerald-400 mb-4 drop-shadow-lg">Quality</p>
            <p className="text-2xl mb-8 text-slate-100">Fabrics</p>
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              EXPLORE NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
