import axios from "axios";
export interface IGetProductsParams {
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string;
  keyword?: string;

  brand?: string;
  "price[gte]"?: number;
  "price[lte]"?: number;

  "category[in]"?: string | string[];
}
export const getProducts = async (params: IGetProductsParams = {}) => {
  const response = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/products/" , {
    params,
  });
  return response.data;
};