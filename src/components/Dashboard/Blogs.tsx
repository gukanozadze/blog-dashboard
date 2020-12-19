import React, { useEffect } from "react"
import styled from "styled-components"

import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../store/configureStore"
import { Blog as BlogType } from "../../types/Blog"
import { startGetBlogs, startDeleteBlog } from "../../actions/blog/blogActions"

const Blogs: React.FC = () => {
  const blogs = useSelector<AppState, BlogType[]>((state) => state.blog.data)
  const userId = useSelector<AppState, string>((state) => state.user.data.id)
  const dispatch = useDispatch()

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(startGetBlogs(userId))
    }
  }, [""])

  const handleDeleteClick = (id: string) => {
    dispatch(startDeleteBlog(id))
  }
  return (
    <BlogsLayout>
      {blogs.length !== 0 &&
        blogs.map(({ id, title, description, imageUrl }) => (
          <BlogContainer key={id}>
            <img
              width="200"
              alt={`blog ${title}`}
              src={
                imageUrl ||
                "https://www.start-business-online.com/images/article_manager_uploads/blog.jpg"
              }
            />
            <Title>{title}</Title>
            <Description>{description}</Description>
            <StyledSvg
              onClick={() => handleDeleteClick(id)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </StyledSvg>
          </BlogContainer>
        ))}
    </BlogsLayout>
  )
}

const StyledSvg = styled.svg`
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`
const BlogsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Title = styled.div`
  margin: 10px 0;
  font-size: 25px;
`

const Description = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
`
const BlogContainer = styled.div`
  position: relative;
  margin-right: 40px;
  margin-bottom: 30px;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px 40px;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  }
`

export default Blogs
