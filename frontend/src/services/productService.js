import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const createProduct = (productData) => {
    return api.post("/products", productData)
}

export const getProducts = () => {
    return api.get("/products")
}

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
}