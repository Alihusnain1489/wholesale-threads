
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, Package, Truck, Shield, Eye } from "lucide-react";
import { Product } from "@/pages/Index";

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
    "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1583391733981-3cd898f6dbff?w=400&h=400&fit=crop",
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-amber-50 to-orange-50">
        <DialogHeader className="border-b border-amber-200 pb-4">
          <DialogTitle className="text-2xl font-bold text-amber-800 flex items-center gap-2">
            <Package className="h-6 w-6" />
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border-2 border-amber-200 shadow-lg">
              <img 
                src={productImages[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              />
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white text-sm px-3 py-2 shadow-lg">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
              <Badge className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 shadow-lg">
                NEW
              </Badge>
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {Math.floor(Math.random() * 50) + 30} viewing now
              </div>
            </div>
            
            {/* Enhanced Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    selectedImageIndex === index 
                      ? 'border-amber-500 shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                  {selectedImageIndex === index && (
                    <div className="absolute inset-0 bg-amber-500/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-amber-700 border-amber-300 bg-amber-50">
                    {product.category}
                  </Badge>
                  {product.inStock && (
                    <Badge className="bg-green-100 text-green-700 border border-green-300">
                      ✓ In Stock
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-500">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {product.productCode && (
                <p className="text-sm text-gray-600 mb-2">Product Code: <span className="font-mono">{product.productCode}</span></p>
              )}

              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold text-amber-700">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {product.pricePerMeter && (
                <p className="text-sm text-amber-600 mb-4">PKR {product.pricePerMeter.toLocaleString()} per meter</p>
              )}

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(4.8) 156 reviews</span>
              </div>

              {product.stockLeft && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-700 text-sm font-medium">
                    Hurry! only <span className="font-bold">{product.stockLeft}</span> left in stock.
                  </p>
                </div>
              )}
            </div>

            {/* Enhanced Product Information Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-amber-100">
                <TabsTrigger value="details" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Product Details
                </TabsTrigger>
                <TabsTrigger value="shipping" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Shipping & Handling
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
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
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.includes.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="shipping" className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-800">Free Delivery</p>
                      <p className="text-sm text-blue-600">On orders above Rs.3000+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800">Quality Guarantee</p>
                      <p className="text-sm text-green-600">100% authentic products</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Enhanced Quantity and Add to Cart */}
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <label className="text-lg font-medium text-amber-800">Quantity:</label>
                  <div className="flex items-center space-x-3 bg-white rounded-lg border-2 border-amber-300 p-1">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="h-8 w-8 p-0 hover:bg-amber-100"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 p-0 hover:bg-amber-100"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? `ADD ${quantity} TO CART` : 'OUT OF STOCK'}
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-lg text-amber-800">
                    Total: <span className="font-bold text-2xl">PKR {(product.price * quantity).toLocaleString()}</span>
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
