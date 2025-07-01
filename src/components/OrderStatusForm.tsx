
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Search, CheckCircle, Clock, Truck, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface OrderStatusFormProps {
  onClose: () => void;
}

const OrderStatusForm = ({ onClose }: OrderStatusFormProps) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!orderNumber.trim()) {
      newErrors.orderNumber = 'Order number is required';
    } else if (orderNumber.trim().length < 8) {
      newErrors.orderNumber = 'Order number must be at least 8 characters';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock order data
    const mockOrderData = {
      orderNumber: orderNumber.toUpperCase(),
      status: 'in_transit',
      orderDate: '2024-12-28',
      estimatedDelivery: '2025-01-03',
      items: [
        { name: '3 Piece Printed Lawn Suit', quantity: 2, price: 4390 },
        { name: 'Premium Chiffon Dupatta Set', quantity: 1, price: 1800 }
      ],
      total: 10580,
      tracking: 'TCS123456789',
      timeline: [
        { status: 'ordered', date: '2024-12-28', completed: true },
        { status: 'confirmed', date: '2024-12-29', completed: true },
        { status: 'processing', date: '2024-12-30', completed: true },
        { status: 'shipped', date: '2024-12-31', completed: true },
        { status: 'in_transit', date: '2025-01-01', completed: true },
        { status: 'delivered', date: '2025-01-03', completed: false }
      ]
    };
    
    setOrderData(mockOrderData);
    setIsLoading(false);
    
    toast({
      title: "Order Found",
      description: `Order ${orderNumber.toUpperCase()} details retrieved successfully`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ordered':
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'shipped':
      case 'in_transit':
        return <Truck className="h-4 w-4 text-orange-500" />;
      case 'delivered':
        return <Package className="h-4 w-4 text-green-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'ordered': { label: 'Order Placed', className: 'bg-blue-100 text-blue-800' },
      'confirmed': { label: 'Confirmed', className: 'bg-green-100 text-green-800' },
      'processing': { label: 'Processing', className: 'bg-yellow-100 text-yellow-800' },
      'shipped': { label: 'Shipped', className: 'bg-purple-100 text-purple-800' },
      'in_transit': { label: 'In Transit', className: 'bg-orange-100 text-orange-800' },
      'delivered': { label: 'Delivered', className: 'bg-green-100 text-green-800' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || { label: status, className: 'bg-gray-100 text-gray-800' };
    
    return (
      <Badge className={config.className}>
        {config.label}
      </Badge>
    );
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'orderNumber') {
      setOrderNumber(value);
    } else {
      setEmail(value);
    }
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (orderData) {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-slate-50">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <Package className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Order Details
          </CardTitle>
          <p className="text-slate-600 mt-2">Order #{orderData.orderNumber}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Order Status */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800">Current Status</h3>
              {getStatusBadge(orderData.status)}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-slate-600">Order Date</p>
                <p className="font-semibold text-slate-800">{orderData.orderDate}</p>
              </div>
              <div>
                <p className="text-slate-600">Estimated Delivery</p>
                <p className="font-semibold text-slate-800">{orderData.estimatedDelivery}</p>
              </div>
              <div>
                <p className="text-slate-600">Tracking Number</p>
                <p className="font-semibold text-slate-800">{orderData.tracking}</p>
              </div>
              <div>
                <p className="text-slate-600">Total Amount</p>
                <p className="font-semibold text-slate-800">Rs. {orderData.total.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Order Timeline */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Order Timeline</h3>
            <div className="space-y-4">
              {orderData.timeline.map((item: any, index: number) => (
                <div key={index} className={`flex items-center space-x-4 ${item.completed ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${item.completed ? 'bg-emerald-100' : 'bg-gray-100'}`}>
                    {getStatusIcon(item.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className={`font-medium ${item.completed ? 'text-slate-800' : 'text-slate-500'}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('_', ' ')}
                      </p>
                      <p className={`text-sm ${item.completed ? 'text-slate-600' : 'text-slate-400'}`}>
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Order Items</h3>
            <div className="space-y-3">
              {orderData.items.map((item: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-800">{item.name}</p>
                    <p className="text-sm text-slate-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-slate-800">Rs. {item.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <Button 
              onClick={() => setOrderData(null)}
              variant="outline"
              className="flex-1 border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              Search Another Order
            </Button>
            <Button 
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-slate-50">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Search className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          Check Order Status
        </CardTitle>
        <p className="text-slate-600 mt-2">
          Enter your order details to track your shipment
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orderNumber" className="text-slate-700 font-medium">Order Number *</Label>
            <div className="relative">
              <Package className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                id="orderNumber"
                type="text"
                placeholder="WT-2025-001234"
                value={orderNumber}
                onChange={(e) => handleInputChange('orderNumber', e.target.value)}
                className={`pl-10 border-slate-200 focus:border-emerald-400 focus:ring-emerald-400 ${errors.orderNumber ? 'border-red-400' : ''}`}
              />
            </div>
            {errors.orderNumber && <p className="text-red-500 text-sm">{errors.orderNumber}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`pl-10 border-slate-200 focus:border-emerald-400 focus:ring-emerald-400 ${errors.email ? 'border-red-400' : ''}`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          
          <div className="flex gap-4 pt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1 border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'Searching...' : 'Check Status'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default OrderStatusForm;
