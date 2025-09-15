import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ElementoNavbar from "@/components/ElementoNavbar";
import ElementoFooter from "@/components/ElementoFooter";
import { 
  ArrowLeft, 
  Award, 
  Users, 
  Truck, 
  Star,
  Heart,
  Scissors,
  Globe,
  Home
} from "lucide-react";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <ElementoNavbar
        cartItemsCount={0}
        onCartClick={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
      />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-64 bg-gradient-to-r from-[hsl(var(--nav-dark))] to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Alif Store</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Crafting Excellence in Women's Fashion Since 2020
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Crafting Excellence in Women's Fashion Since 2020
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              At Alif Threads, we believe that every woman deserves to feel beautiful and confident. 
              Our journey began with a simple mission: to provide high-quality, affordable unstitched fabrics 
              that celebrate the rich heritage of Pakistani textile craftsmanship.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">4+</div>
              <p className="text-sm sm:text-base text-gray-600">Years of Experience</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">10K+</div>
              <p className="text-sm sm:text-base text-gray-600">Happy Customers</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-sm sm:text-base text-gray-600">Unique Designs</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-sm sm:text-base text-gray-600">Cities Served</p>
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
                  Founded in 2020 by a passionate team of textile enthusiasts, Alif Threads started 
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-yellow-600 mb-4" />
                <CardTitle className="text-lg sm:text-xl">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  We source the finest fabrics and work with skilled artisans to ensure every piece 
                  meets our high standards of quality and craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Scissors className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-pink-600 mb-4" />
                <CardTitle className="text-lg sm:text-xl">Expert Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Our team includes master craftsmen who specialize in traditional techniques like 
                  Chikankari, block printing, and intricate embroidery work.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Heart className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-red-600 mb-4" />
                <CardTitle className="text-lg sm:text-xl">Customer-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm sm:text-base">
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
        <Card className="text-center bg-white shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--nav-dark))]">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our products or want to learn more about our collections? 
              We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/customer-services">
                <Button className="bg-[hsl(var(--nav-dark))] text-white hover:bg-gray-700">
                  Contact Customer Service
                </Button>
              </Link>
              <Button variant="outline" className="border-[hsl(var(--nav-dark))] text-[hsl(var(--nav-dark))]">
                Visit Our Store
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ElementoFooter />
    </div>
  );
};

export default AboutUs;
