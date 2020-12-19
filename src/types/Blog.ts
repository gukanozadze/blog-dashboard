export interface Blog {
  id: string,
  title: string,
  description: string,
  imageUrl?: string,
}

export interface BlogFormData {
  title: string,
  description: string,
  imageUrl?: string
}

export const CREATE_BLOG = "CREATE_BLOG"
export const GET_BLOGS = "GET_BLOGS"
export const BLOG_FAILURE = "BLOG_FAILURE"
export const CLEAR_BLOGS = "CLEAR_BLOGS"


export interface CreateBlogAction {
  type: typeof CREATE_BLOG,
  payload: Blog
}
export interface GetBlogsAction {
  type: typeof GET_BLOGS,
  payload: Blog[]
}

export interface BlogFailureAction {
  type: typeof BLOG_FAILURE,
  payload: string
}

export interface BlogClearAction {
  type: typeof CLEAR_BLOGS,
}

export type BlogActions = CreateBlogAction | BlogFailureAction | GetBlogsAction | BlogClearAction