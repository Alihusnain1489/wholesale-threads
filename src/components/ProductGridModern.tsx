
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Heart, Eye, Filter, Grid3X3, Grid2X2, LayoutGrid, Percent, Clock, ChevronDown } from "lucide-react";
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
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { name: 'All', label: 'All Products', count: products.length },
    { name: 'Sale', label: 'Summer Sale', icon: <Percent className="h-4 w-4" />, badge: 'HOT', count: products.filter(p => p.originalPrice).length },
    { name: 'Chikankari', label: 'Chikankari', count: products.filter(p => p.category === 'Chikankari').length },
    { name: 'Chunri', label: 'Chunri', count: products.filter(p => p.category === 'Chunri').length },
    { name: 'Dhoop Kinaray', label: 'Dhoop Kinaray', count: products.filter(p => p.category === 'Dhoop Kinaray').length },
    { name: 'The Floral World', label: 'The Floral World', count: products.filter(p => p.category === 'The Floral World').length },
    { name: 'Tribute to Mothers', label: 'Tribute to Mothers', count: products.filter(p => p.category === 'Tribute to Mothers').length },
    { name: 'Premium Luxury', label: 'Premium Luxury', count: products.filter(p => p.category === 'Premium Luxury').length }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter
    if (selectedCategory === 'Sale') {
      filtered = products.filter(product => product.originalPrice);
    } else if (selectedCategory !== 'All') {
      filtered = products.filter(product => product.category === selectedCategory);
    }

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

  const getSavingsPercentage = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="roman-heading-2 mb-4">
            Unstitched Women's Collection
          </h2>
          <p className="roman-body max-w-3xl mx-auto">
            Discover our exquisite range of premium unstitched fabrics featuring beautiful Pakistani designs, 
            perfect for creating your dream outfit with traditional elegance and modern style.
          </p>
        </div>

        {/* Summer Sale Banner */}
        {selectedCategory === 'Sale' && (
          <div className="sale-section rounded-lg p-6 md:p-8 mb-8 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 sale-ribbon text-white px-3 py-1 rounded-full text-sm font-bold">
              LIMITED TIME
            </div>
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 mr-2 text-amber-700" />
              <span className="text-amber-700 font-semibold">Summer Sale - Up to 50% Off</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-2">
              Beat The Heat With Style
            </h3>
            <p className="text-amber-700">Refresh your wardrobe with our premium summer collection</p>
          </div>
        )}

        {/* Horizontal Category Navigation - Roman.co.uk Style */}
        <div className="mb-8">
          {/* Category Tabs - Horizontal Scrollable */}
          <div className="flex overflow-x-auto scrollbar-hide pb-4 mb-6 border-b border-gray-200">
            <div className="flex space-x-8 min-w-max px-2">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => onCategoryChange(category.name)}
                  className={`flex items-center space-x-2 pb-4 border-b-2 transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category.name 
                      ? 'border-black text-black font-medium' 
                      : 'border-transparent text-gray-600 hover:text-black hover:border-gray-300'
                  }`}
                >
                  {category.icon && category.icon}
                  <span className="text-sm uppercase tracking-wide">{category.label}</span>
                  {category.badge && (
                    <Badge className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                      {category.badge}
                    </Badge>
                  )}
                  <span className="text-xs text-gray-400">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filter Bar - Roman.co.uk Style */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredAndSortedProducts.length} items
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full lg:w-auto">
              {/* Filter Dropdowns */}
              <div className="flex flex-wrap items-center gap-3">
                <Select defaultValue="">
                  <SelectTrigger className="w-32 h-10 border-gray-300 bg-white">
                    <SelectValue placeholder="Style" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="party">Party</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="">
                  <SelectTrigger className="w-32 h-10 border-gray-300 bg-white">
                    <SelectValue placeholder="Size" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="">
                  <SelectTrigger className="w-32 h-10 border-gray-300 bg-white">
                    <SelectValue placeholder="Colour" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="">
                  <SelectTrigger className="w-32 h-10 border-gray-300 bg-white">
                    <SelectValue placeholder="Price" />
                    <ChevronDown className="h-4 w-4" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="low">Under 3000</SelectItem>
                    <SelectItem value="mid">3000-6000</SelectItem>
                    <SelectItem value="high">Above 6000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort and View Controls */}
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 h-10 border-gray-300 bg-white">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="newest">New Arrivals</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex space-x-1">
                  <Button
                    variant={viewMode === '2' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('2')}
                    className="p-2 h-10 w-10"
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === '3' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('3')}
                    className="p-2 h-10 w-10"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === '4' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('4')}
                    className="p-2 h-10 w-10"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid ${gridCols[viewMode]} gap-6 md:gap-8 mb-12`}>
          {currentProducts.map(product => (
            <Card 
              key={product.id} 
              className="roman-card product-card hover-scale group cursor-pointer bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4] mb-4">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover product-image transition-transform duration-500"
                />
                {product.hoverImageUrl && (
                  <img 
                    src={product.hoverImageUrl}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}
                
                {/* Overlay Actions */}
                <div className={`absolute inset-0 bg-black/20 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary" className="bg-white/95 hover:bg-white text-black h-10 w-10 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/95 hover:bg-white text-black h-10 w-10 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {product.originalPrice && (
                    <Badge className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-none">
                      -{getSavingsPercentage(product.price, product.originalPrice)}%
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-none">
                      Sold Out
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm leading-relaxed">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-gray-900">
                    PKR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                {product.pieces && (
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                    {product.pieces} Piece Unstitched
                  </p>
                )}

                {product.color && (
                  <p className="text-xs text-gray-500 mb-3">
                    Color: {product.color}
                  </p>
                )}
                
                {/* Quick Add to Cart */}
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  disabled={!product.inStock}
                  className={`w-full mt-2 bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-none transition-all duration-300 uppercase tracking-wide text-xs ${
                    hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  } ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-gray-50'}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index + 1}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-gray-50'}
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
