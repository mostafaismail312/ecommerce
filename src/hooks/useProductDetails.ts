import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../Services/getProductDetails";

export const useProductDetails = (id :string | undefined) => {
  return useQuery({
    queryKey: ["ProductDetails" , id],
    queryFn:() =>  getProductDetails(id!) ,
     enabled: !!id,
  });
};