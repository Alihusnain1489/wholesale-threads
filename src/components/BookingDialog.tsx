import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { CartItem } from "@/types";
import emailjs from '@emailjs/browser';

interface BookingDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems?: CartItem[];
  totalPrice?: number;
  onOrderSuccess?: (orderedItems: CartItem[]) => void;
}

const BookingDialog = ({ isOpen, onOpenChange, cartItems = [], totalPrice = 0, onOrderSuccess }: BookingDialogProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    shippingAddress: '',
    paymentType: '',
    city: '',
    additionalDetails: ''
  });

  // EmailJS Configuration - Replace with your actual credentials
  const EMAILJS_CONFIG = {
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    STORE_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_STORE_TEMPLATE_ID || "YOUR_STORE_TEMPLATE_ID",
    CUSTOMER_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID || "YOUR_CUSTOMER_TEMPLATE_ID"
  };

  const pakistaniCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta',
    'Gujranwala', 'Sialkot', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana', 'Hyderabad', 'Mardan',
    'Mingora', 'Gujrat', 'Kasur', 'Rahim Yar Khan', 'Sahiwal', 'Okara', 'Wah Cantonment', 'Dera Ghazi Khan',
    'Mirpur Khas', 'Nawabshah', 'Kohat', 'Turbat', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error", 
        description: "Please enter your email address",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.mobile.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your mobile number",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.shippingAddress.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your shipping address", 
        variant: "destructive"
      });
      return false;
    }

    if (!formData.paymentType) {
      toast({
        title: "Validation Error",
        description: "Please select a payment type",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.city) {
      toast({
        title: "Validation Error",
        description: "Please select your city",
        variant: "destructive"
      });
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const sendEmails = async (): Promise<boolean> => {
    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY" || 
          EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID" ||
          EMAILJS_CONFIG.STORE_TEMPLATE_ID === "YOUR_STORE_TEMPLATE_ID" ||
          EMAILJS_CONFIG.CUSTOMER_TEMPLATE_ID === "YOUR_CUSTOMER_TEMPLATE_ID") {
        console.warn('EmailJS not configured - skipping email sending');
        toast({
          title: "EmailJS Not Configured",
          description: "Please configure EmailJS credentials to enable email notifications",
          variant: "default"
        });
        return true; // Continue with WhatsApp even if email is not configured
      }

      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Generate cart items text for email
      const cartItemsText = cartItems.length > 0 
        ? cartItems.map(item => 
            `${item.name} - Quantity: ${item.quantity} - Price: ₨${item.price.toLocaleString()}`
          ).join('\n')
        : 'No items in cart';

      // Email parameters for store owner (mr.alihusnain11@gmail.com)
      const storeOwnerParams = {
        to_name: 'Store Owner',
        to_email: 'mr.alihusnain11@gmail.com',
        from_name: formData.name,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_mobile: formData.mobile,
        shipping_address: formData.shippingAddress,
        city: formData.city,
        payment_type: formData.paymentType,
        cart_items: cartItemsText,
        total_amount: `₨${totalPrice.toLocaleString()}`,
        additional_details: formData.additionalDetails || 'None',
        order_date: new Date().toLocaleDateString('en-GB')
      };

      // Email parameters for customer confirmation
      const customerParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: 'Alif Wholesale Clothes',
        customer_name: formData.name,
        order_date: new Date().toLocaleDateString('en-GB'),
        total_amount: `₨${totalPrice.toLocaleString()}`,
        message: `Thank you for your order! We have received your order worth ${storeOwnerParams.total_amount}. Our team will contact you soon to confirm your order details and arrange delivery. Your order is now being processed.`
      };

      console.log('Sending emails with params:', { storeOwnerParams, customerParams });

      // Send email to store owner first
      const storeEmailResponse = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.STORE_TEMPLATE_ID, 
        storeOwnerParams
      );
      console.log('Store owner email sent:', storeEmailResponse);
      
      // Send confirmation email to customer
      const customerEmailResponse = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.CUSTOMER_TEMPLATE_ID, 
        customerParams
      );
      console.log('Customer email sent:', customerEmailResponse);
      
      console.log('Both emails sent successfully');
      return true;
    } catch (error) {
      console.error('Error sending emails:', error);
      // Log the specific error for debugging
      if (error instanceof Error) {
        console.error('Email error details:', error.message);
      }
      
      // Don't fail the entire process if email fails
      toast({
        title: "Email Warning",
        description: "Order processed but email notification failed. Please check EmailJS configuration. WhatsApp message will still be sent.",
        variant: "default"
      });
      return true;
    }
  };

  const sendWhatsAppMessage = () => {
    // Generate cart items section for WhatsApp message
    const cartItemsText = cartItems.length > 0 
      ? `\n🛍️ Cart Items:\n${cartItems.map(item => 
          `• ${item.name} - Qty: ${item.quantity} - ₨${item.price.toLocaleString()}`
        ).join('\n')}\n💰 Total Amount: ₨${totalPrice.toLocaleString()}\n`
      : '';

    // Auto-send WhatsApp message
    const phoneNumber = "923261052244";
    const message = `🛒 NEW ORDER BOOKING

👤 Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
${cartItemsText}
📦 Shipping Details:
Address: ${formData.shippingAddress}
City: ${formData.city}
Payment Type: ${formData.paymentType}

📝 Additional Details:
${formData.additionalDetails || 'None'}

📅 Order Date: ${new Date().toLocaleDateString('en-GB')}

Thank you for choosing Alif Threads! 🌟`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      shippingAddress: '',
      paymentType: '',
      city: '',
      additionalDetails: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Send emails
      await sendEmails();

      // Send WhatsApp message
      sendWhatsAppMessage();
      
      // Show success message
      toast({
        title: "Order Sent Successfully!",
        description: "Order emails sent and WhatsApp message created. We'll contact you soon!",
      });

      // Move cart items to ordered items
      if (onOrderSuccess && cartItems.length > 0) {
        onOrderSuccess([...cartItems]);
      }
      
      // Reset form and close dialog
      resetForm();
      onOpenChange(false);

    } catch (error) {
      console.error('Order submission error:', error);
      toast({
        title: "Order Submission Error",
        description: "There was an error processing your order. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-0 shadow-lg">
        <DialogHeader className="border-b border-gray-100 pb-4">
          <DialogTitle className="text-2xl font-bold text-black flex items-center gap-2">
            🛒 Order Booking
          </DialogTitle>
          <p className="text-gray-600 text-sm mt-1">Fill in your details to place an order</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black border-b border-gray-200 pb-2">
              👤 Personal Information
            </h3>
            
            <div>
              <Label htmlFor="name" className="text-black font-medium">Full Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full mt-1 border-gray-300 focus:border-black focus:ring-black"
                disabled={isLoading}
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-black font-medium">Email Address *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="w-full mt-1 border-gray-300 focus:border-black focus:ring-black"
                disabled={isLoading}
              />
            </div>
            
            <div>
              <Label htmlFor="mobile" className="text-black font-medium">Mobile Number *</Label>
              <Input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="+92 300 0000000"
                required
                className="w-full mt-1 border-gray-300 focus:border-black focus:ring-black"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Shipping Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black border-b border-gray-200 pb-2">
              📦 Shipping Information
            </h3>
            
            <div>
              <Label htmlFor="shippingAddress" className="text-black font-medium">Shipping Address *</Label>
              <Textarea
                id="shippingAddress"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleInputChange}
                placeholder="Enter your complete shipping address with area and landmarks"
                required
                className="w-full mt-1 border-gray-300 focus:border-black focus:ring-black min-h-[80px]"
                disabled={isLoading}
              />
            </div>
            
            <div>
              <Label htmlFor="city" className="text-black font-medium">City *</Label>
              <Select 
                onValueChange={(value) => handleSelectChange('city', value)} 
                required
                disabled={isLoading}
              >
                <SelectTrigger className="w-full mt-1 border-gray-300 focus:border-black focus:ring-black">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent className="bg-white max-h-60 border shadow-lg">
                  {pakistaniCities.map((city) => (
                    <SelectItem 
                      key={city} 
                      value={city}
                      className="hover:bg-gray-50 cursor-pointer"
                    >
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Payment Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black border-b border-gray-200 pb-2">
              💳 Payment Information
            </h3>
            
            <div>
              <Label className="text-black font-medium">Payment Type *</Label>
              <RadioGroup 
                value={formData.paymentType} 
                onValueChange={(value) => handleSelectChange('paymentType', value)}
                className="mt-2 space-y-2"
                disabled={isLoading}
              >
                <div className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online" className="cursor-pointer">💻 Online Payment</Label>
                </div>
                <div className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="cursor-pointer">💵 Cash on Delivery</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black border-b border-gray-200 pb-2">
              📝 Additional Information
            </h3>
            
            <div>
              <Label htmlFor="additionalDetails" className="text-black font-medium">
                Additional Details (Optional)
              </Label>
              <Textarea
                id="additionalDetails"
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleInputChange}
                placeholder="Any special instructions, preferred delivery time, or requirements..."
                className="w-full mt-1 border-gray-300 focus:border-black focus:ring-black min-h-[80px]"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="text-lg font-semibold text-black mb-3">📋 Order Summary</h3>
              <div className="space-y-2">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span>{item.name} (x{item.quantity})</span>
                    <span className="font-medium">₨{item.price.toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t pt-2 flex justify-between items-center font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-green-600">₨{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-200 py-3 text-lg font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Processing Order...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                🚀 Place Order
              </div>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;