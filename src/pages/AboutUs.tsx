
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Award, 
  Users, 
  Truck, 
  Star,
  Heart,
  Scissors,
  Globe
} from "lucide-react";
import { Link } from 'react-router-dom';

const AboutUs = () => {
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
              <h1 className="text-3xl font-bold text-gray-900">About Wholesale Threads</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Crafting Excellence in Women's Fashion Since 2010
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Wholesale Threads, we believe that every woman deserves to feel beautiful and confident. 
              Our journey began with a simple mission: to provide high-quality, affordable unstitched fabrics 
              that celebrate the rich heritage of Pakistani textile craftsmanship.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">13+</div>
              <p className="text-gray-600">Years of Experience</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <p className="text-gray-600">Unique Designs</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <p className="text-gray-600">Cities Served</p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Founded in 2010 by a passionate team of textile enthusiasts, Wholesale Threads started 
                  as a small family business with a big dream. We recognized the gap between traditional 
                  craftsmanship and modern fashion needs, and set out to bridge that divide.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founders, with their deep understanding of Pakistani textile traditions and 
                  contemporary fashion trends, curated collections that honor our cultural heritage 
                  while embracing modern aesthetics.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be one of Pakistan's leading suppliers of premium unstitched 
                  women's clothing, serving customers across the nation and beyond.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To empower women through beautiful, high-quality fashion that celebrates Pakistani 
                  textile heritage while embracing contemporary style.
                </p>
                <h3 className="font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted and preferred destination for women's unstitched clothing 
                  in Pakistan and internationally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Sets Us Apart */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Award className="h-12 w-12 mx-auto text-yellow-600 mb-4" />
                <CardTitle>Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We source the finest fabrics and work with skilled artisans to ensure every piece 
                  meets our high standards of quality and craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Scissors className="h-12 w-12 mx-auto text-pink-600 mb-4" />
                <CardTitle>Expert Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Our team includes master craftsmen who specialize in traditional techniques like 
                  Chikankari, block printing, and intricate embroidery work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <CardTitle>Customer-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We listen to our customers and continuously evolve our collections based on their 
                  feedback and changing fashion preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Collections */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Chikankari Collection</h3>
                <p className="text-gray-600 text-sm">
                  Exquisite hand-embroidered pieces featuring traditional Lucknowi chikankari work, 
                  perfect for elegant occasions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Chunri Collection</h3>
                <p className="text-gray-600 text-sm">
                  Vibrant tie-dye patterns that celebrate the colorful tradition of Rajasthani 
                  and Sindhi textile art.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Dhoop Kinaray</h3>
                <p className="text-gray-600 text-sm">
                  Inspired by the golden hues of sunlight, featuring warm tones and contemporary 
                  designs for modern women.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">The Floral World</h3>
                <p className="text-gray-600 text-sm">
                  Botanical-inspired designs featuring beautiful floral motifs and nature-inspired 
                  color palettes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Tribute to Mothers</h3>
                <p className="text-gray-600 text-sm">
                  A special collection dedicated to celebrating the strength and grace of mothers 
                  with elegant and sophisticated designs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Premium Luxury</h3>
                <p className="text-gray-600 text-sm">
                  Our finest collection featuring premium fabrics, intricate details, and 
                  exclusive designs for special occasions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Commitment */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-6 w-6 mr-2" />
                Sustainability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We're committed to sustainable practices, supporting local artisans, and ensuring 
                our production processes minimize environmental impact while preserving traditional 
                craftsmanship for future generations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Community Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We actively support local communities by providing fair employment opportunities, 
                skill development programs, and contributing to various social causes that uplift 
                the textile industry workers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our products or want to learn more about our collections? 
              We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/customer-services">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Contact Customer Service
                </Button>
              </Link>
              <Button variant="outline">
                Visit Our Store
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
