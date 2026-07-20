import axios from "axios";

export const api = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(

  (config) => {
      console.log("Before Request");
  console.log("Token:", localStorage.getItem("token"));
    const token = localStorage.getItem("token");
      console.log("Token:", token);


    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.token = token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);