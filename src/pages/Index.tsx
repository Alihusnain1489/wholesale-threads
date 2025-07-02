
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ShoppingCart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, User, FileText, Package } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
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
import StitchingSection from "@/components/StitchingSection";

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
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Embroidered Lawn Suit - Chikankari Collection",
      price: 4500,
      originalPrice: 6000,
      imageUrl: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      hoverImageUrl: "/lovable-uploads/5544a434-4a1f-46cc-b113-10304bbc10aa.png",
      category: "Chikankari",
      inStock: true,
      description: "Beautiful coral pink embroidered lawn suit with intricate chikankari work and floral patterns. Perfect for summer wear.",
      productCode: "CHK-001",
      stockLeft: 12,
      color: "Coral Pink",
      fabric: "Lawn",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 2,
      name: "Traditional Chunri Print Casual Suit",
      price: 3200,
      imageUrl: "/lovable-uploads/e8642cf1-db46-4c35-bba3-39817a416de8.png",
      hoverImageUrl: "/lovable-uploads/c8ac127f-e55a-4890-b64d-1b029f32ef38.png",
      category: "Chunri",
      inStock: true,
      description: "Elegant teal chunri print suit with comfortable cotton fabric. Traditional bandhani patterns ideal for daily wear.",
      productCode: "CHN-002",
      stockLeft: 25,
      color: "Teal Green",
      fabric: "Cotton",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 3,
      name: "Dhoop Kinaray Luxury Collection",
      price: 8500,
      originalPrice: 10000,
      imageUrl: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png",
      hoverImageUrl: "/lovable-uploads/4a031324-00d1-4c00-95b9-3c959bd9a70c.png",
      category: "Dhoop Kinaray",
      inStock: true,
      description: "Stunning teal chiffon suit with heavy embroidery and sequin work from our signature Dhoop Kinaray collection.",
      productCode: "DK-003",
      stockLeft: 8,
      color: "Teal Blue",
      fabric: "Chiffon",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 4,
      name: "The Floral World - Vibrant Pink Collection",
      price: 5500,
      imageUrl: "/lovable-uploads/d9b3d47c-7b5d-4b19-82d2-0e406e0696b8.png",
      hoverImageUrl: "/lovable-uploads/a83a0091-d12d-4f2b-b8c9-f03315dc5666.png",
      category: "The Floral World",
      inStock: true,
      description: "Bright pink floral suit with golden embellishments from The Floral World collection.",
      productCode: "FW-004",
      stockLeft: 15,
      color: "Hot Pink",
      fabric: "Silk Blend",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 5,
      name: "Tribute to Mothers - Designer Formal Collection",
      price: 7200,
      originalPrice: 9000,
      imageUrl: "/lovable-uploads/515e1bb2-b7a9-4126-8e72-203817453fb8.png",
      category: "Tribute to Mothers",
      inStock: true,
      description: "Elegant maroon formal suit with intricate embroidery work from our Tribute to Mothers collection.",
      productCode: "TM-005",
      stockLeft: 6,
      color: "Maroon",
      fabric: "Silk",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 6,
      name: "Premium Luxury Summer Breeze",
      price: 3800,
      imageUrl: "/lovable-uploads/5544a434-4a1f-46cc-b113-10304bbc10aa.png",
      hoverImageUrl: "/lovable-uploads/c8ac127f-e55a-4890-b64d-1b029f32ef38.png",
      category: "Premium Luxury",
      inStock: true,
      description: "Light and airy luxury lawn fabric with delicate floral print from our Premium Luxury collection.",
      productCode: "PL-006",
      stockLeft: 20,
      color: "Light Green",
      fabric: "Premium Lawn",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 7,
      name: "Chikankari White Elegance",
      price: 4200,
      imageUrl: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      category: "Chikankari",
      inStock: true,
      description: "Classic white chikankari suit with traditional threadwork.",
      productCode: "CHK-007",
      stockLeft: 18,
      color: "White",
      fabric: "Cotton",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 8,
      name: "Chunri Festival Special",
      price: 3500,
      originalPrice: 4200,
      imageUrl: "/lovable-uploads/e8642cf1-db46-4c35-bba3-39817a416de8.png",
      category: "Chunri",
      inStock: true,
      description: "Festive chunri print in vibrant colors perfect for celebrations.",
      productCode: "CHN-008",
      stockLeft: 22,
      color: "Multi Color",
      fabric: "Cotton Silk",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    // Adding 12 more products to reach 20 total
    {
      id: 9,
      name: "Royal Embroidered Chiffon Suite",
      price: 9800,
      originalPrice: 12000,
      imageUrl: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png",
      category: "Premium Luxury",
      inStock: true,
      description: "Luxurious royal blue chiffon suit with heavy golden embroidery.",
      productCode: "PL-009",
      stockLeft: 5,
      color: "Royal Blue",
      fabric: "Chiffon",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 10,
      name: "Garden Paradise Lawn Collection",
      price: 3800,
      imageUrl: "/lovable-uploads/d9b3d47c-7b5d-4b19-82d2-0e406e0696b8.png",
      category: "The Floral World",
      inStock: true,
      description: "Beautiful garden-inspired lawn suit with vibrant floral prints.",
      productCode: "FW-010",
      stockLeft: 28,
      color: "Multi Floral",
      fabric: "Lawn",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 11,
      name: "Traditional Bandhani Chunri",
      price: 2800,
      imageUrl: "/lovable-uploads/e8642cf1-db46-4c35-bba3-39817a416de8.png",
      category: "Chunri",
      inStock: true,
      description: "Authentic bandhani chunri with traditional tie-dye patterns.",
      productCode: "CHN-011",
      stockLeft: 35,
      color: "Red & Yellow",
      fabric: "Cotton",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 12,
      name: "Mother's Love Collection",
      price: 6500,
      imageUrl: "/lovable-uploads/515e1bb2-b7a9-4126-8e72-203817453fb8.png",
      category: "Tribute to Mothers",
      inStock: true,
      description: "Heartwarming collection dedicated to mothers with elegant designs.",
      productCode: "TM-012",
      stockLeft: 14,
      color: "Burgundy",
      fabric: "Silk Cotton",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 13,
      name: "Delicate Chikan Embroidery",
      price: 4800,
      imageUrl: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      category: "Chikankari",
      inStock: true,
      description: "Intricate chikan embroidery on soft cotton fabric.",
      productCode: "CHK-013",
      stockLeft: 16,
      color: "Cream",
      fabric: "Cotton",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 14,
      name: "Sunset Dhoop Kinaray",
      price: 7800,
      originalPrice: 9500,
      imageUrl: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png",
      category: "Dhoop Kinaray",
      inStock: true,
      description: "Sunset-inspired colors with golden borders from Dhoop Kinaray collection.",
      productCode: "DK-014",
      stockLeft: 11,
      color: "Orange Sunset",
      fabric: "Chiffon",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 15,
      name: "Premium Cotton Comfort",
      price: 3400,
      imageUrl: "/lovable-uploads/5544a434-4a1f-46cc-b113-10304bbc10aa.png",
      category: "Premium Luxury",
      inStock: true,
      description: "Premium cotton suit with ultimate comfort and style.",
      productCode: "PL-015",
      stockLeft: 32,
      color: "Mint Green",
      fabric: "Premium Cotton",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 16,
      name: "Floral Symphony Collection",
      price: 5200,
      imageUrl: "/lovable-uploads/d9b3d47c-7b5d-4b19-82d2-0e406e0696b8.png",
      category: "The Floral World",
      inStock: true,
      description: "Symphony of flowers in beautiful pastel shades.",
      productCode: "FW-016",
      stockLeft: 19,
      color: "Pastel Multi",
      fabric: "Lawn",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 17,
      name: "Vintage Chunri Revival",
      price: 3600,
      imageUrl: "/lovable-uploads/e8642cf1-db46-4c35-bba3-39817a416de8.png",
      category: "Chunri",
      inStock: false,
      description: "Vintage-inspired chunri patterns with modern touch.",
      productCode: "CHN-017",
      stockLeft: 0,
      color: "Vintage Blue",
      fabric: "Cotton Silk",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 18,
      name: "Elegant Evening Chikankari",
      price: 5800,
      originalPrice: 7200,
      imageUrl: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      category: "Chikankari",
      inStock: true,
      description: "Perfect for evening occasions with elegant chikankari work.",
      productCode: "CHK-018",
      stockLeft: 9,
      color: "Deep Purple",
      fabric: "Cotton Silk",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 19,
      name: "Golden Hour Dhoop Kinaray",
      price: 8900,
      imageUrl: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png",
      category: "Dhoop Kinaray",
      inStock: true,
      description: "Capturing the golden hour beauty in fabric form.",
      productCode: "DK-019",
      stockLeft: 7,
      color: "Golden Yellow",
      fabric: "Silk Chiffon",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    },
    {
      id: 20,
      name: "Mother's Day Special Edition",
      price: 6800,
      imageUrl: "/lovable-uploads/515e1bb2-b7a9-4126-8e72-203817453fb8.png",
      category: "Tribute to Mothers",
      inStock: true,
      description: "Special edition for Mother's Day with heartfelt designs.",
      productCode: "TM-020",
      stockLeft: 12,
      color: "Rose Gold",
      fabric: "Silk",
      pieces: 3,
      includes: ["Shirt", "Trouser", "Dupatta"]
    }
  ];

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
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Image Slider */}
      <ImageSlider />

      {/* Product Grid */}
      <ProductGridModern 
        products={products} 
        onAddToCart={addToCart}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onProductClick={handleProductClick}
        searchQuery={searchQuery}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />

      {/* Stitching Section */}
      <StitchingSection />

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
