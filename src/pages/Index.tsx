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
      name: "Premium Embroidered Lawn Suit",
      price: 4500,
      originalPrice: 6000,
      imageUrl: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      hoverImageUrl: "/lovable-uploads/5544a434-4a1f-46cc-b113-10304bbc10aa.png",
      category: "Lawn",
      inStock: true,
      description: "Beautiful coral pink embroidered lawn suit with intricate floral patterns. Perfect for summer wear.",
      productCode: "LW-001",
      stockLeft: 12,
      color: "Coral Pink",
      fabric: "Lawn",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 2,
      name: "Floral Print Casual Suit",
      price: 3200,
      imageUrl: "/lovable-uploads/e8642cf1-db46-4c35-bba3-39817a416de8.png",
      hoverImageUrl: "/lovable-uploads/c8ac127f-e55a-4890-b64d-1b029f32ef38.png",
      category: "Cotton",
      inStock: true,
      description: "Elegant teal floral print suit with comfortable cotton fabric. Ideal for daily wear.",
      productCode: "CT-002",
      stockLeft: 25,
      color: "Teal Green",
      fabric: "Cotton",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 3,
      name: "Luxury Chiffon Collection",
      price: 8500,
      originalPrice: 10000,
      imageUrl: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png",
      hoverImageUrl: "/lovable-uploads/4a031324-00d1-4c00-95b9-3c959bd9a70c.png",
      category: "Chiffon",
      inStock: true,
      description: "Stunning teal chiffon suit with heavy embroidery and sequin work. Perfect for special occasions.",
      productCode: "CF-003",
      stockLeft: 8,
      color: "Teal Blue",
      fabric: "Chiffon",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 4,
      name: "Vibrant Pink Festive Wear",
      price: 5500,
      imageUrl: "/lovable-uploads/d9b3d47c-7b5d-4b19-82d2-0e406e0696b8.png",
      hoverImageUrl: "/lovable-uploads/a83a0091-d12d-4f2b-b8c9-f03315dc5666.png",
      category: "Festive",
      inStock: true,
      description: "Bright pink festive suit with golden embellishments and matching dupatta.",
      productCode: "FT-004",
      stockLeft: 15,
      color: "Hot Pink",
      fabric: "Silk Blend",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 5,
      name: "Designer Formal Collection",
      price: 7200,
      originalPrice: 9000,
      imageUrl: "/lovable-uploads/515e1bb2-b7a9-4126-8e72-203817453fb8.png",
      category: "Formal",
      inStock: true,
      description: "Elegant maroon formal suit with intricate embroidery work. Perfect for weddings and formal events.",
      productCode: "FM-005",
      stockLeft: 6,
      color: "Maroon",
      fabric: "Silk",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 6,
      name: "Summer Breeze Lawn",
      price: 3800,
      imageUrl: "/lovable-uploads/5544a434-4a1f-46cc-b113-10304bbc10aa.png",
      hoverImageUrl: "/lovable-uploads/c8ac127f-e55a-4890-b64d-1b029f32ef38.png",
      category: "Lawn",
      inStock: true,
      description: "Light and airy lawn fabric with delicate floral print. Perfect for summer comfort.",
      productCode: "LW-006",
      stockLeft: 20,
      color: "Light Green",
      fabric: "Lawn",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
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
