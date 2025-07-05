
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, User, ShoppingBag, Menu } from "lucide-react";

const ModernNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Shop', href: '#' },
    { name: 'Our Story', href: '#' },
    { name: 'Collection', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Reviews', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">
              WHOLESALE THREADS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <Input
                    placeholder="Search"
                    className="w-48 border-gray-300 rounded-full"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2"
                  >
                    Cancel
                  </Button>
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

            {/* User & Cart */}
            <Button variant="ghost" size="sm" className="p-2">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search"
                        className="pl-10 rounded-full"
                      />
                    </div>
                    
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <a 
                          key={item.name}
                          href={item.href}
                          className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ModernNavbar;
