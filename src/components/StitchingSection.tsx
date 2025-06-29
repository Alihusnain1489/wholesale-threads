
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Shirt, Star, Clock } from "lucide-react";

const StitchingSection = () => {
  const handleWhatsAppOrder = () => {
    const message = "Hi! I'm interested in your stitching services for women's dresses. Can you provide more details about pricing and timeline?";
    const whatsappUrl = `https://wa.me/923261052244?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Custom Stitching Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transform your beautiful fabrics into stunning outfits! We offer professional stitching services for all types of women's dresses with expert craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-purple-700">Expert Tailoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Professional stitching with years of experience in Pakistani dress designs
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-pink-700">All Dress Types</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Kurtis, Shalwar Kameez, Frocks, Gowns, and all traditional wear
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-rose-700">Quality Assured</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Premium finishing with attention to every detail and perfect fitting
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-indigo-700">Quick Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Fast turnaround time with timely delivery of your stitched outfits
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-purple-100 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Ready to Get Your Dress Stitched?</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-3 text-purple-700">What We Offer:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Custom fitting and measurements
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Professional embroidery services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Alteration and repair services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Urgent orders available
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-3 text-pink-700">Process:</h4>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    Contact us with your requirements
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    Measurement and design consultation
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    Professional stitching begins
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    Quality check and delivery
                  </li>
                </ol>
              </div>
            </div>

            <Button 
              onClick={handleWhatsAppOrder}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Scissors className="h-5 w-5 mr-2" />
              Order Stitching Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StitchingSection;
