
import React from 'react';
import { Badge } from "@/components/ui/badge";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎨",
      title: "Handcrafted Perfection",
      description: "Where our skilled artisans breathe life into each creation, ensuring quality and beauty."
    },
    {
      icon: "🌍", 
      title: "Global Craftsmanship",
      description: "Discover the artistry of global craftsmanship embedded in every piece at Wholesale Threads."
    },
    {
      icon: "👕",
      title: "Size-Inclusive Designs", 
      description: "We embrace diversity with size-inclusive designs that cater to every body shape."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-200">
            Our Values
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6">
            Why Choose Us
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
