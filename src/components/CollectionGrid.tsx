
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CollectionGrid = () => {
  const collections = [
    {
      title: "Accessories",
      image: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      description: "Complete your look with our premium accessories"
    },
    {
      title: "Women",
      image: "/lovable-uploads/5544a434-4a1f-46cc-b113-10304bbc10aa.png", 
      description: "Elegant unstitched suits for modern women"
    },
    {
      title: "Men",
      image: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png",
      description: "Premium fabric collection for men"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-200">
            Categories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6">
            Our Collection
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div 
              key={index}
              className={`group cursor-pointer ${index === collections.length - 1 ? 'lg:col-span-1' : ''}`}
            >
              <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-medium mb-2">{collection.title}</h3>
                  <p className="text-sm opacity-90">{collection.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Discovery Card */}
          <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-gray-100 transition-colors duration-300">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Discovery all new items
            </h3>
            <Button variant="outline" className="rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
