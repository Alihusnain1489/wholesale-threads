
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
}

export interface CartItem extends Product {
  quantity: number;
}
