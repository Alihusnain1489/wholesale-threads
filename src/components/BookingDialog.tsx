import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    phone: '',
    email: '',
    service: '',
    fabricType: '',
    quantity: 1,
    measurements: {
      shirtLength: '',
      chest: '',
      waist: '',
      hip: '',
      shoulder: '',
      sleeve: ''
    },
    specialInstructions: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('measurements.')) {
      const measurementKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        measurements: {
          ...prev.measurements,
          [measurementKey]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate cart items section for WhatsApp message
    const cartItemsText = cartItems.length > 0 
      ? `\n🛍️ Cart Items:\n${cartItems.map(item => 
          `• ${item.name} - Qty: ${item.quantity} - ₨${item.price.toLocaleString()}`
        ).join('\n')}\n💰 Total Amount: ₨${totalPrice.toLocaleString()}\n`
      : '';

    // Auto-send WhatsApp message
    const phoneNumber = "923261052244";
    const message = `🧵 STITCHING ORDER BOOKING

👤 Customer Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
${cartItemsText}
📦 Service Details:
Service: ${formData.service}
Fabric Type: ${formData.fabricType}
Quantity: ${formData.quantity} pieces

📏 Measurements:
Shirt Length: ${formData.measurements.shirtLength}"
Chest: ${formData.measurements.chest}"
Waist: ${formData.measurements.waist}"
Hip: ${formData.measurements.hip}"
Shoulder: ${formData.measurements.shoulder}"
Sleeve: ${formData.measurements.sleeve}"

📝 Special Instructions:
${formData.specialInstructions || 'None'}

Thank you for choosing Wholesale Threads! 🌟`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Show success message
    toast({
      title: "Order Sent Successfully!",
      description: "Your stitching order has been sent via WhatsApp. We'll contact you soon!",
    });
    
    // Reset form and close dialog
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      fabricType: '',
      quantity: 1,
      measurements: {
        shirtLength: '',
        chest: '',
        waist: '',
        hip: '',
        shoulder: '',
        sleeve: ''
      },
      specialInstructions: ''
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-black">Stitching Order Booking</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-black font-medium">Full Name</Label>
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
            <Label htmlFor="phone" className="text-black font-medium">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+92 300 0000000"
              className="w-full border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-black font-medium">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <Label htmlFor="service" className="text-black font-medium">Service Type</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
              <SelectTrigger className="w-full border-gray-300 focus:border-black focus:ring-black">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="basic">Basic Stitching</SelectItem>
                <SelectItem value="premium">Premium Stitching</SelectItem>
                <SelectItem value="designer">Designer Stitching</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="fabricType" className="text-black font-medium">Fabric Type</Label>
            <Input
              type="text"
              id="fabricType"
              name="fabricType"
              value={formData.fabricType}
              onChange={handleInputChange}
              placeholder="Enter fabric type"
              className="w-full border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <Label htmlFor="quantity" className="text-black font-medium">Quantity (Pieces)</Label>
            <Input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              min="1"
              className="w-full border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <Label className="text-black font-medium">Measurements (inches)</Label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="shirtLength" className="text-sm text-gray-600">Shirt Length</Label>
                <Input
                  type="number"
                  id="shirtLength"
                  name="measurements.shirtLength"
                  value={formData.measurements.shirtLength}
                  onChange={handleInputChange}
                  placeholder="e.g., 38"
                  className="w-full border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <Label htmlFor="chest" className="text-sm text-gray-600">Chest</Label>
                <Input
                  type="number"
                  id="chest"
                  name="measurements.chest"
                  value={formData.measurements.chest}
                  onChange={handleInputChange}
                  placeholder="e.g., 36"
                  className="w-full border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <Label htmlFor="waist" className="text-sm text-gray-600">Waist</Label>
                <Input
                  type="number"
                  id="waist"
                  name="measurements.waist"
                  value={formData.measurements.waist}
                  onChange={handleInputChange}
                  placeholder="e.g., 34"
                  className="w-full border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <Label htmlFor="hip" className="text-sm text-gray-600">Hip</Label>
                <Input
                  type="number"
                  id="hip"
                  name="measurements.hip"
                  value={formData.measurements.hip}
                  onChange={handleInputChange}
                  placeholder="e.g., 40"
                  className="w-full border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <Label htmlFor="shoulder" className="text-sm text-gray-600">Shoulder</Label>
                <Input
                  type="number"
                  id="shoulder"
                  name="measurements.shoulder"
                  value={formData.measurements.shoulder}
                  onChange={handleInputChange}
                  placeholder="e.g., 15"
                  className="w-full border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <Label htmlFor="sleeve" className="text-sm text-gray-600">Sleeve Length</Label>
                <Input
                  type="number"
                  id="sleeve"
                  name="measurements.sleeve"
                  value={formData.measurements.sleeve}
                  onChange={handleInputChange}
                  placeholder="e.g., 22"
                  className="w-full border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor="specialInstructions" className="text-black font-medium">Special Instructions</Label>
            <Textarea
              id="specialInstructions"
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleInputChange}
              placeholder="Enter any special instructions"
              className="w-full border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
          >
            Book Now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
