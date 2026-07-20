

import { api } from "../api/axios";
import type { AddWishlistResponse } from "../types/wishlistTypes";

console.log(api);

export const getWishlist = async () => {
  console.log("Service Called");

  const { data } = await api.get("/wishlist");

  return data;
};

export const addToWishlist = async (
  productId: string
): Promise<AddWishlistResponse> => {
  const { data } = await api.post<AddWishlistResponse>("/wishlist", {
    productId,
  });

  return data;
};


export const removeFromWishlist = async (
  productId: string
): Promise<AddWishlistResponse> => {
  const { data } = await api.delete<AddWishlistResponse>(`/wishlist/${productId}`);

  return data;
};