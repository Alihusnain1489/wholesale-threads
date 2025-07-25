import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CartItem } from "@/types";

interface BookingDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems?: CartItem[];
  totalPrice?: number;
}

const BookingDialog = ({ isOpen, onOpenChange, cartItems = [], totalPrice = 0 }: BookingDialogProps) => {
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
  const [bookingMethod, setBookingMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  const pakistaniCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta',
    'Gujranwala', 'Sialkot', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana', 'Hyderabad', 'Mardan',
    'Mingora', 'Gujrat', 'Kasur', 'Rahim Yar Khan', 'Sahiwal', 'Okara', 'Wah Cantonment', 'Dera Ghazi Khan',
    'Mirpur Khas', 'Nawabshah', 'Kohat', 'Turbat', 'Other'
  ];

  // Calculate bulk discount (20% off for orders with total quantity >= 50)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isBulkOrder = totalQuantity >= 50;
  const discountAmount = isBulkOrder ? totalPrice * 0.2 : 0;
  const finalTotal = totalPrice - discountAmount;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate order details
    const cartItemsText = cartItems.length > 0 
      ? `\n🛍️ Cart Items:\n${cartItems.map(item => {
          if (item.isPrintingOrder) {
            return `• ${item.name} - ${item.articles || 5} articles (${item.quantity} suits) - ₨${item.price.toLocaleString()}/article`;
          }
          return `• ${item.name} - Qty: ${item.quantity} suits - ₨${item.price.toLocaleString()}`;
        }).join('\n')}\n\n💰 Subtotal: ₨${totalPrice.toLocaleString()}`
      : '';

    const bulkDiscountText = isBulkOrder 
      ? `\n🎉 Bulk Discount (20%): -₨${discountAmount.toLocaleString()}\n💵 Final Total: ₨${finalTotal.toLocaleString()}`
      : `\n💵 Total Amount: ₨${totalPrice.toLocaleString()}`;

    const orderDetails = `🛒 NEW ORDER BOOKING

👤 Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
${cartItemsText}${bulkDiscountText}

📦 Shipping Details:
Address: ${formData.shippingAddress}
City: ${formData.city}
Payment Type: ${formData.paymentType}

📝 Additional Details:
${formData.additionalDetails || 'None'}

${isBulkOrder ? '🎊 BULK ORDER - 20% DISCOUNT APPLIED!' : ''}

Thank you for choosing Alif Threads! 🌟`;

    if (bookingMethod === 'whatsapp') {
      // Send via WhatsApp
      const phoneNumber = "923261052244";
      const encodedMessage = encodeURIComponent(orderDetails);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      toast({
        title: "Order Sent via WhatsApp!",
        description: "Your order has been sent via WhatsApp. We'll contact you soon!",
      });
    } else {
      // Send via Email
      const subject = encodeURIComponent("New Order Booking - Alif Threads");
      const body = encodeURIComponent(orderDetails);
      const emailUrl = `mailto:orders@alifthreads.com?subject=${subject}&body=${body}`;
      
      window.open(emailUrl, '_blank');
      
      toast({
        title: "Email Order Created!",
        description: "Your email client has opened with the order details. Please send the email to complete your order.",
      });
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

        {/* Booking Method Selection */}
        <div className="space-y-3">
          <Label className="text-black font-medium">Choose Booking Method *</Label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setBookingMethod('whatsapp')}
              className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                bookingMethod === 'whatsapp' 
                  ? 'border-green-500 bg-green-50 text-green-700' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-center">
                <div className="font-medium">📱 WhatsApp</div>
                <div className="text-xs text-gray-600">Instant messaging</div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setBookingMethod('email')}
              className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                bookingMethod === 'email' 
                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-center">
                <div className="font-medium">📧 Email</div>
                <div className="text-xs text-gray-600">Professional order</div>
              </div>
            </button>
          </div>
        </div>

        {/* Bulk Order Notice */}
        {isBulkOrder && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-500 text-white">Bulk Order</Badge>
              <span className="text-green-700 font-semibold">20% Discount Applied!</span>
            </div>
            <p className="text-sm text-green-600 mt-1">
              You're ordering {totalQuantity} suits - Save ₨{discountAmount.toLocaleString()}!
            </p>
          </div>
        )}

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
              placeholder="Enter your email"
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

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <h3 className="font-medium text-gray-900">Order Summary</h3>
              <div className="text-sm text-gray-600">
                <p>Total Items: {totalQuantity} suits</p>
                <p>Subtotal: ₨{totalPrice.toLocaleString()}</p>
                {isBulkOrder && (
                  <>
                    <p className="text-green-600">Bulk Discount (20%): -₨{discountAmount.toLocaleString()}</p>
                    <p className="font-semibold text-gray-900">Final Total: ₨{finalTotal.toLocaleString()}</p>
                  </>
                )}
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
          >
            {bookingMethod === 'whatsapp' ? 'Send Order via WhatsApp' : 'Send Order via Email'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
