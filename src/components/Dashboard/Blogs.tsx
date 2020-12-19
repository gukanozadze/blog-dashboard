import React from "react"

const Blog: React.FC = () => {
  return (
    <div>
      <p>Create blog</p>
      <form>
        <label>Title</label>
        <input type="text" placeholder="title" />
        <label>Description</label>
        <input type="text" placeholder="description" />
      </form>
    </div>
  )
}

export default Blog
