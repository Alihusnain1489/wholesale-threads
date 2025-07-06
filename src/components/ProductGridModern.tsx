
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Heart, Eye, Grid3X3, Grid2X2, LayoutGrid } from "lucide-react";
import { Product } from "@/types";

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
    { name: 'All', label: 'All Products', count: products.length },
    { name: 'Sale', label: 'Sale', count: products.filter(p => p.originalPrice).length },
    { name: 'Jackets', label: 'Jackets', count: products.filter(p => p.category?.includes('Jacket')).length },
    { name: 'Suits', label: 'Suits', count: products.filter(p => p.category?.includes('Suit')).length },
    { name: 'Lawn', label: 'Lawn', count: products.filter(p => p.category?.includes('Lawn')).length }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory === 'Sale') {
      filtered = products.filter(product => product.originalPrice);
    } else if (selectedCategory !== 'All') {
      filtered = products.filter(product => 
        product.category?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        product.name.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

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
    <section className="py-16 bg-white" id="products">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Women's Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium women's clothing
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex overflow-x-auto scrollbar-hide pb-4 mb-6">
            <div className="flex space-x-6 min-w-max px-2">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => onCategoryChange(category.name)}
                  className={`pb-2 border-b-2 transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category.name 
                      ? 'border-gray-900 text-gray-900 font-medium' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className="text-xs text-gray-400 ml-1">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              {filteredAndSortedProducts.length} items
            </div>

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

        {/* Product Grid */}
        <div className={`grid ${gridCols[viewMode]} gap-6 mb-12`}>
          {currentProducts.map(product => (
            <Card 
              key={product.id} 
              className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Sale Badge */}
                {product.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-white text-gray-900 hover:bg-gray-100">
                    Sale
                  </Badge>
                )}

                {/* Sold Out Badge */}
                {!product.inStock && (
                  <Badge className="absolute top-3 left-3 bg-gray-500 text-white">
                    Sold out
                  </Badge>
                )}

                {/* Action Buttons */}
                <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900 h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900 h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900">
                    Rs.{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      Rs.{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
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

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Join the club
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Get exclusive deals and early access to new products.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGridModern;
