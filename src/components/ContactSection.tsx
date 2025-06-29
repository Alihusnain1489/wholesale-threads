
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Clock, Star, Award, Truck, MapPin, Globe, Shield, Users, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent drop-shadow-sm">
            Get in Touch
          </h2>
          <p className="text-amber-800 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Have questions about our fabrics? Need bulk pricing? We're here to help you find the perfect materials for your needs with personalized service and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="pb-4 relative">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-green-300 transition-all transform group-hover:scale-110">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <CardTitle className="text-xl text-amber-800 group-hover:text-green-600 transition-colors">WhatsApp Chat</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 relative">
              <p className="text-amber-700 mb-4 text-sm">Instant responses & live support</p>
              <Button 
                onClick={() => window.open('https://wa.me/923261052244', '_blank')}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-green-300 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="pb-4 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-300 transition-all transform group-hover:scale-110">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-amber-800 group-hover:text-blue-600 transition-colors">Direct Call</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 relative">
              <p className="text-amber-800 mb-1 font-semibold">+92 326 1052244</p>
              <p className="text-sm text-amber-600 mb-4">Immediate assistance available</p>
              <Button 
                onClick={() => window.open('tel:+923261052244', '_self')}
                variant="outline"
                className="w-full border-2 border-blue-400 text-blue-700 hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="pb-4 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-red-300 transition-all transform group-hover:scale-110">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-amber-800 group-hover:text-red-600 transition-colors">Email Support</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 relative">
              <p className="text-amber-800 mb-1 text-sm font-semibold break-all">mr.alihusnain11@gmail.com</p>
              <p className="text-sm text-amber-600 mb-4">Detailed inquiries welcome</p>
              <Button 
                onClick={() => window.open('mailto:mr.alihusnain11@gmail.com', '_self')}
                variant="outline"
                className="w-full border-2 border-red-400 text-red-700 hover:bg-red-50 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="pb-4 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-purple-300 transition-all transform group-hover:scale-110">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-amber-800 group-hover:text-purple-600 transition-colors">Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 relative">
              <div className="text-sm text-amber-700 space-y-1 mb-4">
                <p className="font-semibold">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="font-semibold">Sunday: 10:00 AM - 6:00 PM</p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-amber-600 font-medium">Trusted Service Since 2020</span>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white/90 backdrop-blur-lg rounded-3xl p-10 max-w-6xl mx-auto border-2 border-amber-200 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Why Choose Wholesale Threads?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-amber-800">Premium Quality</h4>
                <p className="text-sm text-amber-700 leading-relaxed">Hand-picked fabrics from trusted suppliers with quality assurance guarantee</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-green-300 transition-all duration-300 group-hover:scale-110">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-amber-800">Fast Delivery</h4>
                <p className="text-sm text-amber-700 leading-relaxed">Quick and secure shipping across Pakistan with real-time tracking</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-300 transition-all duration-300 group-hover:scale-110">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-amber-800">24/7 Support</h4>
                <p className="text-sm text-amber-700 leading-relaxed">Always here to help with dedicated customer service team</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-purple-300 transition-all duration-300 group-hover:scale-110">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-amber-800">Best Prices</h4>
                <p className="text-sm text-amber-700 leading-relaxed">Wholesale rates with bulk discounts and special member offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
