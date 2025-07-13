
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  hoverImageUrl?: string;
  category: string;
  inStock: boolean;
  description: string;
  color?: string;
  fabric?: string;
  pieces?: string;
  stockLeft?: number;
  productCode?: string;
  pricePerMeter?: number;
  includes?: string[];
  isPrintingOrder?: boolean;
  minArticles?: number;
  suitsPerArticle?: number;
}

export interface CartItem extends Product {
  quantity: number;
  articles?: number; // For printing orders
}

export interface SaleRecord {
  id: string;
  date: string;
  amount: number;
  orderType: 'regular' | 'printing';
  customerName: string;
  items: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  status: 'pending' | 'paid' | 'cancelled';
}
