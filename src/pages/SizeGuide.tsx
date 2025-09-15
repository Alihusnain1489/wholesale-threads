
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ElementoNavbar from "@/components/ElementoNavbar";
import ElementoFooter from "@/components/ElementoFooter";
import { Home, Ruler, Info, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <ElementoNavbar 
        cartItemsCount={0}
        onCartClick={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
      />
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-purple-600 via-[hsl(var(--nav-dark))] to-indigo-700 flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Size Guide
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Find your perfect fit with our comprehensive size guide for women's unstitched clothing.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* How to Measure */}
        <Card className="mb-8 hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Ruler className="h-6 w-6 mr-2 text-purple-600" />
              How to Measure Yourself
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-purple-800">Upper Body Measurements</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-purple-100 text-purple-800 rounded-full">1</Badge>
                    <div>
                      <p className="font-medium">Bust/Chest</p>
                      <p className="text-sm text-gray-600">Measure around the fullest part of your bust</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-purple-100 text-purple-800 rounded-full">2</Badge>
                    <div>
                      <p className="font-medium">Waist</p>
                      <p className="text-sm text-gray-600">Measure around your natural waistline</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-purple-100 text-purple-800 rounded-full">3</Badge>
                    <div>
                      <p className="font-medium">Hip</p>
                      <p className="text-sm text-gray-600">Measure around the fullest part of your hips</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-purple-800">Length Measurements</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-pink-100 text-pink-800 rounded-full">4</Badge>
                    <div>
                      <p className="font-medium">Shirt Length</p>
                      <p className="text-sm text-gray-600">From shoulder to desired length</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-pink-100 text-pink-800 rounded-full">5</Badge>
                    <div>
                      <p className="font-medium">Sleeve Length</p>
                      <p className="text-sm text-gray-600">From shoulder to wrist</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-pink-100 text-pink-800 rounded-full">6</Badge>
                    <div>
                      <p className="font-medium">Trouser Length</p>
                      <p className="text-sm text-gray-600">From waist to ankle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Size Charts */}
        <div className="space-y-8">
          <Card className="hover:shadow-lg transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl">Women's Unstitched Size Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-purple-50">
                      <th className="border border-gray-300 p-3 text-left">Size</th>
                      <th className="border border-gray-300 p-3 text-left">Bust (inches)</th>
                      <th className="border border-gray-300 p-3 text-left">Waist (inches)</th>
                      <th className="border border-gray-300 p-3 text-left">Hip (inches)</th>
                      <th className="border border-gray-300 p-3 text-left">Fabric Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">XS</td>
                      <td className="border border-gray-300 p-3">30-32</td>
                      <td className="border border-gray-300 p-3">24-26</td>
                      <td className="border border-gray-300 p-3">34-36</td>
                      <td className="border border-gray-300 p-3">2.5 meters</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">S</td>
                      <td className="border border-gray-300 p-3">32-34</td>
                      <td className="border border-gray-300 p-3">26-28</td>
                      <td className="border border-gray-300 p-3">36-38</td>
                      <td className="border border-gray-300 p-3">2.75 meters</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">M</td>
                      <td className="border border-gray-300 p-3">34-36</td>
                      <td className="border border-gray-300 p-3">28-30</td>
                      <td className="border border-gray-300 p-3">38-40</td>
                      <td className="border border-gray-300 p-3">3 meters</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">L</td>
                      <td className="border border-gray-300 p-3">36-38</td>
                      <td className="border border-gray-300 p-3">30-32</td>
                      <td className="border border-gray-300 p-3">40-42</td>
                      <td className="border border-gray-300 p-3">3.25 meters</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">XL</td>
                      <td className="border border-gray-300 p-3">38-40</td>
                      <td className="border border-gray-300 p-3">32-34</td>
                      <td className="border border-gray-300 p-3">42-44</td>
                      <td className="border border-gray-300 p-3">3.5 meters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Fabric Types */}
          <Card className="hover:shadow-lg transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl">Fabric Type Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Cotton Lawn</h4>
                  <p className="text-sm text-blue-700">Perfect for summer wear. Lightweight and breathable.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Chiffon</h4>
                  <p className="text-sm text-purple-700">Elegant and flowing. Ideal for formal occasions.</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Silk</h4>
                  <p className="text-sm text-pink-700">Luxurious and smooth. Perfect for special events.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="hover:shadow-lg transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                Measuring Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-sm">Use a flexible measuring tape for accurate results</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-sm">Measure over light clothing or undergarments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-sm">Keep the tape snug but not tight</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-sm">Stand straight with arms at your sides</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-sm">Have someone help you for better accuracy</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-sm">Measure twice to ensure consistency</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-8 text-center hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Need Help with Sizing?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you find the perfect fit. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Contact Us
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/923261052244', '_blank')}
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                WhatsApp Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ElementoFooter />
    </div>
  );
};

export default SizeGuide;
