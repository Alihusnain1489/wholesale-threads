import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AllbirdsFooter = () => {
  return (
    <footer className="bg-earth-cream border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl allbirds-heading font-light mb-4">
            Want First Dibs?
          </h3>
          <p className="allbirds-subheading mb-6 max-w-md mx-auto">
            Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-white border-earth-stone rounded-none"
            />
            <Button className="bg-earth-charcoal hover:bg-earth-charcoal/90 text-white px-6 rounded-none font-medium">
              SIGN UP
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Shop */}
          <div>
            <h4 className="allbirds-heading font-medium mb-4">SHOP</h4>
            <ul className="space-y-2 allbirds-body text-sm">
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Men's Shoes</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Women's Shoes</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Men's Apparel</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Women's Apparel</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Socks</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="allbirds-heading font-medium mb-4">HELP</h4>
            <ul className="space-y-2 allbirds-body text-sm">
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">1-888-963-8944</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="allbirds-heading font-medium mb-4">ABOUT</h4>
            <ul className="space-y-2 allbirds-body text-sm">
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Our Materials</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Our Stores</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Our Footprint</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="allbirds-heading font-medium mb-4">CONNECT</h4>
            <ul className="space-y-2 allbirds-body text-sm">
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-earth-charcoal transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm allbirds-body">
              <a href="#" className="hover:text-earth-charcoal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-earth-charcoal transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-earth-charcoal transition-colors">Do Not Sell My Personal Information</a>
            </div>
            <div className="text-sm allbirds-body text-muted-foreground">
              © 2024 Alif Store, Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AllbirdsFooter;