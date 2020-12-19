import React from "react"
import { useDispatch } from "react-redux"
import { logoutUser } from "../actions/user/userActions"
import { clearBlogs } from "../actions/blog/blogActions"
import { GoogleLogout } from "react-google-login"

const Logout: React.FC = () => {
  const dispatch = useDispatch()

  const handleLogoutSuccess = () => {
    dispatch(logoutUser())
    dispatch(clearBlogs())
  }

  return (
    <GoogleLogout
      clientId="193863253314-9q5fmvs0hblg76dt28k0efn5iu6b2qgi.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={handleLogoutSuccess}
    />
  )
}

export default Logout
