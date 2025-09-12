import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import ElementoNavbar from "@/components/ElementoNavbar";
import ElementoHero from "@/components/ElementoHero";
import ElementoProductGrid from "@/components/ElementoProductGrid";
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
  const [orderedItems, setOrderedItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Pakistani ladies suits collection with PKR pricing (2000-7000 range)
  const products: Product[] = [
    {
      id: 1,
      name: "Embroidered Lawn Suit Triple",
      price: 3500,
      imageUrl: "/src/assets/ladies-suit-1.jpg",
      category: "Lawn",
      inStock: true,
      description: "Beautiful embroidered lawn suit perfect for summer",
      color: "Multi",
      fabric: "Lawn",
      pieces: "3 Piece"
    },
    {
      id: 2,
      name: "Chiffon Heavy Embroidery Suit",
      price: 6200,
      imageUrl: "/src/assets/ladies-suit-2.jpg", 
      category: "Chiffon",
      inStock: true,
      description: "Elegant chiffon suit with heavy embroidery work",
      color: "Royal Blue",
      fabric: "Chiffon",
      pieces: "3 Piece"
    },
    {
      id: 3,
      name: "Karandi Winter Collection",
      price: 4800,
      imageUrl: "/src/assets/ladies-suit-3.jpg",
      category: "Winter",
      inStock: true,
      description: "Warm karandi suit for winter season",
      color: "Brown",
      fabric: "Karandi",
      pieces: "3 Piece"
    },
    {
      id: 4,
      name: "Silk Mirror Work Suit",
      price: 5500,
      imageUrl: "/src/assets/ladies-suit-4.jpg",
      category: "Silk",
      inStock: true,
      description: "Premium silk suit with mirror work",
      color: "Maroon",
      fabric: "Silk",
      pieces: "3 Piece"
    },
    {
      id: 5,
      name: "Cotton Lawn Summer Special",
      price: 2800,
      imageUrl: "/src/assets/ladies-suit-5.jpg",
      category: "Lawn",
      inStock: true,
      description: "Light cotton lawn perfect for summer",
      color: "Pink",
      fabric: "Cotton Lawn",
      pieces: "3 Piece"
    },
    {
      id: 6,
      name: "Georgette Party Wear",
      price: 6800,
      imageUrl: "/src/assets/ladies-suit-6.jpg",
      category: "Party Wear",
      inStock: true,
      description: "Elegant georgette suit for parties",
      color: "Black",
      fabric: "Georgette",
      pieces: "3 Piece"
    },
    {
      id: 7,
      name: "Net Heavy Work Suit",
      price: 7000,
      imageUrl: "/src/assets/ladies-suit-7.jpg",
      category: "Net",
      inStock: true,
      description: "Net suit with heavy embellishment work",
      color: "Red",
      fabric: "Net",
      pieces: "3 Piece"
    },
    {
      id: 8,
      name: "Organza Embroidered Collection",
      price: 5200,
      imageUrl: "/src/assets/ladies-suit-8.jpg",
      category: "Organza",
      inStock: true,
      description: "Fine organza with beautiful embroidery",
      color: "Green",
      fabric: "Organza",
      pieces: "3 Piece"
    },
    {
      id: 9,
      name: "Khaddar Casual Wear",
      price: 3200,
      imageUrl: "/src/assets/ladies-suit-9.jpg",
      category: "Casual",
      inStock: true,
      description: "Comfortable khaddar for daily wear",
      color: "Beige",
      fabric: "Khaddar",
      pieces: "3 Piece"
    },
    {
      id: 10,
      name: "Jamawar Traditional Suit",
      price: 4500,
      imageUrl: "/src/assets/ladies-suit-10.jpg",
      category: "Traditional",
      inStock: true,
      description: "Traditional jamawar with classic patterns",
      color: "Golden",
      fabric: "Jamawar",
      pieces: "3 Piece"
    },
    {
      id: 11,
      name: "Velvet Zari Work",
      price: 6500,
      originalPrice: 7200,
      imageUrl: "/src/assets/ladies-suit-11.jpg",
      category: "Winter",
      inStock: true,
      description: "Luxurious velvet with zari work",
      color: "Purple",
      fabric: "Velvet",
      pieces: "3 Piece"
    },
    {
      id: 12,
      name: "Digital Print Modern",
      price: 3800,
      imageUrl: "/src/assets/ladies-suit-12.jpg",
      category: "Digital Print",
      inStock: true,
      description: "Modern digital print design",
      color: "Multi",
      fabric: "Digital Print",
      pieces: "3 Piece"
    },
    {
      id: 13,
      name: "Crinkle Chiffon Flowing",
      price: 4200,
      imageUrl: "/src/assets/ladies-suit-13.jpg",
      category: "Chiffon",
      inStock: true,
      description: "Flowing crinkle chiffon suit",
      color: "Peach",
      fabric: "Crinkle Chiffon",
      pieces: "3 Piece"
    },
    {
      id: 14,
      name: "Banarsi Golden Work",
      price: 6800,
      originalPrice: 7500,
      imageUrl: "/src/assets/ladies-suit-14.jpg",
      category: "Formal",
      inStock: false,
      description: "Premium banarsi with golden work",
      color: "Gold",
      fabric: "Banarsi",
      pieces: "3 Piece"
    },
    {
      id: 15,
      name: "Linen Casual Elegant",
      price: 2500,
      imageUrl: "/src/assets/ladies-suit-15.jpg",
      category: "Casual",
      inStock: true,
      description: "Elegant linen for casual wear",
      color: "White",
      fabric: "Linen",
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
      title: "Added to Cart Successfully",
      description: `${product.name} has been added to your cart.`,
    });

    // Auto-redirect to cart
    setTimeout(() => {
      setIsCartOpen(true);
    }, 800);
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

  const handleOrderSuccess = (orderedItems: CartItem[]) => {
    setOrderedItems(prev => [...prev, ...orderedItems]);
    setCartItems([]);
  };

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
      
      <ElementoProductGrid
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortBy}
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
        onOrderSuccess={handleOrderSuccess}
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
