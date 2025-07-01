import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ShoppingCart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, User, FileText, Package } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CartSidebar from "@/components/CartSidebar";
import BookingDialog from "@/components/BookingDialog";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StitchingSection from "@/components/StitchingSection";
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
      name: "3 Piece Printed Lawn Suit With Printed Lawn Dupatta",
      price: 4390,
      originalPrice: 5200,
      imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop",
      category: "Lawn",
      inStock: true,
      description: "Unstitched 3-Piece Printed Lawn Suit With Lawn Dupatta. Premium quality printed lawn fabric with intricate detailing.",
      productCode: "WH-21-25-1-Green",
      pricePerMeter: 1463,
      stockLeft: 19,
      color: "Green",
      fabric: "Lawn",
      pieces: 3,
      includes: ["Shirt", "Dupatta", "Trouser"]
    },
    {
      id: 2,
      name: "Premium Chiffon Dupatta Set",
      price: 1800,
      originalPrice: 2200,
      imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
      category: "Chiffon",
      inStock: true,
      description: "Elegant chiffon fabric with matching dupatta. Perfect for formal occasions.",
      productCode: "WH-21-25-2-Blue",
      pricePerMeter: 900,
      stockLeft: 25,
      color: "Blue",
      fabric: "Chiffon",
      pieces: 2,
      includes: ["Shirt", "Dupatta"]
    },
    {
      id: 3,
      name: "Silk Unstitched Suit",
      price: 4500,
      originalPrice: 5500,
      imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
      category: "Silk",
      inStock: true,
      description: "Luxurious silk fabric for special occasions. Made from premium quality silk, this fabric offers a rich texture and lustrous finish. Perfect for weddings, festivals, and special celebrations.",
      productCode: "WH-21-25-3-Gold",
      pricePerMeter: 1500,
      stockLeft: 15,
      color: "Gold",
      fabric: "Silk",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 4,
      name: "Cotton Karandi Fabric",
      price: 2200,
      imageUrl: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1583391733981-3cd898f6dbff?w=400&h=300&fit=crop",
      category: "Cotton",
      inStock: true,
      description: "Comfortable cotton karandi for daily wear. This versatile fabric is perfect for casual and semi-formal occasions. The cotton blend ensures comfort while maintaining a polished appearance.",
      productCode: "WH-21-25-4-Beige",
      pricePerMeter: 733,
      stockLeft: 30,
      color: "Beige",
      fabric: "Cotton",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 5,
      name: "Embroidered Lawn Set",
      price: 3200,
      originalPrice: 3800,
      imageUrl: "https://images.unsplash.com/photo-1583391733981-3cd898f6dbff?w=400&h=300&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      category: "Lawn",
      inStock: false,
      description: "Beautiful embroidered lawn with intricate designs. Features hand-embroidered motifs and delicate patterns that showcase traditional Pakistani craftsmanship. Currently out of stock due to high demand.",
      productCode: "WH-21-25-5-Multi",
      pricePerMeter: 1067,
      stockLeft: 0,
      color: "Multi",
      fabric: "Lawn",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 6,
      name: "Georgette Party Wear",
      price: 3800,
      imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      hoverImageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop",
      category: "Georgette",
      inStock: true,
      description: "Elegant georgette fabric for party occasions. This flowing and graceful fabric is perfect for evening wear and special events. The lightweight material creates beautiful draping effects.",
      productCode: "WH-21-25-6-Black",
      pricePerMeter: 1267,
      stockLeft: 22,
      color: "Black",
      fabric: "Georgette",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                Wholesale Threads
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsLogin(true);
                  setIsLoginOpen(true);
                }}
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Products Grid */}
      <ProductGrid 
        products={filteredProducts} 
        onAddToCart={addToCart}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onProductClick={handleProductClick}
      />

      {/* Stitching Section */}
      <StitchingSection />

      {/* Contact Section */}
      <ContactSection />

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

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-emerald-400">
                About Wholesale Threads
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">Our Story</a></li>
                <li><a href="#company" className="hover:text-emerald-400 transition-colors">Company Info</a></li>
                <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Join Our Team</a></li>
                <li><a href="#store-locator" className="hover:text-emerald-400 transition-colors">Find Stores</a></li>
                <li><a href="#blog" className="hover:text-emerald-400 transition-colors">Fashion Blog</a></li>
              </ul>
            </div>
            
            {/* My Account */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-emerald-400">My Account</h4>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <button 
                    onClick={() => {
                      setIsLogin(true);
                      setIsLoginOpen(true);
                    }}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    Sign In
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setIsLogin(false);
                      setIsLoginOpen(true);
                    }}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    Create Account
                  </button>
                </li>
                <li><a href="#account-info" className="hover:text-emerald-400 transition-colors">Account Dashboard</a></li>
                <li><a href="#order-history" className="hover:text-emerald-400 transition-colors">My Orders</a></li>
                <li>
                  <button 
                    onClick={() => setIsOrderStatusOpen(true)}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    Track Order
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Customer Care */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-emerald-400">Customer Care</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Support</a></li>
                <li><a href="#privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#shipping" className="hover:text-emerald-400 transition-colors">Shipping Info</a></li>
                <li><a href="#feedback" className="hover:text-emerald-400 transition-colors">Share Feedback</a></li>
                <li><a href="#callback" className="hover:text-emerald-400 transition-colors">Request Callback</a></li>
                <li>
                  <button 
                    onClick={() => setIsComplaintOpen(true)}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    File Complaint
                  </button>
                </li>
                <li><a href="#return" className="hover:text-emerald-400 transition-colors">Returns & Exchanges</a></li>
              </ul>
            </div>

            {/* Find Us On */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-emerald-400">Connect With Us</h4>
              <div className="space-y-4">
                <div className="flex flex-col space-y-3">
                  <a href="https://facebook.com/wholesalethreads" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                    <Facebook className="h-5 w-5 mr-3" />
                    Follow on Facebook
                  </a>
                  <a href="https://instagram.com/wholesalethreads" className="flex items-center text-slate-300 hover:text-pink-400 transition-colors">
                    <Instagram className="h-5 w-5 mr-3" />
                    Instagram Updates
                  </a>
                  <a href="https://twitter.com/wholesalethreads" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                    <Twitter className="h-5 w-5 mr-3" />
                    Twitter News
                  </a>
                  <a href="https://youtube.com/wholesalethreads" className="flex items-center text-slate-300 hover:text-red-400 transition-colors">
                    <Youtube className="h-5 w-5 mr-3" />
                    Video Tutorials
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-emerald-400">Get In Touch</h4>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-emerald-400" />
                  <div>
                    <p className="font-medium">+92 326 1052244</p>
                    <p className="text-sm text-slate-400">24/7 Customer Support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-emerald-400" />
                  <div>
                    <p className="font-medium break-all">mr.alihusnain11@gmail.com</p>
                    <p className="text-sm text-slate-400">General Inquiries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-emerald-400" />
                  <div>
                    <p className="font-medium">Lahore, Pakistan</p>
                    <p className="text-sm text-slate-400">Main Distribution Center</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1 text-emerald-400" />
                  <div>
                    <p className="font-medium">Mon-Sat: 9AM-8PM</p>
                    <p className="text-sm text-slate-400">Sunday: 10AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold mb-4 text-emerald-400">Stay Updated</h4>
                <p className="text-slate-300 mb-6">
                  Subscribe to our newsletter for exclusive deals, new arrivals, and fabric care tips. Join thousands of satisfied customers!
                </p>
                <div className="flex gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300"
                  />
                  <Button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-slate-400 mb-4">Business Partnerships</p>
                <p className="text-emerald-400 font-semibold text-lg">corporate@wholesalethreads.com.pk</p>
              </div>
            </div>
          </div>

          {/* Payment Methods & Copyright */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-slate-400">Secure Payments:</span>
                <div className="flex space-x-3">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">VISA</div>
                  <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">MC</div>
                  <div className="w-12 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">JCB</div>
                  <div className="w-12 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">UPI</div>
                </div>
              </div>
              <p className="text-slate-400 text-center">
                &copy; 2025 Wholesale Threads. All rights reserved. Crafted with ❤️ in Pakistan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
