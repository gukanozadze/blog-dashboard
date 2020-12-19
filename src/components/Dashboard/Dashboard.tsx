import React from "react"
import styled from "styled-components"

import BlogForm from "./BlogForm"
import Blogs from "./Blogs"

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <BlogForm />
      <Blogs />
    </DashboardLayout>
  )
}

const DashboardLayout = styled.div`
  display: flex;
`
export default Dashboard
