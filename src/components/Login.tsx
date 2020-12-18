import React, { useState } from "react"
import styled from "styled-components"
import ClipLoader from "react-spinners/ClipLoader"

import { useDispatch, useSelector } from "react-redux"
import {
  loginFirebaseUser,
  registerFirebaseUser,
  loginUser,
  loginUserFailure,
} from "../actions/user/userActions"
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login"
import { AppState } from "../store/configureStore"

const Login: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const error = useSelector<AppState, string>((state) => state.user.error)

  const dispatch = useDispatch()

  const loading = localStorage.getItem("userId") ? true : false

  const handleLoginSuccess = (
    googleResponse: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const googleLoginResponse = googleResponse as GoogleLoginResponse
    const profileObj = googleLoginResponse.profileObj

    const { googleId: id, name, email, imageUrl } = profileObj

    dispatch(loginUser({ id, name, email, imageUrl }))
  }

  const handleLoginFailure = (response: any) => {
    dispatch(loginUserFailure(response.error))
  }

  const handleFirebaseRegister = () => {
    dispatch(registerFirebaseUser({ email, password }))
  }
  const handleFirebaseLogin = () => {
    dispatch(loginFirebaseUser({ email, password }))
  }

  return (
    <LoginBody>
      <ClipLoader size={110} color="#00BFFF" loading={loading} />
      {/* style prop - Just to dim this text a bit when loading */}
      <WelcomeText style={{ opacity: loading ? 0.3 : 1 }}>Sign In</WelcomeText>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        <button onClick={handleFirebaseRegister}>Register</button>
        <button onClick={handleFirebaseLogin}>Login</button>
      </form>
      <GoogleLogin
        clientId="193863253314-9q5fmvs0hblg76dt28k0efn5iu6b2qgi.apps.googleusercontent.com"
        buttonText="Enter with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={"single_host_origin"}
        disabled={loading}
        isSignedIn={true} // This will save the user if we refresh the page
      />
    </LoginBody>
  )
}

const LoginBody = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: white;
  padding: 100px;
  padding-top: 50px;
  text-align: center;
  width: 500px;
  margin: 100px auto;
`
const ErrorMessage = styled.div`
  color: #f50057;
  border: 1px solid #f50057;
  border-radius: 5px;
  margin: 20px 0;
  padding: 10px 20px;
`

const WelcomeText = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
  font-weight: normal;
  font-size: 35px;
  padding-bottom: 10px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export default Login
