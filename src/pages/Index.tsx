
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ShoppingCart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, User, FileText, Package } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ProductGridModern from "@/components/ProductGridModern";
import CartSidebar from "@/components/CartSidebar";
import BookingDialog from "@/components/BookingDialog";
import NewsletterSection from "@/components/NewsletterSection";
import FooterModern from "@/components/FooterModern";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductDetailModal from "@/components/ProductDetailModal";
import LoginForm from "@/components/LoginForm";
import ComplaintForm from "@/components/ComplaintForm";
import OrderStatusForm from "@/components/OrderStatusForm";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  hoverImageUrl?: string;
  category: string;
  inStock: boolean;
  description: string;
  productCode?: string;
  pricePerMeter?: number;
  stockLeft?: number;
  color?: string;
  fabric?: string;
  pieces?: number;
  includes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);
  const [isOrderStatusOpen, setIsOrderStatusOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Silk Blend Dress",
      price: 89,
      originalPrice: 120,
      imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
      category: "Dresses",
      inStock: true,
      description: "Elegant silk blend dress perfect for special occasions. Features a flattering silhouette and premium finish.",
      productCode: "WT-DR-001",
      stockLeft: 12,
      color: "Navy Blue",
      fabric: "Silk Blend"
    },
    {
      id: 2,
      name: "Cotton Casual Top",
      price: 45,
      imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      category: "Tops",
      inStock: true,
      description: "Comfortable and breathable cotton top for everyday wear. Perfect for casual outings.",
      productCode: "WT-TP-002",
      stockLeft: 25,
      color: "White",
      fabric: "Cotton"
    },
    {
      id: 3,
      name: "Designer Palazzo Pants",
      price: 65,
      originalPrice: 85,
      imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop",
      category: "Bottoms",
      inStock: true,
      description: "Flowing palazzo pants with intricate design details. Made from premium fabric for comfort and style.",
      productCode: "WT-BT-003",
      stockLeft: 18,
      color: "Burgundy",
      fabric: "Crepe"
    },
    {
      id: 4,
      name: "Embroidered Clutch Bag",
      price: 35,
      imageUrl: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1583391733981-3cd898f6dbff?w=400&h=500&fit=crop",
      category: "Accessories",
      inStock: true,
      description: "Handcrafted clutch bag with beautiful embroidery. Perfect accessory for evening wear.",
      productCode: "WT-AC-004",
      stockLeft: 8,
      color: "Gold",
      fabric: "Leather"
    },
    {
      id: 5,
      name: "Formal Blazer",
      price: 120,
      originalPrice: 150,
      imageUrl: "https://images.unsplash.com/photo-1583391733981-3cd898f6dbff?w=400&h=500&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      category: "Tops",
      inStock: false,
      description: "Professional blazer crafted from premium wool blend. Perfect for business meetings and formal events.",
      productCode: "WT-BL-005",
      stockLeft: 0,
      color: "Charcoal",
      fabric: "Wool Blend"
    },
    {
      id: 6,
      name: "Summer Maxi Dress",
      price: 75,
      imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
      category: "Dresses",
      inStock: true,
      description: "Flowing maxi dress perfect for summer occasions. Light and comfortable with beautiful print details.",
      productCode: "WT-DR-006",
      stockLeft: 22,
      color: "Floral Print",
      fabric: "Chiffon"
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const addToCart = (product: Product) => {
    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This item is currently out of stock",
        variant: "destructive"
      });
      return;
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart",
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar 
        cartItemsCount={cartItemsCount}
        onCartOpen={() => setIsCartOpen(true)}
        onLoginOpen={() => {
          setIsLogin(true);
          setIsLoginOpen(true);
        }}
      />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Product Grid */}
      <ProductGridModern 
        products={filteredProducts} 
        onAddToCart={addToCart}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onProductClick={handleProductClick}
      />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <FooterModern />

      {/* Login/Register Modal */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="p-0 max-w-md border-0 bg-transparent shadow-none">
          <LoginForm 
            isLogin={isLogin} 
            onToggle={() => setIsLogin(!isLogin)}
            onClose={() => setIsLoginOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Complaint Form Modal */}
      <Dialog open={isComplaintOpen} onOpenChange={setIsComplaintOpen}>
        <DialogContent className="p-0 max-w-2xl border-0 bg-transparent shadow-none">
          <ComplaintForm onClose={() => setIsComplaintOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Order Status Modal */}
      <Dialog open={isOrderStatusOpen} onOpenChange={setIsOrderStatusOpen}>
        <DialogContent className="p-0 max-w-4xl border-0 bg-transparent shadow-none">
          <OrderStatusForm onClose={() => setIsOrderStatusOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onOpenChange={setIsProductDetailOpen}
        onAddToCart={addToCart}
      />

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        totalPrice={getTotalPrice()}
      />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
