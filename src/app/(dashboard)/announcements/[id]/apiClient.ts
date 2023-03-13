import apiClient from "@api/api";
export const fetchProducts = () => {
  return apiClient.get("/products");
};
export const getPost = () => {
  return apiClient.get("/posts/" + 1);
};
export const updatePost = (data: any) => {
  return apiClient.put("/posts/" + 1, { data });
};
