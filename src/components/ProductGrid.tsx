
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/pages/Index";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Premium Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.originalPrice && (
                  <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 text-xs">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-sm px-3 py-1">
                      Out of Stock
                    </Badge>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 h-8 w-8"
                >
                  <Heart className="h-3 w-3" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(4.8)</span>
                </div>
                
                <h3 className="font-semibold text-sm mb-2 text-gray-800 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg font-bold text-amber-700">
                      ₨ {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₨ {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 disabled:opacity-50 disabled:cursor-not-allowed text-sm py-2 border border-amber-200"
                >
                  {product.inStock ? (
                    <>
                      <ShoppingCart className="h-3 w-3 mr-2" />
                      Add to Cart
                    </>
                  ) : (
                    'Out of Stock'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
