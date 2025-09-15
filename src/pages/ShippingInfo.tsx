import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ElementoNavbar from "@/components/ElementoNavbar";
import ElementoFooter from "@/components/ElementoFooter";
import { Home, Truck, Clock, MapPin, Package, Shield, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <ElementoNavbar
        cartItemsCount={0}
        onCartClick={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
      />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/winter-hero.webp"
            alt="Shipping Information"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <Link to="/" className="inline-flex items-center mb-4 text-white/80 hover:text-white">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl lg:text-6xl font-light mb-4 font-mono">Shipping Information</h1>
              <p className="text-xl text-white/90 font-light">Fast, reliable delivery across Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Shipping Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Truck className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-lg">Standard Delivery</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-green-600 mb-2">PKR 150</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">3-5 business days</p>
              <Badge className="bg-green-100 text-green-800">Most Popular</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-lg">Express Delivery</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-blue-600 mb-2">PKR 300</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">1-2 business days</p>
              <Badge className="bg-blue-100 text-blue-800">Fast</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Package className="h-12 w-12 mx-auto text-[hsl(var(--primary))] mb-4" />
              <CardTitle className="text-lg">Free Shipping</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">FREE</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">Orders over PKR 5,000</p>
              <Badge className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">Save Money</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Reference Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-7.jpg" 
                alt="Fast Shipping"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Fast Shipping</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Quick delivery across Pakistan</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-8.jpg" 
                alt="Secure Packaging"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Secure Packaging</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Your items are carefully packaged</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-9.jpg" 
                alt="Nationwide Coverage"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">We deliver all across Pakistan</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Have Questions About Shipping?</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">
              Our customer service team is here to help with any shipping inquiries.
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

export default ShippingInfo;