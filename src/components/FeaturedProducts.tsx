
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Embroidered Lawn Suit",
      price: 79.00,
      originalPrice: 100.00,
      image: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      isOnSale: true
    },
    {
      id: 2,  
      name: "Elegant Chiffon Collection",
      price: 69.00,
      image: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png"
    },
    {
      id: 3,
      name: "Traditional Chunri Print",
      price: 99.00,
      image: "/lovable-uploads/e8642cf1-db46-4c35-bba3-39817a416de8.png"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Badge className="mb-4 bg-white text-gray-800 hover:bg-gray-50">
              Wholesale Finds
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-light text-gray-900">
              Featured Products
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex items-center rounded-full">
            View All
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isOnSale && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    Sale
                  </Badge>
                )}
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="absolute top-4 right-4 w-10 h-10 p-0 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-semibold text-gray-900">
                    ${product.price.toFixed(2)} USD
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)} USD
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Button variant="outline" className="rounded-full">
            View All Products
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
