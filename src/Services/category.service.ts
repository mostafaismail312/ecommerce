import axios from "axios";

export const getCategories = async () => {
  const response = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/categories"
  );

  return response.data;
};