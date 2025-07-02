
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors, Shirt, Star, Clock, Ruler, Phone, MessageCircle } from "lucide-react";

const StitchingSection = () => {
  const [activeTab, setActiveTab] = useState('suits');

  const handleWhatsAppOrder = () => {
    const message = "Hi! I'm interested in your stitching services for women's dresses. Can you provide more details about pricing and timeline?";
    const whatsappUrl = `https://wa.me/923261052244?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallOrder = () => {
    window.open('tel:+923261052244', '_self');
  };

  // Size chart data
  const suitSizes = [
    { size: 'XS', chest: '32"', waist: '26"', hip: '34"', length: '42"' },
    { size: 'S', chest: '34"', waist: '28"', hip: '36"', length: '43"' },
    { size: 'M', chest: '36"', waist: '30"', hip: '38"', length: '44"' },
    { size: 'L', chest: '38"', waist: '32"', hip: '40"', length: '45"' },
    { size: 'XL', chest: '40"', waist: '34"', hip: '42"', length: '46"' },
    { size: 'XXL', chest: '42"', waist: '36"', hip: '44"', length: '47"' }
  ];

  const shirtSizes = [
    { size: 'XS', bust: '32"', waist: '26"', shoulder: '14"', armhole: '16"', length: '24"' },
    { size: 'S', bust: '34"', waist: '28"', shoulder: '14.5"', armhole: '17"', length: '25"' },
    { size: 'M', bust: '36"', waist: '30"', shoulder: '15"', armhole: '18"', length: '26"' },
    { size: 'L', bust: '38"', waist: '32"', shoulder: '15.5"', armhole: '19"', length: '27"' },
    { size: 'XL', bust: '40"', waist: '34"', shoulder: '16"', armhole: '20"', length: '28"' },
    { size: 'XXL', bust: '42"', waist: '36"', shoulder: '16.5"', armhole: '21"', length: '29"' }
  ];

  const trouserSizes = [
    { size: 'XS', waist: '26"', hip: '34"', thigh: '20"', length: '38"', bottom: '12"' },
    { size: 'S', waist: '28"', hip: '36"', thigh: '21"', length: '39"', bottom: '13"' },
    { size: 'M', waist: '30"', hip: '38"', thigh: '22"', length: '40"', bottom: '14"' },
    { size: 'L', waist: '32"', hip: '40"', thigh: '23"', length: '41"', bottom: '15"' },
    { size: 'XL', waist: '34"', hip: '42"', thigh: '24"', length: '42"', bottom: '16"' },
    { size: 'XXL', waist: '36"', hip: '44"', thigh: '25"', length: '43"', bottom: '17"' }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Custom Stitching Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Transform your beautiful fabrics into stunning outfits! We offer professional stitching services for all types of women's dresses with expert craftsmanship and attention to detail.
          </p>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-base md:text-lg text-purple-700">Expert Tailoring</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-xs md:text-sm">
                Professional stitching with years of experience in Pakistani dress designs
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-base md:text-lg text-pink-700">All Dress Types</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-xs md:text-sm">
                Kurtis, Shalwar Kameez, Frocks, Gowns, and all traditional wear
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-base md:text-lg text-rose-700">Quality Assured</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-xs md:text-sm">
                Premium finishing with attention to every detail and perfect fitting
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-base md:text-lg text-indigo-700">Quick Delivery</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 text-xs md:text-sm">
                Fast turnaround time with timely delivery of your stitched outfits
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Size Charts Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-purple-100 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 flex items-center justify-center gap-2">
              <Ruler className="h-6 w-6 text-purple-600" />
              Size Charts
            </h3>
            <p className="text-gray-600 text-sm md:text-base">Choose your perfect fit with our detailed size guide</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="suits" className="text-xs md:text-sm">Ladies Suits</TabsTrigger>
              <TabsTrigger value="shirts" className="text-xs md:text-sm">Ladies Shirts</TabsTrigger>
              <TabsTrigger value="trousers" className="text-xs md:text-sm">Ladies Trousers</TabsTrigger>
            </TabsList>

            <TabsContent value="suits" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Size</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Chest</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Waist</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Hip</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suitSizes.map((size, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 font-medium text-xs md:text-sm">{size.size}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.chest}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.waist}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.hip}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="shirts" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-pink-100">
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Size</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Bust</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Waist</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Shoulder</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Armhole</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shirtSizes.map((size, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 font-medium text-xs md:text-sm">{size.size}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.bust}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.waist}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.shoulder}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.armhole}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="trousers" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-rose-100">
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Size</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Waist</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Hip</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Thigh</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Length</th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-xs md:text-sm">Bottom</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trouserSizes.map((size, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 font-medium text-xs md:text-sm">{size.size}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.waist}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.hip}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.thigh}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.length}</td>
                        <td className="border border-gray-200 px-3 py-2 text-xs md:text-sm">{size.bottom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Service Details & Booking */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-6xl mx-auto border border-purple-100 shadow-lg">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Ready to Get Your Dress Stitched?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="text-left">
                <h4 className="font-semibold text-base md:text-lg mb-3 text-purple-700">What We Offer:</h4>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                    Custom fitting and measurements
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                    Professional embroidery services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                    Alteration and repair services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                    Urgent orders available
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold text-base md:text-lg mb-3 text-pink-700">Process:</h4>
                <ol className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    Contact us with your requirements
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Measurement and design consultation
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    Professional stitching begins
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                    Quality check and delivery
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleWhatsAppOrder}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 md:px-8 py-3 text-sm md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Order
              </Button>
              
              <Button 
                onClick={handleCallOrder}
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 md:px-8 py-3 text-sm md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Pricing Info */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-semibold text-purple-700">Starting from PKR 800</span> for basic stitching | 
                <span className="font-semibold text-pink-700 ml-2">Premium embroidery from PKR 1500</span>
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Delivery in 3-7 working days | Rush orders available in 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StitchingSection;
