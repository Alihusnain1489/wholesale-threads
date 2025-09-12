import React, { useRef, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import productsData from "@/data/products.json"; // ✅ Correct import for Vite

const ElementoProductGrid = ({ 
  onAddToCart, 
  onProductClick,
  searchQuery,
  selectedCategory,
  sortBy,
  onCategoryChange,
  onSortChange
}: { 
  onAddToCart: (product: Product) => void; 
  onProductClick: (product: Product) => void; 
  searchQuery: string;
  selectedCategory: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // ✅ Keep JSON in a ref
  const productsRef = useRef<Product[]>(productsData);

  // Get categories
  const categories = useMemo(() => {
    const categorySet = new Set(productsRef.current.map(p => p.category));
    return ['All', ...Array.from(categorySet)];
  }, []);

  // ✅ Filtering and Sorting
  const filteredProducts = useMemo(() => {
    let filtered = productsRef.current;

    // Category filtering
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Search filtering
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fabric?.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
      case 'latest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <section className="py-16 bg-[hsl(var(--nav-dark))]" id="products">
      <div className="container mx-auto px-4">
        {/* Category and Sort Bar */}
        <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-white text-[hsl(var(--nav-dark))] shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:bg-white focus:text-[hsl(var(--nav-dark))] transition-all duration-200"
            >
              <option value="latest" className="text-black">Latest Design</option>
              <option value="price-low" className="text-black">Price: Low to High</option>
              <option value="price-high" className="text-black">Price: High to Low</option>
              <option value="name" className="text-black">Name A-Z</option>
            </select>
          </div>
        </div>

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
