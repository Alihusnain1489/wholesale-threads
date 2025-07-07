import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, Building, Globe, Shield, Award, Users, CheckCircle, Home } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    orderNumber: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Auto-send via WhatsApp
    const phoneNumber = "923261052244";
    const message = `📞 CONTACT FORM SUBMISSION

👤 Customer Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

📋 Inquiry Details:
Type: ${formData.inquiryType.toUpperCase()}
Subject: ${formData.subject || 'General Inquiry'}
${formData.orderNumber ? `Order Number: ${formData.orderNumber}` : ''}

💬 Message:
${formData.message}

Submitted via Website Contact Form`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    toast({
      title: "Message Sent Successfully!",
      description: "Your message has been sent via WhatsApp. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      orderNumber: '',
      inquiryType: 'general'
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-black text-white py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 animate-scale-in">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Contact Alif Threads
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mt-4">
            Get in touch with us for any questions, support, or inquiries. We're here to help you with all your fabric needs.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* WhatsApp Contact */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">WhatsApp Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Instant support & quick responses</p>
                <Button 
                  onClick={() => window.open('https://wa.me/923261052244', '_blank')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            {/* Phone Contact */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-semibold mb-2">+92 326 1052244</p>
                <p className="text-gray-600 mb-4">Direct call support</p>
                <Button 
                  onClick={() => window.open('tel:+923261052244', '_self')}
                  variant="outline"
                  className="w-full border-blue-400 text-blue-600 hover:bg-blue-50"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-semibold mb-2 text-sm break-all">mr.alihusnain11@gmail.com</p>
                <p className="text-gray-600 mb-4">Detailed inquiries</p>
                <Button 
                  onClick={() => window.open('mailto:mr.alihusnain11@gmail.com', '_self')}
                  variant="outline"
                  className="w-full border-purple-400 text-purple-600 hover:bg-purple-50"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-gray-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-700 space-y-1 mb-4">
                  <p className="font-semibold">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="font-semibold">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
                <Badge className="bg-green-100 text-green-700 border border-green-200">
                  Currently Open
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Send Us a Message</h2>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 300 0000000"
                          className="border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="order">Order Support</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="stitching">Stitching Services</option>
                          <option value="complaint">Complaint</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your message"
                        className="border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>

                    {formData.inquiryType === 'order' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Order Number
                        </label>
                        <Input
                          type="text"
                          name="orderNumber"
                          value={formData.orderNumber}
                          onChange={handleInputChange}
                          placeholder="Enter your order number"
                          className="border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your inquiry in detail..."
                        rows={5}
                        required
                        className="border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Business Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black">Visit Our Store</h2>
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-black">Store Address</p>
                          <p className="text-gray-600">Shop 45, Anarkali Bazaar<br />Lahore, Punjab, Pakistan</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-black flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-black">Website</p>
                          <p className="text-gray-600">www.wholesalethreads.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Shield className="h-5 w-5" />, title: "Quality Guarantee", desc: "100% authentic premium fabrics" },
                    { icon: <Award className="h-5 w-5" />, title: "Expert Service", desc: "Professional guidance and support" },
                    { icon: <Users className="h-5 w-5" />, title: "Customer First", desc: "Dedicated customer satisfaction" },
                    { icon: <CheckCircle className="h-5 w-5" />, title: "Trusted Since 2020", desc: "Established business with reputation" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-black">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-black">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
