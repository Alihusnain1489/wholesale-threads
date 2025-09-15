import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  Menu,
  Phone
} from "lucide-react";

interface ElementoNavbarProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onLoginClick?: () => void;
  isLoggedIn?: boolean;
}

const ElementoNavbar = ({ 
  cartItemsCount = 0, 
  onCartClick, 
  searchQuery = '', 
  onSearchChange,
  onLoginClick,
  isLoggedIn = false
}: ElementoNavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--nav-dark))] text-[hsl(var(--nav-foreground))] shadow-lg">
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 sm:w-96 bg-white">
                <div className="mt-8 space-y-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange?.(e.target.value)}
                      className="pl-10 w-full"
                    />
                  </div>
                  
                  <nav className="space-y-4">
                    <a href="#" className="block text-gray-900 hover:text-primary">Lawn Suits</a>
                    <a href="#" className="block text-gray-900 hover:text-primary">Chiffon Collection</a>
                    <a href="#" className="block text-gray-900 hover:text-primary">Winter Wear</a>
                    <a href="#" className="block text-gray-900 hover:text-primary">Party Wear</a>
                    <a href="#" className="block text-gray-900 hover:text-primary">Casual Suits</a>
                    <a href="#" className="block text-gray-900 hover:text-primary">Contact</a>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <h1 className="text-xl lg:text-2xl font-light tracking-[0.2em] text-white font-poppins">
              Alif Wholesale Clothes
            </h1>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:bg-white/10 p-2"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User Account */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onLoginClick} 
              className="text-white hover:bg-white/10 p-2"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onCartClick} 
              className="relative text-white hover:bg-white/10 p-2"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-white text-black rounded-full">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar - Expandable */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-12 pr-4 py-3 w-full text-base bg-white/10 border-white/20 text-white placeholder-gray-300"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ElementoNavbar;