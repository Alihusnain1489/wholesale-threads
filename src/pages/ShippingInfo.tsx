
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Truck, Clock, MapPin, Package, Shield, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 animate-scale-in">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Shipping Information
              </h1>
            </div>
          </div>
          <p className="text-lg text-green-100 max-w-3xl mt-4">
            Fast, reliable delivery across Pakistan. Learn about our shipping options and policies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Shipping Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl">
            <CardHeader className="text-center">
              <Truck className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-lg">Standard Delivery</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-green-600 mb-2">PKR 150</p>
              <p className="text-sm text-gray-600 mb-4">3-5 business days</p>
              <Badge className="bg-green-100 text-green-800">Most Popular</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-lg">Express Delivery</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-blue-600 mb-2">PKR 300</p>
              <p className="text-sm text-gray-600 mb-4">1-2 business days</p>
              <Badge className="bg-blue-100 text-blue-800">Fast</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl">
            <CardHeader className="text-center">
              <Package className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <CardTitle className="text-lg">Free Shipping</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-purple-600 mb-2">FREE</p>
              <p className="text-sm text-gray-600 mb-4">Orders over PKR 5,000</p>
              <Badge className="bg-purple-100 text-purple-800">Save Money</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Areas */}
        <Card className="mb-8 hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-green-600" />
              Delivery Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Major Cities (1-2 days)</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Karachi</li>
                  <li>• Lahore</li>
                  <li>• Islamabad</li>
                  <li>• Rawalpindi</li>
                  <li>• Faisalabad</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Other Cities (3-4 days)</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Multan</li>
                  <li>• Peshawar</li>
                  <li>• Quetta</li>
                  <li>• Sialkot</li>
                  <li>• Gujranwala</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Remote Areas (5-7 days)</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Rural areas</li>
                  <li>• Northern areas</li>
                  <li>• Remote locations</li>
                  <li>• Small towns</li>
                  <li>• Villages</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Process */}
        <Card className="mb-8 hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl">How Shipping Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Order Placed</h4>
                <p className="text-sm text-gray-600">We receive your order and begin processing immediately</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Order Confirmed</h4>
                <p className="text-sm text-gray-600">Your order is confirmed and prepared for shipping</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">In Transit</h4>
                <p className="text-sm text-gray-600">Your package is on its way to your address</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Delivered</h4>
                <p className="text-sm text-gray-600">Your order arrives safely at your doorstep</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Policies */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg">Shipping Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Order Processing</p>
                    <p className="text-sm text-gray-600">Orders are processed within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Tracking Information</p>
                    <p className="text-sm text-gray-600">Tracking details sent via SMS/Email</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Secure Packaging</p>
                    <p className="text-sm text-gray-600">All items carefully packaged</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Insurance Coverage</p>
                    <p className="text-sm text-gray-600">All shipments fully insured</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Cash on Delivery:</strong> Available for all orders
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Bulk Orders:</strong> Special shipping rates available
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Holiday Shipping:</strong> May take 1-2 extra days
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Address Accuracy:</strong> Please ensure correct address
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="text-center hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Have Questions About Shipping?</h3>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to help with any shipping inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Contact Support
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/923261052244', '_blank')}
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                WhatsApp Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShippingInfo;
