
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const ModernNewsletter = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) {
      toast({
        title: "Please fill all fields",
        description: "Email and agreement to terms are required",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to our newsletter community"
    });
    
    setEmail('');
    setAgreed(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Newsletter Signup */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 leading-tight">
                Subscribe for elegance, exclusivity,
                <span className="block">and endless style stories</span>
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 border-b border-gray-300 rounded-none px-0 py-3 focus:border-gray-900 bg-transparent text-lg"
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="mt-1"
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                >
                  I here by agree to the terms & conditions of Wholesale Threads
                </label>
              </div>
              
              <Button 
                type="submit"
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full"
              >
                Submit
              </Button>
            </form>
          </div>
          
          {/* Right - Footer Links */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Licensing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2024 Wholesale Threads. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for fashion enthusiasts worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default ModernNewsletter;
