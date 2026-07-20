import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { AddWishlistResponse, WishlistResponse } from "../types/wishlistTypes"
import type { AxiosError } from "axios"
import { addToWishlist, getWishlist, removeFromWishlist } from "../Services/Wishlit.service"
import { toast } from "react-toastify"

export const useWishlist = () => {
      const queryClient = useQueryClient();
  console.log("useWishlist");
    const wishlistQuery = useQuery<WishlistResponse, AxiosError>({
         queryKey: ["wishlist"],
         queryFn: getWishlist,

    })

    const wishlistIds =
    wishlistQuery.data?.data?.map((item) => item._id) ?? [];

  const isInWishlist = (productId: string) => wishlistIds.includes(productId);

 const addWishlistMutation = useMutation<
    AddWishlistResponse,
    AxiosError,
    string
  >({
    mutationFn: addToWishlist,

     onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Add To WishList Succesfully");
    },
    onError: () => {
      toast.error(" Some thing wrong ,try again ");
    },
  });
 const removeWishlistMutation = useMutation
    <AddWishlistResponse,
    AxiosError,
    string
  >({
    mutationFn: removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("   Removed Successsfully");
    },
    onError: () => {
      toast.error(" Something wrong try again    ");
    },
  });
const toggleWishlist = (productId: string) => {
    if (isInWishlist(productId)) {
      toast.info(" Already added to WishList      ");
      removeWishlistMutation.mutate(productId);
    } else {
      addWishlistMutation.mutate(productId);
    }
  };
    return {
    ...wishlistQuery,
 wishlistIds,
    isInWishlist,
    toggleWishlist,
    addToWishlist: addWishlistMutation.mutate,
    isAdding: addWishlistMutation.isPending,
    isRemoving:removeWishlistMutation.isPending
  };

}