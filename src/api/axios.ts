import axios from "axios"
import { BlogFormData } from "../types/Blog"

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
})

interface UserLoginData {
  email: string
  password: string
}


export const registerUser = (userLoginData: UserLoginData) => api.post(`/user/register`, { ...userLoginData })

export const logiUser = (userLoginData: UserLoginData) => api.post(`/user/login`, { ...userLoginData })
export const logiUserId = (id: string) => api.post(`/user/login-id`, { id })


export const createBlog = (blogData: BlogFormData) => api.post(`/blog`, blogData)
export const deleteBlog = (blogId: string) => api.delete(`/blog/${blogId}`)
export const updateBlog = (blogId: string, blogData: BlogFormData) => api.patch(`/blog/${blogId}`, blogData)
