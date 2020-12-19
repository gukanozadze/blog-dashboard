import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { AppState } from "../store/configureStore"
import { User } from "../types/User"
import Logout from "./Logout"

const Header: React.FC = () => {
  const user = useSelector<AppState, User>((state) => state.user.data)

  return (
    <HeaderWrapper>
      <UserInfo>
        <StyledImg
          src={
            user.imageUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }
          alt="avatar"
        />

        <div>
          <UserEmail>{user.email}</UserEmail>
        </div>
      </UserInfo>

      <Logout />
    </HeaderWrapper>
  )
}

const StyledImg = styled.img`
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
`
const UserInfo = styled.div`
  text-align: right;
  margin-right: 15px;
  display: flex;
  align-items: center;
`
const UserEmail = styled.div`
  font-size: 12px;
`

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 10px 30px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export default Header
