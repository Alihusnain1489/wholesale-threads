
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Clock, Star, Award, Truck } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-amber-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-amber-800 drop-shadow-sm">
            Get in Touch
          </h2>
          <p className="text-amber-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions about our fabrics? Need bulk pricing? We're here to help you find the perfect materials for your needs with personalized service and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 shadow-lg bg-white hover:scale-105 group backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-shadow">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <CardTitle className="text-xl text-amber-800 group-hover:text-amber-600 transition-colors">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <p className="text-amber-700 mb-4 text-sm">Chat with us directly for instant responses</p>
              <Button 
                onClick={() => window.open('https://wa.me/923261052244', '_blank')}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-amber-300 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 shadow-lg bg-white hover:scale-105 group backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-shadow">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-amber-800 group-hover:text-amber-600 transition-colors">Phone</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <p className="text-amber-800 mb-1 font-semibold">+92 326 1052244</p>
              <p className="text-sm text-amber-600 mb-4">Call for immediate assistance</p>
              <Button 
                onClick={() => window.open('tel:+923261052244', '_self')}
                variant="outline"
                className="w-full border-2 border-amber-400 text-amber-700 hover:bg-amber-50 hover:border-amber-500 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 shadow-lg bg-white hover:scale-105 group backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-shadow">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-amber-800 group-hover:text-amber-600 transition-colors">Email</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <p className="text-amber-800 mb-1 text-sm font-semibold break-all">mr.alihusnain11@gmail.com</p>
              <p className="text-sm text-amber-600 mb-4">For detailed inquiries</p>
              <Button 
                onClick={() => window.open('mailto:mr.alihusnain11@gmail.com', '_self')}
                variant="outline"
                className="w-full border-2 border-amber-400 text-amber-700 hover:bg-amber-50 hover:border-amber-500 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 shadow-lg bg-white hover:scale-105 group backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-shadow">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-amber-800 group-hover:text-amber-600 transition-colors">Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
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

        <div className="mt-16 bg-white/90 backdrop-blur-lg rounded-3xl p-10 max-w-5xl mx-auto border-2 border-amber-200 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-6 text-amber-800">
              Why Choose Wholesale Threads?
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-all duration-300 group-hover:scale-110">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-amber-800">Premium Quality</h4>
                <p className="text-sm text-amber-700 leading-relaxed">Hand-picked fabrics from trusted suppliers with quality assurance</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-all duration-300 group-hover:scale-110">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-amber-800">Fast Delivery</h4>
                <p className="text-sm text-amber-700 leading-relaxed">Quick and secure shipping across Pakistan with tracking</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-amber-800">24/7 Support</h4>
                <p className="text-sm text-amber-700 leading-relaxed">Always here to help with dedicated customer service</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-amber-300 transition-all duration-300 group-hover:scale-110">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-amber-800">Best Prices</h4>
                <p className="text-sm text-amber-700 leading-relaxed">Wholesale rates with bulk discounts and special offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
