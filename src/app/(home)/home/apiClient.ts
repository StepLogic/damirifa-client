import apiClient from "@api/api";
export const fetchProducts = () => {
  return apiClient.get("/products");
};
export const getDeathNotice = () => {
  return apiClient.get("/general/posts/summary/2");
};
