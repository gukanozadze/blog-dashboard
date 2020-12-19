import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { startCreateBlog } from "../../actions/blog/blogActions"

const BlogForm: React.FC = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const handleOnSubmit = () => {
    dispatch(
      startCreateBlog({
        title,
        description,
        imageUrl,
      })
    )
  }
  return (
    <div>
      <StyledP>Create blog</StyledP>
      <StyledForm onSubmit={handleOnSubmit}>
        <div>
          <StyledLabel>Title</StyledLabel>
          <StyledInput type="text" placeholder="title" />
        </div>
        <div>
          <StyledLabel>Description</StyledLabel>
          <StyledInput type="text" placeholder="description" />
        </div>
        <div>
          <StyledLabel>Image Url (Optional)</StyledLabel>
          <StyledInput type="text" placeholder="Image Url (Optional)" />
        </div>
        <StyledButton type="submit">Create</StyledButton>
      </StyledForm>
    </div>
  )
}

const StyledButton = styled.button`
  background: #00bfff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: #008fcc;
  }
`

const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  display: block;
  color: rgba(0, 0, 0, 2);
`
const StyledInput = styled.input`
  margin-bottom: 20px;
  padding: 13px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`

const StyledP = styled.p`
  font-size: 35px;
  font-weight: light;
  margin-bottom: 20px;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default BlogForm
