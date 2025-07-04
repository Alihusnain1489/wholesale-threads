import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import AboutUs from "@/pages/AboutUs";
import CustomerServices from "@/pages/CustomerServices";
import ContactUs from "@/pages/ContactUs";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/customer-services" element={<CustomerServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
