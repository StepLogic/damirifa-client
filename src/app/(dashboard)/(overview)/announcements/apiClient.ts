import apiClient from '@api/api';
export const fetchProducts = () => {
  return apiClient.get('/products');
};
export const getPosts=()=>{
  return apiClient.get("/users/posts/"+1)
}