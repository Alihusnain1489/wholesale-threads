
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import ModernNavbar from "@/components/ModernNavbar";
import ModernHero from "@/components/ModernHero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CollectionGrid from "@/components/CollectionGrid";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ModernNewsletter from "@/components/ModernNewsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <ModernHero />
      <FeaturedProducts />
      <CollectionGrid />
      <FeaturesSection />
      <TestimonialsSection />
      <ModernNewsletter />
      <Toaster />
    </div>
  );
};

export default Index;
