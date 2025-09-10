import React, { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";

// Import all the suit images
import ladiesSuit1 from "@/assets/ladies-suit-1.jpg";
import ladiesSuit2 from "@/assets/ladies-suit-2.jpg";
import ladiesSuit3 from "@/assets/ladies-suit-3.jpg";
import ladiesSuit4 from "@/assets/ladies-suit-4.jpg";
import ladiesSuit5 from "@/assets/ladies-suit-5.jpg";
import ladiesSuit6 from "@/assets/ladies-suit-6.jpg";
import ladiesSuit7 from "@/assets/ladies-suit-7.jpg";
import ladiesSuit8 from "@/assets/ladies-suit-8.jpg";
import ladiesSuit9 from "@/assets/ladies-suit-9.jpg";
import ladiesSuit10 from "@/assets/ladies-suit-10.jpg";
import ladiesSuit11 from "@/assets/ladies-suit-11.jpg";
import ladiesSuit12 from "@/assets/ladies-suit-12.jpg";
import ladiesSuit13 from "@/assets/ladies-suit-13.jpg";
import ladiesSuit14 from "@/assets/ladies-suit-14.jpg";
import ladiesSuit15 from "@/assets/ladies-suit-15.jpg";

const imageMap: { [key: string]: string } = {
  "/src/assets/ladies-suit-1.jpg": ladiesSuit1,
  "/src/assets/ladies-suit-2.jpg": ladiesSuit2,
  "/src/assets/ladies-suit-3.jpg": ladiesSuit3,
  "/src/assets/ladies-suit-4.jpg": ladiesSuit4,
  "/src/assets/ladies-suit-5.jpg": ladiesSuit5,
  "/src/assets/ladies-suit-6.jpg": ladiesSuit6,
  "/src/assets/ladies-suit-7.jpg": ladiesSuit7,
  "/src/assets/ladies-suit-8.jpg": ladiesSuit8,
  "/src/assets/ladies-suit-9.jpg": ladiesSuit9,
  "/src/assets/ladies-suit-10.jpg": ladiesSuit10,
  "/src/assets/ladies-suit-11.jpg": ladiesSuit11,
  "/src/assets/ladies-suit-12.jpg": ladiesSuit12,
  "/src/assets/ladies-suit-13.jpg": ladiesSuit13,
  "/src/assets/ladies-suit-14.jpg": ladiesSuit14,
  "/src/assets/ladies-suit-15.jpg": ladiesSuit15,
};

interface ElementoProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  searchQuery: string;
}

const ElementoProductGrid = ({ 
  products, 
  onAddToCart, 
  onProductClick,
  searchQuery
}: ElementoProductGridProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fabric?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [products, searchQuery]);

  return (
    <section className="py-16 bg-[hsl(var(--nav-dark))]" id="products">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
            Pakistani Ladies Suits
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-light">
            Discover our exquisite collection of Pakistani ladies suits ranging from ₨2,000 to ₨7,000
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map(product => (
            <Card 
              key={product.id} 
              className="group cursor-pointer bg-white hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                <img 
                  src={imageMap[product.imageUrl] || product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Sale Badge */}
                {product.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white hover:bg-red-600 rounded">
                    Sale
                  </Badge>
                )}

                {/* Sold Out Badge */}
                {!product.inStock && (
                  <Badge className="absolute top-3 left-3 bg-gray-500 text-white rounded">
                    Sold out
                  </Badge>
                )}

                {/* Add to Cart Button - appears on hover */}
                <div className={`absolute bottom-4 left-4 right-4 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button 
                    size="sm" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    disabled={!product.inStock}
                    className="w-full bg-[hsl(var(--nav-dark))] hover:bg-gray-700 text-white text-sm py-2"
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                {/* Brand Name */}
                <p className="text-xs text-gray-500 mb-2 font-light tracking-wide">
                  Elemento Blaze
                </p>
                
                {/* Product Name */}
                <h3 className="font-light text-gray-900 mb-3 line-clamp-2 text-sm leading-relaxed">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-gray-900">
                    ₨{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₨{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-light text-white mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-300 text-sm mb-6 font-light">
              Get exclusive deals and early access to new collections.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded font-light">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElementoProductGrid;