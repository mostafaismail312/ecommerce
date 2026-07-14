import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/products"
  );

  return response.data;
};