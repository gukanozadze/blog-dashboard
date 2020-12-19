import React from "react"
import { useSelector } from "react-redux"
import { AppState } from "../store/configureStore"
import { User } from "../types/User"

const Settings: React.FC = () => {
  const user = useSelector<AppState, User>((state) => state.user.data)

  return (
    <div>
      Secret Settings
      <div>userID: {user.id}</div>
    </div>
  )
}

export default Settings
