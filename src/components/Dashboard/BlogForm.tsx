import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { startCreateBlog } from "../../actions/blog/blogActions"
import { AppState } from "../../store/configureStore"

const BlogForm: React.FC = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const userId = useSelector<AppState, string>((state) => state.user.data.id)

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Clearing Form
    setTitle("")
    setDescription("")
    setImageUrl("")

    dispatch(
      startCreateBlog(
        {
          title,
          description,
          imageUrl,
        },
        userId
      )
    )
  }
  return (
    <div>
      <StyledP>Create blog</StyledP>
      <StyledForm onSubmit={handleOnSubmit}>
        <div>
          <StyledLabel>Title</StyledLabel>
          <StyledInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required={true}
            placeholder="title"
          />
        </div>
        <div>
          <StyledLabel>Description</StyledLabel>
          <StyledInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            required={true}
            placeholder="description"
          />
        </div>
        <div>
          <StyledLabel>Image Url (Optional)</StyledLabel>
          <StyledInput
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="url"
            placeholder="Image Url (Optional)"
          />
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
  margin-right: 150px;
`

export default BlogForm
