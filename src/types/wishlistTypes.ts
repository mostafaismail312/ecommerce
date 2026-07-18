import type { ProductItem } from './productType';


export interface WishlistResponse {
  status: string;
  count: number;
  data: ProductItem[];
}

export interface AddWishlistResponse {
  status: string;
  message: string;
  data: string[];
}