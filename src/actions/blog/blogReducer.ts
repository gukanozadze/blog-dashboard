import { Blog, BlogActions } from '../../types/Blog'

interface BlogState {
  data: Blog[],
  error: string
}

export const initialBlogState: BlogState = {
  data: [],
  error: ""
}

const blogReducer = (state = initialBlogState, action: BlogActions): BlogState => {
  switch (action.type) {
    case "CREATE_BLOG":
      return { ...state, data: [...state.data, action.payload], error: "" }
    case "GET_BLOGS":
      return { ...state, data: action.payload }
    case "BLOG_FAILURE":
      return { ...state, error: action.payload }
    case "CLEAR_BLOGS":
      return initialBlogState
    default:
      return state
  }
}

export default blogReducer