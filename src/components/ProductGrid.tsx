
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product } from "@/pages/Index";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductGrid = ({ products, onAddToCart, selectedCategory, onCategoryChange }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState('name');
  const [priceFilter, setPriceFilter] = useState('all');

  const categories = ['All', 'Lawn', 'Chiffon', 'Silk', 'Cotton', 'Georgette'];

  const filteredAndSortedProducts = React.useMemo(() => {
    let filtered = [...products];

    // Price filter
    if (priceFilter !== 'all') {
      switch (priceFilter) {
        case 'under2000':
          filtered = filtered.filter(p => p.price < 2000);
          break;
        case '2000-3000':
          filtered = filtered.filter(p => p.price >= 2000 && p.price <= 3000);
          break;
        case 'above3000':
          filtered = filtered.filter(p => p.price > 3000);
          break;
      }
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [products, sortBy, priceFilter]);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Premium Collection
        </h2>
        
        {/* Filters and Sorting */}
        <div className="mb-8 space-y-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => onCategoryChange(category)}
                className={selectedCategory === category 
                  ? "rounded-full bg-amber-600 hover:bg-amber-700 text-white" 
                  : "rounded-full border-amber-200 text-amber-700 hover:bg-amber-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-wrap justify-center gap-4">
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under2000">Under ₨2,000</SelectItem>
                <SelectItem value="2000-3000">₨2,000 - ₨3,000</SelectItem>
                <SelectItem value="above3000">Above ₨3,000</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map(product => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 text-center">{product.name}</h3>
                
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xl font-bold text-amber-700">
                    ₨ {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₨ {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
