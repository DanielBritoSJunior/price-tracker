import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
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