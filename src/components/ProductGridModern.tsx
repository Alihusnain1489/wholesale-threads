
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Heart, Eye, Filter, Grid3X3, Grid2X2, LayoutGrid } from "lucide-react";
import { Product } from "@/pages/Index";

interface ProductGridModernProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onProductClick: (product: Product) => void;
  searchQuery: string;
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
}

const ProductGridModern = ({ 
  products, 
  onAddToCart, 
  selectedCategory, 
  onCategoryChange, 
  onProductClick, 
  searchQuery,
  currentPage,
  onPageChange,
  itemsPerPage
}: ProductGridModernProps) => {
  const [sortBy, setSortBy] = useState('newest');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'2' | '3' | '4'>('4');

  const categories = [
    { name: 'All', label: 'All Products' },
    { name: 'Chikankari', label: 'CHIKANKARI' },
    { name: 'Chunri', label: 'CHUNRI' },
    { name: 'Dhoop Kinaray', label: 'DHOOP KINARAY' },
    { name: 'The Floral World', label: 'THE FLORAL WORLD' },
    { name: 'Tribute to Mothers', label: 'TRIBUTE TO MOTHERS' },
    { name: 'Premium Luxury', label: 'PREMIUM LUXURY' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? products 
      : products.filter(product => product.category === selectedCategory);

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fabric?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        filtered.sort((a, b) => (b.stockLeft || 0) - (a.stockLeft || 0));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  const gridCols = {
    '2': 'grid-cols-1 sm:grid-cols-2',
    '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            UNSTITCHED WOMEN'S COLLECTION
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Discover our exquisite range of unstitched fabrics with beautiful designs and premium quality
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          {categories.map(category => (
            <div
              key={category.name}
              className={`relative cursor-pointer px-2 py-1 ${selectedCategory === category.name ? 'text-black' : 'text-gray-500'}`}
              onClick={() => onCategoryChange(category.name)}
            >
              <span className="text-xs md:text-sm font-medium hover:text-black transition-colors">
                {category.label}
              </span>
              {selectedCategory === category.name && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </div>
          ))}
        </div>

        {/* Filters and Display Options */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-gray-300 text-xs md:text-sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <span className="text-xs md:text-sm text-gray-600">
              {filteredAndSortedProducts.length} items
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="flex items-center space-x-2">
              <span className="text-xs md:text-sm text-gray-600">Display:</span>
              <div className="flex space-x-1">
                <Button
                  variant={viewMode === '2' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('2')}
                  className="p-2"
                >
                  <Grid2X2 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === '3' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('3')}
                  className="p-2"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === '4' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('4')}
                  className="p-2"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">New Arrivals</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid ${gridCols[viewMode]} gap-4 md:gap-6 mb-8`}>
          {currentProducts.map(product => (
            <Card 
              key={product.id} 
              className="group border-0 shadow-none cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4] mb-3 md:mb-4">
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
                <h3 className="font-medium text-black mb-2 line-clamp-2 text-xs md:text-sm">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-black text-sm md:text-base">
                    PKR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs md:text-sm text-gray-400 line-through">
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index + 1}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                      className="cursor-pointer"
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGridModern;
