// import { User, UserActions } from '../../types/User'
import { create } from 'domain'
import { Dispatch } from 'redux'
import * as api from '../../api/axios'
import { Blog, BlogFormData, BlogActions } from '../../types/Blog'

// Use command+k+1 to Fold

export const startGetBlogs = (userId: string) => {
  return async (dispatch: Dispatch<BlogActions>) => {
    try {
      const response = await api.getBlogs(userId)
      dispatch(getBlogs(response.data))
    } catch (err) {
      if (err.response) {
        const errorMessage = err.response.data.message
        dispatch(blogFailure(errorMessage))
      }

    }
  }
}

export const startCreateBlog = (blogData: BlogFormData, userId: string) => {
  return async (dispatch: Dispatch<BlogActions>) => {
    try {
      const response = await api.createBlog(blogData, userId)
      dispatch(createBlog(response.data))
    } catch (err) {
      if (err.response) {
        const errorMessage = err.response.data.message
        dispatch(blogFailure(errorMessage))
      }
    }
  }
}

export const startDeleteBlog = (id: string) => {
  return async (dispatch: Dispatch<BlogActions>) => {
    try {
      const response = await api.deleteBlog(id)
      dispatch(getBlogs(response.data))
    } catch (err) {
      if (err.response) {
        const errorMessage = err.response.data.message
        dispatch(blogFailure(errorMessage))
      }

    }
  }
}

export const getBlogs = (blogs: Blog[]): BlogActions => ({
  type: "GET_BLOGS",
  payload: blogs
})


export const createBlog = (blog: Blog): BlogActions => ({
  type: "CREATE_BLOG",
  payload: blog
})

export const blogFailure = (message: string): BlogActions => ({
  type: "BLOG_FAILURE",
  payload: message
})

export const clearBlogs = (): BlogActions => ({
  type: "CLEAR_BLOGS"
})