
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Menu, X, ShoppingBag, User, Heart } from "lucide-react";

interface ModernNavbarProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

const ModernNavbar = ({ 
  cartItemsCount = 0, 
  onCartClick, 
  searchQuery = '', 
  onSearchChange 
}: ModernNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Collections', href: '#products' },
    { name: 'New Arrivals', href: '#' },
    { name: 'Stitching', href: '#stitching' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              Wholesale Threads
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:ring-white/20 rounded-full"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon" className="hidden sm:flex text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden sm:flex text-white hover:bg-white/10">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10" onClick={onCartClick}>
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-white text-black hover:bg-gray-200 text-xs flex items-center justify-center p-0">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-white/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:ring-white/20 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavbar;
