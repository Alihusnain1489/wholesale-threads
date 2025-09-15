import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ElementoNavbar from "@/components/ElementoNavbar";
import ElementoFooter from "@/components/ElementoFooter";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  ShoppingBag, 
  RefreshCw, 
  Truck, 
  CreditCard,
  MapPin,
  Home
} from "lucide-react";
import { Link } from 'react-router-dom';

const CustomerServices = () => {
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
            alt="Customer Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <Link to="/" className="inline-flex items-center mb-4 text-white/80 hover:text-white">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl lg:text-6xl font-light mb-4 font-mono">Customer Services</h1>
              <p className="text-xl text-white/90 font-light">We're here to help you with all your inquiries</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Phone className="h-12 w-12 mx-auto text-[hsl(var(--primary))] mb-4" />
              <CardTitle className="text-lg">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-semibold text-[hsl(var(--primary))]">+92 326 1052244</p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">Mon - Fri: 9AM - 6PM</p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">Sat: 10AM - 4PM</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 mx-auto text-[hsl(var(--primary))] mb-4" />
              <CardTitle className="text-lg">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-[hsl(var(--primary))]">mr.alihusnain11@gmail.com</p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">We reply within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-lg">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-green-600">+92 326 1052244</p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">Quick responses</p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">Available 24/7</p>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <ShoppingBag className="h-12 w-12 mx-auto text-[hsl(var(--primary))] mb-4" />
              <CardTitle>Order Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>• Order tracking</li>
                <li>• Order modifications</li>
                <li>• Bulk order assistance</li>
                <li>• Custom requirements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <RefreshCw className="h-12 w-12 mx-auto text-orange-600 mb-4" />
              <CardTitle>Returns & Exchanges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>• 7-day return policy</li>
                <li>• Easy exchange process</li>
                <li>• Quality guarantee</li>
                <li>• Refund assistance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <Truck className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Shipping Info</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>• Free shipping over 5000 PKR</li>
                <li>• Express delivery available</li>
                <li>• Nationwide coverage</li>
                <li>• International shipping</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <CreditCard className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle>Payment Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>• Multiple payment methods</li>
                <li>• Secure transactions</li>
                <li>• Installment options</li>
                <li>• Payment assistance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Reference Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-1.jpg" 
                alt="Quality Assurance"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Every product is carefully inspected before shipping</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-2.jpg" 
                alt="Premium Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Premium Collection</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Curated selection of finest Pakistani suits</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img 
                src="/src/assets/ladies-suit-3.jpg" 
                alt="Customer Satisfaction"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Your satisfaction is our top priority</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ElementoFooter />
    </div>
  );
};

export default CustomerServices;