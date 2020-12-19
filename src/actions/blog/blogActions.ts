// import { User, UserActions } from '../../types/User'
import { Dispatch } from 'redux'
import * as api from '../../api/axios'
import { Blog, BlogFormData, BlogActions } from '../../types/Blog'



export const startCreateBlog = (blogData: BlogFormData) => {
  return async (dispatch: Dispatch<BlogActions>) => {
    try {
      const response = await api.createBlog(blogData)
      dispatch(createBlog(response.data))
    } catch (err) {
      const errorMessage = err.response.data.message
      dispatch(blogFailure(errorMessage))
    }
  }
}

export const createBlog = (blog: Blog): BlogActions => ({
  type: "CREATE_BLOG",
  payload: blog
})

export const blogFailure = (message: string): BlogActions => ({
  type: "BLOG_FAILURE",
  payload: message
})