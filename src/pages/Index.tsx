import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import ElementoNavbar from "@/components/ElementoNavbar";
import ElementoHero from "@/components/ElementoHero";
import ElementoBestSellers from "@/components/ElementoBestSellers";
import ProductDetailModal from "@/components/ProductDetailModal";
import CartSidebar from "@/components/CartSidebar";
import ElementoFooter from "@/components/ElementoFooter";
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

  // Sample products data with PKR pricing for women's clothing store
  const products: Product[] = [
    {
      id: 1,
      name: "LambEdge Shearling-Lined Lambskin Jacket",
      price: 82113,
      imageUrl: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      category: "Jackets",
      inStock: true,
      description: "Premium lambskin jacket with shearling lining",
      color: "Black",
      fabric: "Lambskin",
      pieces: "1 Piece"
    },
    {
      id: 2,
      name: "Lawn womens special",
      price: 2500,
      originalPrice: 3000,
      imageUrl: "/lovable-uploads/3c1fc8db-6e9b-402d-827e-4072da43bc6c.png",
      category: "Lawn",
      inStock: true,
      description: "Special lawn collection for women",
      color: "Multi",
      fabric: "Lawn",
      pieces: "3 Piece"
    },
    {
      id: 3,
      name: "MEN ANTIQUE BROWN LEATHER JACKET BALLSTON",
      price: 79637,
      imageUrl: "/lovable-uploads/4a031324-00d1-4c00-95b9-3c959bd9a70c.png",
      category: "Jackets",
      inStock: true,
      description: "Antique brown leather jacket",
      color: "Brown",
      fabric: "Leather",
      pieces: "1 Piece"
    },
    {
      id: 4,
      name: "Reaper Skull Graphic Biker Jacket",
      price: 84661,
      imageUrl: "/lovable-uploads/515e1bb2-b7a9-4126-8e72-203817453fb8.png",
      category: "Jackets",
      inStock: true,
      description: "Stylish biker jacket with skull graphic",
      color: "Black",
      fabric: "Leather",
      pieces: "1 Piece"
    },
    {
      id: 5,
      name: "Elegant Chiffon Suit",
      price: 3500,
      imageUrl: "/lovable-uploads/5544a434-4a1f-46cc-b113-10304bbc10aa.png",
      category: "Suits",
      inStock: true,
      description: "Elegant chiffon suit for special occasions",
      color: "Cream",
      fabric: "Chiffon",
      pieces: "3 Piece"
    },
    {
      id: 6,
      name: "Premium Embroidered Collection",
      price: 4500,
      originalPrice: 5200,
      imageUrl: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png",
      category: "Suits",
      inStock: false,
      description: "Premium embroidered suit collection",
      color: "Royal Blue",
      fabric: "Premium Silk",
      pieces: "3 Piece"
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

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLikeClick = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    toast({
      title: "Added to Wishlist",
      description: "Item has been added to your wishlist!",
    });
  };

  // Check if search is active
  const isSearchActive = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <ElementoNavbar 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
      />
      
      {/* Hide hero section when searching */}
      {!isSearchActive && (
        <ElementoHero 
          onLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
        />
      )}
      
      <ElementoBestSellers
        products={products}
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
        onLikeClick={handleLikeClick}
      />
      <ElementoFooter />
      
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
