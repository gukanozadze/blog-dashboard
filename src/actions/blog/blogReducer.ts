import { Blog, BlogActions } from '../../types/Blog'

interface BlogState {
  data: Blog[],
  error: string
}

export const initialUserState: BlogState = {
  data: [],
  error: ""
}

const blogReducer = (state = initialUserState, action: BlogActions): BlogState => {
  switch (action.type) {
    case "CREATE_BLOG":
      return { ...state, data: [...state.data, action.payload], error: "" }
    case "BLOG_FAILURE":
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default blogReducer