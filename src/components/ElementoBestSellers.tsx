import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types";

interface ElementoBestSellersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  onLikeClick: () => void;
}

const ElementoBestSellers = ({ 
  products, 
  onAddToCart, 
  onProductClick,
  onLikeClick
}: ElementoBestSellersProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(products[0] || null);

  const nextProduct = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(nextIndex);
    setSelectedProduct(products[nextIndex]);
  };

  const prevProduct = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(prevIndex);
    setSelectedProduct(products[prevIndex]);
  };

  const handleProductSelect = (product: Product, index: number) => {
    setSelectedProduct(product);
    setCurrentIndex(index);
  };

  if (!selectedProduct) return null;

  return (
    <section className="py-16 bg-white" id="products">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Best sellers
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Carousel */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {products.slice(0, 4).map((product, index) => (
                <Card 
                  key={product.id} 
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedProduct.id === product.id 
                      ? 'ring-2 ring-gray-900 shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleProductSelect(product, index)}
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-xs">{product.color}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevProduct}
                className="border-gray-300 hover:bg-gray-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextProduct}
                className="border-gray-300 hover:bg-gray-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Selected Product Details */}
          <div className="lg:pl-12">
            <div className="mb-6">
              <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-200">
                CLOTHING • ELEMENTO • BLAZE
              </Badge>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                {selectedProduct.name}
              </h3>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-light text-gray-900">
                  ₨{selectedProduct.price.toLocaleString()}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ₨{selectedProduct.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProduct.description || "Introducing our Classic Graphite Suit Triple. The perfect addition to any wardrobe."}
              </p>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Color:</span>
                  <p className="text-gray-600">{selectedProduct.color}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Fabric:</span>
                  <p className="text-gray-600">{selectedProduct.fabric}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Pieces:</span>
                  <p className="text-gray-600">{selectedProduct.pieces}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Stock:</span>
                  <p className={selectedProduct.inStock ? "text-green-600" : "text-red-600"}>
                    {selectedProduct.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  onClick={() => onAddToCart(selectedProduct)}
                  disabled={!selectedProduct.inStock}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 text-lg font-light"
                >
                  {selectedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => onProductClick(selectedProduct)}
                    className="flex-1 border-gray-300 hover:bg-gray-50"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Quick View
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={onLikeClick}
                    className="flex-1 border-gray-300 hover:bg-gray-50"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElementoBestSellers;