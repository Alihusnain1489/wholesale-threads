import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Search, 
  User, 
  ShoppingBag, 
  Menu,
  Heart
} from "lucide-react";

interface AllbirdsNavbarProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

const AllbirdsNavbar = ({ 
  cartItemsCount = 0, 
  onCartClick, 
  searchQuery = '', 
  onSearchChange 
}: AllbirdsNavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top notification bar */}
      <div className="bg-earth-charcoal text-white py-2 px-4 text-center">
        <p className="text-sm font-medium">Free Shipping On Orders Over PKR 5,000. Easy Returns.</p>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="mt-8 space-y-6">
                  <div className="space-y-4">
                    <Button variant="ghost" className="justify-start text-left w-full">
                      Women
                    </Button>
                    <Button variant="ghost" className="justify-start text-left w-full">
                      Men
                    </Button>
                    <Button variant="ghost" className="justify-start text-left w-full">
                      Sale
                    </Button>
                  </div>
                  <div className="pt-6 border-t">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange?.(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl allbirds-heading font-normal tracking-tight">
              alif store
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Button variant="ghost" className="text-base font-normal hover:bg-muted">
              Women
            </Button>
            <Button variant="ghost" className="text-base font-normal hover:bg-muted">
              Men
            </Button>
            <Button variant="ghost" className="text-base font-normal hover:bg-muted">
              Sale
            </Button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="hidden lg:block">
              {isSearchOpen ? (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    onBlur={() => !searchQuery && setIsSearchOpen(false)}
                    className="pl-10 w-64"
                    autoFocus
                  />
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Mobile Search */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Account */}
            <Button variant="ghost" size="sm" className="p-2">
              <User className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="p-2">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" onClick={onCartClick} className="relative p-2">
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AllbirdsNavbar;