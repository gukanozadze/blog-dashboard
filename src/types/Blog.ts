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
export const BLOG_FAILURE = "BLOG_FAILURE"


export interface CreateBlogAction {
  type: typeof CREATE_BLOG,
  payload: Blog
}

export interface BlogFailureAction {
  type: typeof BLOG_FAILURE,
  payload: string
}

export type BlogActions = CreateBlogAction | BlogFailureAction