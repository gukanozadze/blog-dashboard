import React from "react"
import { useSelector } from "react-redux"
import { AppState } from "../store/configureStore"
import { User } from "../types/User"

const Settings: React.FC = () => {
  const user = useSelector<AppState, User>((state) => state.user.data)

  return (
    <div>
      Secret Settings
      <div>Family Name: {user.name}</div>
      <div>GoogleId: {user.id}</div>
    </div>
  )
}

export default Settings
