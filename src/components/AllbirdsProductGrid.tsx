import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";

interface AllbirdsProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  searchQuery?: string;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const AllbirdsProductGrid = ({
  products,
  onAddToCart,
  onProductClick,
  searchQuery = '',
  selectedCategory = 'All',
  onCategoryChange
}: AllbirdsProductGridProps) => {
  const categories = ['All', 'Jackets', 'Lawn', 'Suits'];
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl allbirds-heading font-light mb-4">
            Our Collection
          </h2>
          <p className="text-lg allbirds-subheading max-w-2xl mx-auto">
            Discover our range of premium unstitched fabrics with authentic Pakistani designs
          </p>
        </div>

        {/* Category Filter - Only show if not searching */}
        {!searchQuery && (
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => onCategoryChange?.(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-earth-charcoal text-white'
                      : 'text-earth-charcoal hover:bg-earth-sage/20'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-shadow duration-300"
              onClick={() => onProductClick(product)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="aspect-square bg-earth-cream rounded-lg overflow-hidden mb-4 relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-3 left-3 bg-earth-charcoal text-white">
                      Save PKR {product.originalPrice - product.price}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-medium">Out of Stock</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="allbirds-heading text-lg font-medium leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium text-earth-charcoal">
                      PKR {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        PKR {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{product.color}</span>
                    <span>•</span>
                    <span>{product.fabric}</span>
                  </div>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    disabled={!product.inStock}
                    className="w-full mt-4 bg-earth-charcoal hover:bg-earth-charcoal/90 text-white rounded-none font-medium tracking-wide"
                  >
                    {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg allbirds-subheading">
              No products found {searchQuery && `for "${searchQuery}"`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllbirdsProductGrid;