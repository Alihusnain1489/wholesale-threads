import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import ModernNavbar from "@/components/ModernNavbar";
import ModernHero from "@/components/ModernHero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CollectionGrid from "@/components/CollectionGrid";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ModernNewsletter from "@/components/ModernNewsletter";
import ProductGridModern from "@/components/ProductGridModern";
import ProductDetailModal from "@/components/ProductDetailModal";
import CartSidebar from "@/components/CartSidebar";
import { Product, CartItem } from "@/types";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Sample products data with PKR pricing
  const products: Product[] = [
    {
      id: 1,
      name: "Elegant Chikankari Collection",
      price: 2850,
      originalPrice: 3200,
      imageUrl: "/lovable-uploads/169fe697-18b5-4551-babf-b05ff42d17cc.png",
      category: "Chikankari",
      inStock: true,
      description: "Beautiful hand-embroidered chikankari work on premium fabric",
      color: "White",
      fabric: "Cotton",
      pieces: "3 Piece"
    },
    {
      id: 2,
      name: "Traditional Chunri Design",
      price: 1950,
      imageUrl: "/lovable-uploads/3c1fc8db-6e9b-402d-827e-4072da43bc6c.png",
      category: "Chunri",
      inStock: true,
      description: "Classic chunri pattern with vibrant colors",
      color: "Multi",
      fabric: "Chiffon",
      pieces: "2 Piece"
    },
    {
      id: 3,
      name: "Dhoop Kinaray Premium",
      price: 3450,
      originalPrice: 4000,
      imageUrl: "/lovable-uploads/4a031324-00d1-4c00-95b9-3c959bd9a70c.png",
      category: "Dhoop Kinaray",
      inStock: true,
      description: "Premium collection with intricate golden work",
      color: "Golden",
      fabric: "Silk",
      pieces: "3 Piece"
    },
    {
      id: 4,
      name: "Floral Paradise",
      price: 2200,
      imageUrl: "/lovable-uploads/515e1bb2-b7a9-4126-8e72-203817453fb8.png",
      category: "The Floral World",
      inStock: true,
      description: "Delicate floral prints on soft fabric",
      color: "Pink",
      fabric: "Lawn",
      pieces: "3 Piece"
    },
    {
      id: 5,
      name: "Mother's Love Collection",
      price: 2750,
      imageUrl: "/lovable-uploads/5544a434-4a1f-46cc-b113-10304bbc10aa.png",
      category: "Tribute to Mothers",
      inStock: true,
      description: "Special collection dedicated to mothers",
      color: "Cream",
      fabric: "Cotton",
      pieces: "3 Piece"
    },
    {
      id: 6,
      name: "Luxury Premium Suite",
      price: 4500,
      originalPrice: 5200,
      imageUrl: "/lovable-uploads/558c5917-b7c4-4092-9c5e-63316f2d53d6.png",
      category: "Premium Luxury",
      inStock: true,
      description: "Ultimate luxury collection with premium finishing",
      color: "Royal Blue",
      fabric: "Premium Silk",
      pieces: "3 Piece"
    }
  ];

  const handleAddToCart = (product: Product) => {
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

  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ModernHero />
      <FeaturedProducts />
      <ProductGridModern
        products={products}
        onAddToCart={handleAddToCart}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onProductClick={handleProductClick}
        searchQuery={searchQuery}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
      <CollectionGrid />
      <FeaturesSection />
      <TestimonialsSection />
      <ModernNewsletter />
      
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
      
      <Toaster />
    </div>
  );
};

export default Index;
