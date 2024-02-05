import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  return await axios.get(API_URL);
};

// export const createPost = async (post) => {
//   return await axios.post(API_URL, post);
// };

// export const updatePost = async (id, updatedPost) => {
//   return await axios.put(`${API_URL}/${id}`, updatedPost);
// };

// export const deletePost = async (id) => {
//   return await axios.delete(`${API_URL}/${id}`);
// };
