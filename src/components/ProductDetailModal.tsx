import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, Package, Truck, Shield, Eye } from "lucide-react";
import { Product } from "@/types";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetailModal = ({ product, isOpen, onOpenChange, onAddToCart }: ProductDetailModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const productImages = [
    product.imageUrl,
    product.hoverImageUrl || product.imageUrl,
    "/129.webp",
    "/124.webp",
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] max-w-[90vw] max-h-[95vh] overflow-y-auto bg-white border border-gray-200">
        <DialogHeader className="border-b border-gray-200 pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2">
            <Package className="h-5 w-5 sm:h-6 sm:w-6" />
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Image Gallery */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <img 
                src={productImages[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-[300px] sm:h-[300px] lg:h-[600px] object-cover transition-transform duration-300 hover:scale-105"
              />
              {product.originalPrice && (
                <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 shadow-lg">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
              <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gray-800 text-white text-xs px-2 py-1 shadow-lg">
                NEW
              </Badge>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {Math.floor(Math.random() * 50) + 30}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                <div className="flex items-center gap-2 order-2 sm:order-1">
                  <Badge variant="outline" className="text-black border-gray-300 bg-gray-50 text-xs sm:text-sm">
                    {product.category}
                  </Badge>
                  {product.inStock && (
                    <Badge className="bg-green-100 text-green-700 border border-green-200 text-xs sm:text-sm">
                      ✓ In Stock
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-2 order-1 sm:order-2 self-end sm:self-auto">
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-black hover:bg-gray-100 h-8 w-8 sm:h-10 sm:w-10">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-black hover:bg-gray-100 h-8 w-8 sm:h-10 sm:w-10">
                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>

              {product.productCode && (
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Product Code: <span className="font-mono font-medium">{product.productCode}</span></p>
              )}

              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-black">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg sm:text-xl text-gray-400 line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {product.pricePerMeter && (
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">PKR {product.pricePerMeter.toLocaleString()} per meter</p>
              )}

              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-500">(4.8) 156 reviews</span>
              </div>

              {product.stockLeft && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                  <p className="text-red-700 text-xs sm:text-sm font-medium">
                    Hurry! only <span className="font-bold">{product.stockLeft}</span> left in stock.
                  </p>
                </div>
              )}
            </div>

            {/* Product Information Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                <TabsTrigger value="details" className="data-[state=active]:bg-black data-[state=active]:text-white text-xs sm:text-sm">
                  Product Details
                </TabsTrigger>
                <TabsTrigger value="shipping" className="data-[state=active]:bg-black data-[state=active]:text-white text-xs sm:text-sm">
                  Shipping Info
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  {product.color && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Color:</span>
                      <span className="font-medium">{product.color}</span>
                    </div>
                  )}
                  {product.fabric && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fabric:</span>
                      <span className="font-medium">{product.fabric}</span>
                    </div>
                  )}
                  {product.pieces && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Pieces:</span>
                      <span className="font-medium">{product.pieces}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
                {product.includes && (
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Includes:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {product.includes.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-300">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="shipping" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <div className="grid gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                    <div>
                      <p className="font-medium text-black text-sm sm:text-base">Free Delivery</p>
                      <p className="text-xs sm:text-sm text-gray-600">On orders above Rs.3000+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                    <div>
                      <p className="font-medium text-black text-sm sm:text-base">Quality Guarantee</p>
                      <p className="text-xs sm:text-sm text-gray-600">100% authentic products</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Quantity and Add to Cart */}
            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <label className="text-base sm:text-lg font-medium text-black">Quantity:</label>
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-white rounded-lg border border-gray-300 p-1">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-100"
                    >
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <span className="w-8 sm:w-12 text-center font-bold text-base sm:text-lg">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-100"
                    >
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  {product.inStock ? `ADD ${quantity} TO CART` : 'OUT OF STOCK'}
                </Button>

                <div className="mt-3 sm:mt-4 text-center">
                  <p className="text-base sm:text-lg text-black">
                    Total: <span className="font-bold text-xl sm:text-2xl">PKR {(product.price * quantity).toLocaleString()}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
