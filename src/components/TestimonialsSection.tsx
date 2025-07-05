
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white text-gray-800 hover:bg-gray-50">
            Testimonials
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6">
            Happy Customers
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "The winter coat I bought is not only stylish but also incredibly warm. The website is easy to navigate & the free shipping is a fantastic perk."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-medium text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Verified Customer</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-right">
              <div className="text-6xl lg:text-8xl font-bold text-gray-900 mb-4">
                99%
              </div>
              <p className="text-lg text-gray-600">Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
