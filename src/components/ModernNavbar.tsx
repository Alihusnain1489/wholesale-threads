
import React, { useState, useEffect } from 'react';
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
  MapPin,
  Phone,
  Mail,
  LogOut
} from "lucide-react";

interface ModernNavbarProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onLoginClick?: () => void;
  isLoggedIn?: boolean;
}

const ModernNavbar = ({ 
  cartItemsCount = 0, 
  onCartClick, 
  searchQuery = '', 
  onSearchChange,
  onLoginClick,
  isLoggedIn = false
}: ModernNavbarProps) => {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTopBar(false);
    }, 10000); // Hide after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Hidden on mobile, auto-hide after 10 seconds */}
      {showTopBar && (
        <div className="bg-slate-900 text-white py-2 hidden lg:block transition-all duration-300">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>+92 326 1052244</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <span>info@alifthreads.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <span>Free shipping on orders over PKR 5,000</span>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3" />
                  <span>Store Locator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-gray-50">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 sm:w-96">
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
                  
                  <div className="flex flex-col space-y-4 pt-6 border-t">
                    <Button variant="ghost" onClick={onLoginClick} className="justify-start text-left">
                      <User className="h-4 w-4 mr-3" />
                      {isLoggedIn ? 'Account' : 'Login / Register'}
                    </Button>
                    <Button variant="ghost" className="justify-start text-left">
                      <Heart className="h-4 w-4 mr-3" />
                      Wishlist
                    </Button>
                  </div>
                  
                  <div className="pt-6 border-t text-sm text-gray-600 space-y-3">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3" />
                      <span>+92 326 1052244</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3 w-3" />
                      <span>info@alifthreads.com</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center lg:mr-auto">
            <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-slate-900 tracking-tight">
              <span className="font-bold">ALIF</span>
              <span className="font-light ml-2">THREADS</span>
            </h1>
          </div>

          {/* Search Bar - Desktop only */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for products, categories, colors..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-12 pr-4 py-3 w-full text-base"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={onLoginClick} className="hover:bg-gray-50 p-2">
                {isLoggedIn ? (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <User className="h-5 w-5 text-slate-700" />
                  </div>
                ) : (
                  <User className="h-5 w-5 text-slate-700" />
                )}
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-50 p-2">
                <Heart className="h-5 w-5 text-slate-700" />
              </Button>
            </div>
            
            {/* Cart Button */}
            <Button variant="ghost" size="sm" onClick={onCartClick} className="relative hover:bg-gray-50 p-2">
              <ShoppingBag className="h-5 w-5 text-slate-700" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-slate-900 text-white rounded-full">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ModernNavbar;
