
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    shippingAddress: '',
    paymentType: '',
    city: '',
    additionalDetails: ''
  });

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

  const sendEmails = async () => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    // Generate cart items text for email
    const cartItemsText = cartItems.length > 0 
      ? cartItems.map(item => 
          `${item.name} - Quantity: ${item.quantity} - Price: ₨${item.price.toLocaleString()}`
        ).join('\n')
      : 'No items in cart';

    // Email to store owner (mr.alihusnain11@gmail.com)
    const storeOwnerParams = {
      to_email: 'mr.alihusnain11@gmail.com',
      customer_name: formData.name,
      customer_email: formData.email,
      customer_mobile: formData.mobile,
      shipping_address: formData.shippingAddress,
      city: formData.city,
      payment_type: formData.paymentType,
      cart_items: cartItemsText,
      total_amount: `₨${totalPrice.toLocaleString()}`,
      additional_details: formData.additionalDetails || 'None'
    };

    // Email to customer
    const customerParams = {
      to_email: formData.email,
      customer_name: formData.name,
      message: "You have placed order successfully on Alif Wholesale Clothes. We will contact you soon. Your order is now in processing."
    };

    try {
      // Send email to store owner
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_STORE_TEMPLATE_ID', storeOwnerParams);
      
      // Send confirmation email to customer
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_CUSTOMER_TEMPLATE_ID', customerParams);
      
      console.log('Emails sent successfully');
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate contact email
    if (formData.email !== 'mr.alihusnain11@gmail.com') {
      toast({
        title: "Invalid Email",
        description: "Please use the registered email: mr.alihusnain11@gmail.com",
        variant: "destructive"
      });
      return;
    }

    // Send emails
    await sendEmails();

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

Thank you for choosing Alif Threads! 🌟`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
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
    setFormData({
      name: '',
      email: '',
      mobile: '',
      shippingAddress: '',
      paymentType: '',
      city: '',
      additionalDetails: ''
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-black">Order Booking</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full border-gray-300 focus:border-black focus:ring-black"
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
              placeholder="mr.alihusnain11@gmail.com"
              required
              className="w-full border-gray-300 focus:border-black focus:ring-black"
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
              className="w-full border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
          
          <div>
            <Label htmlFor="shippingAddress" className="text-black font-medium">Shipping Address *</Label>
            <Textarea
              id="shippingAddress"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleInputChange}
              placeholder="Enter your complete shipping address"
              required
              className="w-full border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
          
          <div>
            <Label className="text-black font-medium">Payment Type *</Label>
            <RadioGroup 
              value={formData.paymentType} 
              onValueChange={(value) => handleSelectChange('paymentType', value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online">Online Payment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod">Cash on Delivery</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="city" className="text-black font-medium">City *</Label>
            <Select onValueChange={(value) => handleSelectChange('city', value)} required>
              <SelectTrigger className="w-full border-gray-300 focus:border-black focus:ring-black">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-60">
                {pakistaniCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="additionalDetails" className="text-black font-medium">Additional Details (Optional)</Label>
            <Textarea
              id="additionalDetails"
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleInputChange}
              placeholder="Any special instructions or requirements"
              className="w-full border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
          >
            Place Order
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
