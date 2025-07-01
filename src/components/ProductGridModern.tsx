
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Eye } from "lucide-react";
import { Product } from "@/pages/Index";

interface ProductGridModernProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onProductClick: (product: Product) => void;
}

const ProductGridModern = ({ products, onAddToCart, selectedCategory, onCategoryChange, onProductClick }: ProductGridModernProps) => {
  const [sortBy, setSortBy] = useState('newest');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const categories = ['All', 'Lawn', 'Cotton', 'Chiffon', 'Silk', 'Festive', 'Formal'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            UNSTITCHED WOMEN'S COLLECTION
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exquisite range of unstitched fabrics with beautiful designs and premium quality
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => onCategoryChange(category)}
                className={selectedCategory === category 
                  ? "bg-black text-white hover:bg-gray-800" 
                  : "border-gray-300 text-black hover:bg-gray-50"
                }
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card 
              key={product.id} 
              className="group border-0 shadow-none cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4] mb-4">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.hoverImageUrl && (
                  <img 
                    src={product.hoverImageUrl}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}
                
                {/* Overlay Actions */}
                <div className={`absolute inset-0 bg-black/20 flex items-center justify-center space-x-2 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Badges */}
                {product.originalPrice && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                    SALE
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge className="absolute top-2 right-2 bg-gray-500 text-white text-xs">
                    SOLD OUT
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-0">
                <h3 className="font-medium text-black mb-2 line-clamp-2 text-sm">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-black">
                    PKR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                {product.pieces && (
                  <p className="text-xs text-gray-500 mt-1">
                    {product.pieces} Piece Unstitched
                  </p>
                )}
                
                {/* Quick Add to Cart */}
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  disabled={!product.inStock}
                  className={`w-full mt-3 text-xs uppercase tracking-wide transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  } ${product.inStock ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500'}`}
                  size="sm"
                >
                  {product.inStock ? 'Add to Cart' : 'Sold Out'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
            LOAD MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGridModern;
