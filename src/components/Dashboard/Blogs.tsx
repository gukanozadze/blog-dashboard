import React from "react"
import styled from "styled-components"

import { useSelector } from "react-redux"
import { AppState } from "../../store/configureStore"
import { Blog as BlogType } from "../../types/Blog"

const Blogs: React.FC = () => {
  const blogs = useSelector<AppState, BlogType[]>((state) => state.blog.data)

  return (
    <div>
      {blogs.map(({ id, title, description, imageUrl }) => (
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
        </BlogContainer>
      ))}
    </div>
  )
}

const Title = styled.div`
  margin: 10px 0;
  font-size: 25px;
`

const Description = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
`
const BlogContainer = styled.div`
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px 40px;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  }
`

export default Blogs
