import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../Services/product";
import type { IGetProductsParams } from "../Services/product";

export const useProducts = (params: IGetProductsParams = {}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getProducts(params) ,
  });
};