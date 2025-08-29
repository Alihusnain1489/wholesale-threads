import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import AllbirdsNavbar from "@/components/AllbirdsNavbar";
import AllbirdsHero from "@/components/AllbirdsHero";
import AllbirdsProductGrid from "@/components/AllbirdsProductGrid";
import ProductDetailModal from "@/components/ProductDetailModal";
import CartSidebar from "@/components/CartSidebar";
import AllbirdsFooter from "@/components/AllbirdsFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LoginModal from "@/components/LoginModal";
import { Product, CartItem } from "@/types";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Allbirds-inspired products with authentic designs and pricing
  const products: Product[] = [
    {
      id: 1,
      name: "Tree Runner",
      price: 9800,
      imageUrl: "/src/assets/tree-runner-white.jpg",
      category: "Runners",
      inStock: true,
      description: "Our original Tree Runner. Made with eucalyptus tree fiber for unmatched comfort and breathability.",
      color: "Natural White",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    },
    {
      id: 2,
      name: "Wool Runner",
      price: 9800,
      imageUrl: "/src/assets/wool-runner-grey.jpg",
      category: "Runners",
      inStock: true,
      description: "Cozy merino wool construction that naturally regulates temperature. Machine washable.",
      color: "Natural Grey",
      fabric: "Merino Wool",
      pieces: "1 Pair"
    },
    {
      id: 3,
      name: "Tree Dasher 2",
      price: 12500,
      imageUrl: "/src/assets/tree-dasher-navy.jpg",
      category: "Running",
      inStock: true,
      description: "Performance running shoe engineered for maximum energy return and comfort.",
      color: "Navy",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    },
    {
      id: 4,
      name: "Tree Flyer",
      price: 16000,
      imageUrl: "/src/assets/tree-flyer-black.jpg",
      category: "Running",
      inStock: true,
      description: "Our most cushioned performance running shoe with superior energy return technology.",
      color: "Black",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    },
    {
      id: 5,
      name: "Wool Runner",
      price: 9800,
      originalPrice: 11000,
      imageUrl: "/src/assets/wool-runner-beige.jpg",
      category: "Runners",
      inStock: true,
      description: "Sustainable merino wool sneaker that's naturally odor-resistant and temperature regulating.",
      color: "Natural Beige",
      fabric: "Merino Wool",
      pieces: "1 Pair"
    },
    {
      id: 6,
      name: "Tree Skipper",
      price: 7800,
      imageUrl: "/src/assets/tree-skipper-olive.jpg",
      category: "Slip-ons",
      inStock: true,
      description: "Casual slip-on shoe perfect for everyday wear. Made with breezy eucalyptus fiber.",
      color: "Olive",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    },
    {
      id: 7,
      name: "Tree Piper",
      price: 7800,
      imageUrl: "/src/assets/tree-piper-grey.jpg",
      category: "Slip-ons",
      inStock: true,
      description: "Minimalist slip-on with a sleek design. Lightweight and breathable for all-day comfort.",
      color: "Light Grey",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    },
    {
      id: 8,
      name: "Tree Runner Go",
      price: 11500,
      imageUrl: "/src/assets/tree-runner-go-sage.jpg",
      category: "Runners",
      inStock: true,
      description: "Elevated Tree Runner with enhanced durability and extra soft underfoot cushioning.",
      color: "Sage",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    },
    {
      id: 9,
      name: "Wool Lounger",
      price: 9200,
      imageUrl: "/src/assets/wool-lounger-charcoal.jpg",
      category: "Slip-ons",
      inStock: true,
      description: "Ultra-soft merino wool slip-on that feels like wearing clouds on your feet.",
      color: "Charcoal",
      fabric: "Merino Wool",
      pieces: "1 Pair"
    },
    {
      id: 10,
      name: "Tree Flyer",
      price: 16000,
      originalPrice: 18000,
      imageUrl: "/src/assets/tree-flyer-blush.jpg",
      category: "Running",
      inStock: true,
      description: "High-performance running shoe with maximum energy return. Women's exclusive colorway.",
      color: "Blush",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    },
    {
      id: 11,
      name: "Wool Runner",
      price: 9800,
      imageUrl: "/src/assets/wool-runner-lavender.jpg",
      category: "Runners",
      inStock: false,
      description: "Limited edition lavender colorway in soft merino wool. Naturally antimicrobial.",
      color: "Lavender",
      fabric: "Merino Wool",
      pieces: "1 Pair"
    },
    {
      id: 12,
      name: "Tree Dasher 2",
      price: 12500,
      imageUrl: "/src/assets/tree-dasher-white.jpg",
      category: "Running",
      inStock: true,
      description: "Clean white performance runner with dual-density midsole for superior comfort.",
      color: "White",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    },
    {
      id: 13,
      name: "Tree Breezer",
      price: 8900,
      imageUrl: "/src/assets/tree-breezer-blue.jpg",
      category: "Casual",
      inStock: true,
      description: "Perforated design for maximum breathability. Perfect for warm weather.",
      color: "Light Blue",
      fabric: "Tree Fiber (Eucalyptus)",
      pieces: "1 Pair"
    }
  ];

  const handleAddToCart = (product: Product) => {
    // Check if user is logged in for booking/ordering
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    toast({
      title: "Login Successful",
      description: "You can now place orders!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <AllbirdsNavbar 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <AllbirdsHero />
      <AllbirdsProductGrid
        products={products}
        onAddToCart={handleAddToCart}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onProductClick={handleProductClick}
        searchQuery={searchQuery}
      />
      <AllbirdsFooter />
      
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onOpenChange={setIsProductModalOpen}
        onAddToCart={handleAddToCart}
      />
      
      <CartSidebar
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        totalPrice={totalPrice}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
        onSuccess={handleLoginSuccess}
      />

      <WhatsAppFloat />
      
      <Toaster />
    </div>
  );
};

export default Index;
