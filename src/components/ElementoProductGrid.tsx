import React, { useRef, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import productsData from "@/data/products.json"; // ✅ Correct import for Vite

const ElementoProductGrid = ({ 
  onAddToCart, 
  onProductClick,
  searchQuery
}: { 
  onAddToCart: (product: Product) => void; 
  onProductClick: (product: Product) => void; 
  searchQuery: string 
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // ✅ Keep JSON in a ref
  const productsRef = useRef<Product[]>(productsData);

  // ✅ Filtering
  const filteredProducts = useMemo(() => {
    let filtered = productsRef.current;

    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fabric?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery]);

  return (
    <section className="py-16 bg-[hsl(var(--nav-dark))]" id="products">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map(product => (
            <Card 
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onProductClick(product)}
              className="group cursor-pointer bg-white hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                <img 
                  src={product.imageUrl} 
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

                {/* Add to Cart */}
                <div className={`absolute bottom-4 left-4 right-4 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? "opacity-100" : "opacity-0"
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

              {/* Card Content */}
              <CardContent className="p-4">
                <p className="text-xs text-gray-500 mb-2 font-light tracking-wide">
                  Elemento Blaze
                </p>
                <h3 className="font-light text-gray-900 mb-3 line-clamp-2 text-sm leading-relaxed">
                  {product.name}
                </h3>
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
      </div>
    </section>
  );
};

export default ElementoProductGrid;
