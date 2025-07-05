
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  ArrowLeft
} from "lucide-react";
import { Link } from 'react-router-dom';

const CustomerServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Customer Services</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Phone className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">+92 326 1052244</p>
              <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat: 10AM - 4PM</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">info@wholesalethreads.com</p>
              <p className="text-gray-600">We reply within 24 hours</p>
              <p className="text-gray-600">support@wholesalethreads.com</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-8 w-8 mx-auto text-green-500 mb-2" />
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">+92 326 1052244</p>
              <p className="text-gray-600">Quick responses</p>
              <p className="text-gray-600">Available 24/7</p>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <ShoppingBag className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <CardTitle>Order Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Order tracking</li>
                <li>• Order modifications</li>
                <li>• Bulk order assistance</li>
                <li>• Custom requirements</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <RefreshCw className="h-12 w-12 mx-auto text-orange-600 mb-4" />
              <CardTitle>Returns & Exchanges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 7-day return policy</li>
                <li>• Easy exchange process</li>
                <li>• Quality guarantee</li>
                <li>• Refund assistance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Truck className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Shipping Info</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Free shipping over 5000 PKR</li>
                <li>• Express delivery available</li>
                <li>• Nationwide coverage</li>
                <li>• International shipping</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CreditCard className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle>Payment Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Multiple payment methods</li>
                <li>• Secure transactions</li>
                <li>• Installment options</li>
                <li>• Payment assistance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How can I track my order?</h3>
                <p className="text-gray-600">You can track your order using the tracking number sent to your email or by contacting our customer service team.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What is your return policy?</h3>
                <p className="text-gray-600">We offer a 7-day return policy for unused items in original condition. Please contact us for return authorization.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom stitching?</h3>
                <p className="text-gray-600">Yes, we provide custom stitching services. Please visit our stitching section or contact us for more details.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What are your shipping charges?</h3>
                <p className="text-gray-600">Shipping is free for orders above 5000 PKR. For orders below this amount, standard shipping charges apply.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Store Location */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              Visit Our Store
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Wholesale Threads Main Store</h3>
                <p className="text-gray-600 mb-4">
                  123 Fashion Street, Textile Market<br />
                  Lahore, Punjab, Pakistan<br />
                  Postal Code: 54000
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Mon-Sat: 10AM-8PM</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Store Location Map</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerServices;
