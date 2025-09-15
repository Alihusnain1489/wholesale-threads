import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ElementoNavbar from "@/components/ElementoNavbar";
import ElementoFooter from "@/components/ElementoFooter";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <ElementoNavbar
        cartItemsCount={0}
        onCartClick={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/winter-hero.webp"
            alt="Page Not Found"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-black/80"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h1 className="text-8xl lg:text-9xl font-light mb-4 font-mono">404</h1>
              <h2 className="text-3xl lg:text-4xl font-light mb-4">Page Not Found</h2>
              <p className="text-xl text-white/90 font-light mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-light">
                    <Home className="h-5 w-5 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-light"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Reference Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-10.jpg" 
                alt="Popular Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Popular Collection</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Discover our most loved designs</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-11.jpg" 
                alt="New Arrivals"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">New Arrivals</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Check out our latest collection</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-12.jpg" 
                alt="Best Sellers"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Best Sellers</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Our customers' favorite picks</p>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Need Help Finding What You're Looking For?</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">
              Our customer service team is here to help you find the perfect suit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white">
                  Contact Support
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/923261052244', '_blank')}
                className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
              >
                WhatsApp Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ElementoFooter />
    </div>
  );
};

export default NotFound;