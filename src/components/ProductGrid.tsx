import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onProductClick: (product: Product) => void;
}

const ProductGrid = ({ products, onAddToCart, selectedCategory, onCategoryChange, onProductClick }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState('name');
  const [priceFilter, setPriceFilter] = useState('all');
  const [displayStyle, setDisplayStyle] = useState('grid');

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
    <section id="products" className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Our Premium Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our exquisite range of Pakistani fabrics, carefully selected for quality and elegance
          </p>
        </div>
        
        {/* Filters and Sorting */}
        <div className="mb-8 space-y-6">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => onCategoryChange(category)}
                className={selectedCategory === category 
                  ? "rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg" 
                  : "rounded-full border-amber-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Display Options and Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <Select value={displayStyle} onValueChange={setDisplayStyle}>
              <SelectTrigger className="w-48 border-amber-200 focus:border-amber-400">
                <SelectValue placeholder="Display Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grid">Grid View</SelectItem>
                <SelectItem value="list">List View</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-48 border-amber-200 focus:border-amber-400">
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
              <SelectTrigger className="w-48 border-amber-200 focus:border-amber-400">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <div className="text-center">
            <p className="text-gray-600">
              Showing {filteredAndSortedProducts.length} products
            </p>
          </div>
        </div>
        
        <div className={`grid ${displayStyle === 'grid' ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
          {filteredAndSortedProducts.map(product => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-200 overflow-hidden bg-white/70 backdrop-blur-sm cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden h-[270px]">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <img 
                  src={product.hoverImageUrl || product.imageUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {product.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-xs px-2 py-1 shadow-lg">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-sm px-4 py-2 shadow-lg">
                      Out of Stock
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-4 bg-white/90 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-3 text-gray-800 text-center group-hover:text-amber-700 transition-colors">{product.name}</h3>
                
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
