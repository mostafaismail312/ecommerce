import axios from "axios";

export const getProductDetails = async (id: string) => {
  const response = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`
  );

  return response.data;
};