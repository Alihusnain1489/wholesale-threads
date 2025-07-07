
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, RotateCcw, Shield, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const Returns = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8 sm:py-12">
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
                Returns & Exchanges
              </h1>
            </div>
          </div>
          <p className="text-lg text-orange-100 max-w-3xl mt-4">
            Easy returns and exchanges within 7 days. Your satisfaction is our priority.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Return Policy Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <CardTitle className="text-lg">7-Day Return</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600">
                Return items within 7 days of delivery for a full refund or exchange
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-lg">Quality Guarantee</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600">
                We stand behind the quality of our products with a satisfaction guarantee
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl">
            <CardHeader className="text-center">
              <RotateCcw className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-lg">Easy Process</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600">
                Simple return process with prepaid return shipping labels
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Return Conditions */}
        <Card className="mb-8 hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl">Return Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Acceptable Returns
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Items in original packaging</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Unworn and unused fabrics</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">All tags and labels attached</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">No damage or stains</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Defective or damaged items</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                  <XCircle className="h-5 w-5 mr-2" />
                  Non-Returnable Items
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Cut or altered fabrics</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Items without original packaging</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Sale items (Final Sale)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Items returned after 7 days</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Custom or personalized items</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Return Process */}
        <Card className="mb-8 hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl">How to Return Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">Contact Us</h4>
                <p className="text-sm text-gray-600">Contact our support team to initiate the return process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">Get Authorization</h4>
                <p className="text-sm text-gray-600">Receive return authorization and instructions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">Pack & Ship</h4>
                <p className="text-sm text-gray-600">Pack items securely and ship using provided label</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h4 className="font-semibold mb-2">Get Refund</h4>
                <p className="text-sm text-gray-600">Receive refund within 3-5 business days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Refund Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg">Refund Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Store Credit</h5>
                  <p className="text-sm text-green-700">Fastest option - credited immediately to your account</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Original Payment Method</h5>
                  <p className="text-sm text-blue-700">Refund to your original payment method (3-5 business days)</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">Exchange</h5>
                  <p className="text-sm text-purple-700">Exchange for a different size, color, or style</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg">Return Shipping</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Free Return Shipping</p>
                    <p className="text-sm text-gray-600">On defective or damaged items</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Customer Pays Shipping</p>
                    <p className="text-sm text-gray-600">For change of mind returns (PKR 150)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Insured Shipping</p>
                    <p className="text-sm text-gray-600">All returns are fully insured</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="mb-8 hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">How long do I have to return an item?</h4>
                <p className="text-sm text-gray-600">You have 7 days from the delivery date to return an item.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can I return items that have been washed?</h4>
                <p className="text-sm text-gray-600">No, items that have been washed, worn, or altered cannot be returned.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How long does it take to process a refund?</h4>
                <p className="text-sm text-gray-600">Refunds are processed within 3-5 business days after we receive your return.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you offer exchanges?</h4>
                <p className="text-sm text-gray-600">Yes, we offer exchanges for different sizes, colors, or styles subject to availability.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="text-center hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Need Help with Returns?</h3>
            <p className="text-gray-600 mb-6">
              Our customer service team is ready to assist you with your return or exchange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Contact Support
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/923261052244', '_blank')}
                className="border-red-600 text-red-600 hover:bg-red-50"
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

export default Returns;
