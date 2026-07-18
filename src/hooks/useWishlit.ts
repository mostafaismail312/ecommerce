import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { AddWishlistResponse, WishlistResponse } from "../types/wishlistTypes"
import type { AxiosError } from "axios"
import { addToWishlist, getWishlist } from "../Services/Wishlit.service"

export const useWishlist = () => {
      const queryClient = useQueryClient();
  console.log("useWishlist");
    const wishlistQuery = useQuery<WishlistResponse, AxiosError>({
         queryKey: ["wishlist"],
         queryFn: getWishlist,

    })

 const addWishlistMutation = useMutation<
    AddWishlistResponse,
    AxiosError,
    string
  >({
    mutationFn: addToWishlist,

    onSuccess: () => {
    queryClient.invalidateQueries({
                queryKey: ["wishlist"],
      });
    },
  });


    return {
    ...wishlistQuery,

    addToWishlist: addWishlistMutation.mutate,
    isAdding: addWishlistMutation.isPending,
  };

}