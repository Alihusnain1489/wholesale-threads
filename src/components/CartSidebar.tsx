import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CartItem } from "@/types";

interface CartSidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  totalPrice: number;
  onBookNow?: () => void;
}

const CartSidebar = ({ 
  isOpen, 
  onOpenChange, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveFromCart, 
  totalPrice,
  onBookNow 
}: CartSidebarProps) => {
  const hasItems = cartItems.length > 0;
  const bulkDiscountThreshold = 50;
  const discountRate = 0.2;
  const isEligibleForBulkDiscount = cartItems.reduce((sum, item) => sum + item.quantity, 0) >= bulkDiscountThreshold;
  const discountAmount = isEligibleForBulkDiscount ? totalPrice * discountRate : 0;
  const discountedTotalPrice = totalPrice - discountAmount;

  // Default cart settings
  const getStepSize = (item: CartItem) => {
    if (item.isPrintingOrder) {
      return item.suitsPerArticle || 100; // Step by articles worth of suits
    }
    return 50; // Regular orders step by 50
  };

  const getMinQuantity = (item: CartItem) => {
    if (item.isPrintingOrder) {
      return (item.minArticles || 5) * (item.suitsPerArticle || 100);
    }
    return 50;
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-left">Shopping Cart ({cartItems.length})</SheetTitle>
        </SheetHeader>
        
        {hasItems ? (
          <ScrollArea className="my-4 h-[calc(100vh-200px)]">
            <div className="divide-y divide-border-default">
              {cartItems.map((item) => {
                const stepSize = getStepSize(item);
                const minQty = getMinQuantity(item);
                
                return (
                  <div key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-muted">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">Rs.{item.price.toLocaleString()}{item.isPrintingOrder ? '/article' : ''}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                        {item.isPrintingOrder && (
                          <div className="mt-1 text-xs text-blue-600">
                            <p>Printing Order: {item.articles || 5} articles × {item.suitsPerArticle || 100} suits</p>
                            <p>Minimum: {item.minArticles || 5} articles</p>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex gap-4">
                          <Button 
                            variant="ghost"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, Math.max(minQty, item.quantity - stepSize))}
                            disabled={item.quantity <= minQty}
                          >
                            -{item.isPrintingOrder ? '1 article' : '50'}
                          </Button>
                          <div className="text-center">
                            <span className="text-gray-500">
                              {item.isPrintingOrder ? `${item.articles || 5} articles` : `Qty: ${item.quantity}`}
                            </span>
                            {item.isPrintingOrder && (
                              <div className="text-xs text-gray-400">({item.quantity} suits)</div>
                            )}
                          </div>
                          <Button 
                            variant="ghost"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + stepSize)}
                          >
                            +{item.isPrintingOrder ? '1 article' : '50'}
                          </Button>
                        </div>

                        <div className="flex">
                          <Button 
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="font-medium text-gray-500 hover:text-gray-800"
                            onClick={() => onRemoveFromCart(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-2xl font-semibold text-gray-900">Your cart is empty</h3>
            <p className="mt-4 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
          </div>
        )}
        
        {cartItems.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            {isEligibleForBulkDiscount && (
              <Badge variant="secondary">
                🎉 You qualify for a 20% discount on bulk orders!
              </Badge>
            )}
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-gray-900 hover:bg-gray-800"
                onClick={onBookNow}
              >
                Book Order via WhatsApp
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => onOpenChange(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
        
        {!hasItems && (
          <div className="text-center py-10">
            <h3 className="text-2xl font-semibold text-gray-900">Your cart is empty</h3>
            <p className="mt-4 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
