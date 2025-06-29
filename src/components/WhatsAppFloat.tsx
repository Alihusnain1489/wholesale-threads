
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your Pakistani fabric collection. Can you help me?";
    const whatsappUrl = `https://wa.me/923261052244?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <Button
          onClick={handleWhatsAppClick}
          className="h-16 w-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border-2 border-white"
          size="icon"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-2xl bg-green-500/30 animate-ping"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          <div className="relative">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
