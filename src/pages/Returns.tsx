import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ElementoNavbar from "@/components/ElementoNavbar";
import ElementoFooter from "@/components/ElementoFooter";
import { Home, RotateCcw, Shield, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const Returns = () => {
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
            alt="Returns & Exchanges"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-900/80"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <Link to="/" className="inline-flex items-center mb-4 text-white/80 hover:text-white">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl lg:text-6xl font-light mb-4 font-mono">Returns & Exchanges</h1>
              <p className="text-xl text-white/90 font-light">Easy returns within 7 days. Your satisfaction guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Return Policy Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 mx-auto text-[hsl(var(--primary))] mb-4" />
              <CardTitle className="text-lg">7-Day Return</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Return items within 7 days of delivery for a full refund or exchange
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-lg">Quality Guarantee</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                We stand behind the quality of our products with a satisfaction guarantee
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <RotateCcw className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-lg">Easy Process</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Simple return process with prepaid return shipping labels
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reference Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-4.jpg" 
                alt="Return Process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Simple Return Process</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Contact us to initiate your return</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-5.jpg" 
                alt="Quality Check"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Quality Inspection</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">All returned items are carefully inspected</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-6.jpg" 
                alt="Fast Refunds"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Fast Refunds</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Quick processing within 3-5 business days</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Need Help with Returns?</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">
              Our customer service team is ready to assist you with your return or exchange.
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

export default Returns;