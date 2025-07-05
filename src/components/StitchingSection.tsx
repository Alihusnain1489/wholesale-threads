
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Clock, Award, Ruler, Palette, CheckCircle, Star, ArrowRight } from "lucide-react";
import BookingDialog from "./BookingDialog";

const StitchingSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const stitchingServices = [
    {
      title: "Basic Stitching",
      price: "PKR 800-1500",
      description: "Simple straight cuts with basic finishing",
      features: ["Standard fitting", "Basic finishing", "2-3 days delivery"],
      icon: <Scissors className="h-6 w-6 sm:h-8 sm:w-8" />,
      popular: false
    },
    {
      title: "Premium Stitching",
      price: "PKR 1500-2500", 
      description: "Professional stitching with premium finishing",
      features: ["Perfect fitting", "Premium finishing", "1-2 days delivery", "Free alterations"],
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      popular: true
    },
    {
      title: "Designer Stitching",
      price: "PKR 2500-4000",
      description: "Custom designer cuts with luxury finishing",
      features: ["Designer cuts", "Luxury finishing", "Same day delivery", "Custom measurements", "Premium lining"],
      icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8" />,
      popular: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black">
            Professional Stitching Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your unstitched fabrics into perfectly fitted garments with our expert tailoring services
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stitchingServices.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${
              service.popular 
                ? 'border-black shadow-lg' 
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              {service.popular && (
                <div className="absolute -top-1 -right-1">
                  <Badge className="bg-black text-white px-3 py-1 text-xs rounded-bl-lg rounded-tr-lg">
                    POPULAR
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  service.popular ? 'bg-black text-white' : 'bg-gray-100 text-black'
                }`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-black mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-2xl sm:text-3xl font-bold text-black">{service.price}</p>
                <p className="text-gray-600 text-sm sm:text-base mt-2">{service.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm sm:text-base">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => setIsBookingOpen(true)}
                  className={`w-full py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-black">
            Our Stitching Process
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "1", title: "Measurement", desc: "Precise measurements taken", icon: <Ruler className="h-6 w-6" /> },
              { step: "2", title: "Cutting", desc: "Expert fabric cutting", icon: <Scissors className="h-6 w-6" /> },
              { step: "3", title: "Stitching", desc: "Professional stitching", icon: <Award className="h-6 w-6" /> },
              { step: "4", title: "Quality Check", desc: "Final quality inspection", icon: <CheckCircle className="h-6 w-6" /> }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {process.step}
                </div>
                <h4 className="font-bold text-lg sm:text-xl mb-2 text-black">{process.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-black">
            What Our Customers Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Ayesha Khan", rating: 5, comment: "Excellent stitching quality! Perfect fit and beautiful finishing." },
              { name: "Fatima Ali", rating: 5, comment: "Very professional service. Delivered on time with premium quality." },
              { name: "Sarah Ahmed", rating: 5, comment: "Best stitching service in town. Highly recommended for designer cuts." }
            ].map((review, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base italic">"{review.comment}"</p>
                  <p className="font-semibold text-black text-sm sm:text-base">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-black text-white rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Your Perfect Fit?
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
              Book your stitching appointment today and experience the difference of professional tailoring
            </p>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              Book Appointment Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <BookingDialog 
        isOpen={isBookingOpen}
        onOpenChange={setIsBookingOpen}
      />
    </section>
  );
};

export default StitchingSection;
