import axios from "axios";

export const api = axios.create({
  baseURL: "https://ecommerce-c66db-default-rtdb.firebaseio.com",
});