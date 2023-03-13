import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://mv-backend-production.up.railway.app/",
  baseURL: "http://localhost:8000",
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => error.response || "Something went wrong"
);

export default axiosInstance;
