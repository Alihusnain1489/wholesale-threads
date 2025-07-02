
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  Menu, 
  ChevronDown,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

interface NavbarProps {
  cartItemsCount: number;
  onCartOpen: () => void;
  onLoginOpen: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Navbar = ({ cartItemsCount, onCartOpen, onLoginOpen, searchQuery, onSearchChange }: NavbarProps) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-gray-900 text-white py-1 sm:py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="h-3 w-3" />
                <span>+92 326 1052244</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Mail className="h-3 w-3" />
                <span className="hidden lg:inline">info@wholesalethreads.com</span>
                <span className="lg:hidden">Contact Us</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="hidden lg:inline">Free shipping on orders over 5000pkr</span>
              <span className="lg:hidden">Free Shipping 5000+</span>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="h-3 w-3" />
                <span>Store Locator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
              <span className="hidden sm:inline">WHOLESALE THREADS</span>
              <span className="sm:hidden">WT</span>
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
              <Button variant="ghost" size="sm" onClick={onLoginOpen} className="hover:bg-gray-100">
                <User className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                <Heart className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
            
            <Button variant="ghost" size="sm" onClick={onCartOpen} className="relative hover:bg-gray-100">
              <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs bg-black text-white">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden hover:bg-gray-100">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-80 sm:w-96">
                <div className="mt-8 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="pl-10 w-full"
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button variant="ghost" onClick={onLoginOpen} className="justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Login / Register
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t text-sm text-gray-600 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3" />
                      <span>+92 326 1052244</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3 w-3" />
                      <span>info@wholesalethreads.com</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
