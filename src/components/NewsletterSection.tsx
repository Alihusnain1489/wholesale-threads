
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          STAY IN THE LOOP
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Be the first to know about new arrivals, exclusive offers, and fashion tips. 
          Subscribe to our newsletter and never miss out.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-black border-0"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-black hover:bg-gray-200 px-8"
            >
              SUBSCRIBE
            </Button>
          </div>
        </form>
        
        <p className="text-xs text-gray-400 mt-4">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
