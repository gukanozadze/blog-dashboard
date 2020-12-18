import React from "react"
import { useSelector } from "react-redux"
import { AppState } from "../store/configureStore"
import { User } from "../types/User"

const Settings: React.FC = () => {
  const user = useSelector<AppState, User>((state) => state.user)

  return (
    <div>
      Secret Settings
      <div>Family Name: {user.familyName}</div>
      <div>Given Name: {user.givenName}</div>
      <div>GoogleId: {user.googleId}</div>
    </div>
  )
}

export default Settings
