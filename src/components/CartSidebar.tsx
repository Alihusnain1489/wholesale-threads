
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { CartItem } from "@/types";
import { toast } from "@/hooks/use-toast";
import BookingDialog from "@/components/BookingDialog";

interface CartSidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  totalPrice: number;
  onOrderSuccess?: (orderedItems: CartItem[]) => void;
}

const CartSidebar = ({ 
  isOpen, 
  onOpenChange, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveFromCart, 
  totalPrice,
  onOrderSuccess
}: CartSidebarProps) => {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add items to your cart before checkout",
        variant: "destructive"
      });
      return;
    }
    setIsBookingDialogOpen(true);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-pink-600 font-semibold">₨ {item.price.toLocaleString()}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-700"
                            onClick={() => onRemoveFromCart(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-pink-600">
                    ₨ {totalPrice.toLocaleString()}
                  </span>
                </div>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg py-3"
                >
                  Proceed to Booking
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Free shipping on orders above ₨ 5,000
                </p>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <BookingDialog 
        isOpen={isBookingDialogOpen}
        onOpenChange={setIsBookingDialogOpen}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onOrderSuccess={onOrderSuccess}
      />
    </>
  );
};

export default CartSidebar;
