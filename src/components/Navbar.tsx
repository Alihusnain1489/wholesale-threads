
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
}

const Navbar = ({ cartItemsCount, onCartOpen, onLoginOpen }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+92 326 1052244</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>info@wholesalethreads.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Free shipping on orders over 5000pkr</span>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span>Store Locator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">
              WHOLESALE THREADS
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-black focus:ring-0"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onLoginOpen}>
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onCartOpen} className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-black text-white">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
               
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
       
      </div>
    </header>
  );
};

export default Navbar;
