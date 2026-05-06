import { api } from "./productService";

export const loginUser = async (email, password) => {
    return await api.post("/api/auth/login", { email, password });
}

export const registerUser = async (name, email, password) => {
    return await api.post("/api/auth/register", { name, email, password });
}