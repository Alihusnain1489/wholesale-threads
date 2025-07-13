import React, { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Heart, Eye, Tag } from "lucide-react";
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
  onLikeClick: () => void;
  isLoggedIn: boolean;
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
  itemsPerPage,
  onLikeClick,
  isLoggedIn
}: ProductGridModernProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  // Check if search is active
  const isSearchActive = searchQuery.trim().length > 0;

  const categories = [
    { name: 'All', label: 'All Products', count: products.length },
    { name: 'Sale', label: 'Sale', count: products.filter(p => p.originalPrice).length },
    { name: 'Jackets', label: 'Jackets', count: products.filter(p => p.category?.includes('Jacket')).length },
    { name: 'Suits', label: 'Suits', count: products.filter(p => p.category?.includes('Suit')).length },
    { name: 'Lawn', label: 'Lawn', count: products.filter(p => p.category?.includes('Lawn')).length }
  ];

  const filteredProducts = useMemo(() => {
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

    return filtered.sort((a, b) => b.id - a.id);
  }, [products, selectedCategory, searchQuery]);

  const searchTags = useMemo(() => {
    if (!isSearchActive) return [];
    
    const tags = new Set<string>();
    filteredProducts.forEach(product => {
      if (product.category) tags.add(product.category);
      if (product.color) tags.add(product.color);
      if (product.fabric) tags.add(product.fabric);
    });
    
    return Array.from(tags).slice(0, 8);
  }, [filteredProducts, isSearchActive]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (productId: number) => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
    
    setHoveredProduct(productId);
    
    const timer = setTimeout(() => {
      setHoveredProduct(null);
    }, 3000);
    
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    setHoveredProduct(null);
  };

  return (
    <section className="py-16 bg-white" id="products">
      <div className="container mx-auto px-4">
        {/* Header - Hide during search */}
        {!isSearchActive && (
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Women's Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of premium women's clothing. Each item represents 50-80 suits minimum.
            </p>
          </div>
        )}

        {/* Bulk Order Notice - Hide during search */}
        {!isSearchActive && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">🎉 Bulk Order Special Offer</h3>
              <p className="text-gray-700">
                Order 50+ suits and get <span className="font-bold text-green-600">20% discount</span> on your entire purchase!
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Perfect for retailers, boutiques, and wholesale buyers
              </p>
            </div>
          </div>
        )}

        {/* Category Navigation - Hide during search */}
        {!isSearchActive && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => onCategoryChange(category.name)}
                  className={`px-6 py-3 rounded-full transition-all duration-200 ${
                    selectedCategory === category.name 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className="text-xs ml-1 opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Tags - Show only during search */}
        {isSearchActive && searchTags.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Related Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {searchTags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="text-center text-sm text-gray-600 mb-8">
          {isSearchActive && (
            <p className="mb-2">Search results for "{searchQuery}"</p>
          )}
          {filteredProducts.length} items found
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentProducts.map(product => (
            <Card 
              key={product.id} 
              className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredProduct === product.id ? 'scale-110 brightness-110' : 'group-hover:scale-105'
                  }`}
                />
                
                {/* Sale Badge */}
                {product.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                    Sale
                  </Badge>
                )}

                {/* Sold Out Badge */}
                {!product.inStock && (
                  <Badge className="absolute top-3 left-3 bg-gray-500 text-white rounded-full">
                    Sold out
                  </Badge>
                )}

                {/* Action Buttons */}
                <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-gray-900 h-8 w-8 p-0 rounded-full">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-white/90 hover:bg-white text-gray-900 h-8 w-8 p-0 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      onLikeClick();
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-semibold text-gray-900">
                    Rs.{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      Rs.{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="text-xs text-gray-500">
                  {product.pieces} • {product.fabric}
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

      {/* Newsletter Section - Hide during search */}
      {!isSearchActive && (
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
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGridModern;
