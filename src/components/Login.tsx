import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ClipLoader from "react-spinners/ClipLoader"

import { useDispatch, useSelector } from "react-redux"
import {
  startLoginFirebaseUser,
  startRegisterFirebaseUser,
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
    dispatch(startRegisterFirebaseUser({ email, password }))
  }
  const handleFirebaseLogin = () => {
    dispatch(startLoginFirebaseUser({ email, password }))
  }

  return (
    <LoginBody>
      <ClipLoader size={110} color="#00BFFF" loading={loading} />
      {/* style prop - Just to dim this text a bit when loading */}
      <WelcomeText style={{ opacity: loading ? 0.3 : 1 }}>
        Enter With Firebase
      </WelcomeText>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form disabled={loading} onSubmit={(e) => e.preventDefault()}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        <Button onClick={handleFirebaseRegister}>Register</Button>
        <Button onClick={handleFirebaseLogin}>Login</Button>
      </Form>
      <div>
        <h4>Sign in with google to stay loged in </h4>
        <GoogleLogin
          clientId="193863253314-9q5fmvs0hblg76dt28k0efn5iu6b2qgi.apps.googleusercontent.com"
          buttonText="Enter with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          disabled={loading}
          isSignedIn={true} // This will save the user if we refresh the page
        />
      </div>
    </LoginBody>
  )
}
const Form = styled.form<{ disabled: boolean }>`
  text-align: center;
  margin-bottom: 50px;
  width: 100%;
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  cursor: ${(p) => p.disabled && "none"};
`
const Input = styled.input`
  display: block;
  margin-bottom: 30px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 15px 30px;
`

const Button = styled.button`
  margin: 0px 10px 30px;
  padding: 10px 20px;
  border-width: 0;
  outline: none;

  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;
  color: #ecf0f1;
  transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #27ae60;
  }
`

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
  font-size: 13px;
  padding: 10px 20px;
`

const WelcomeText = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
  font-weight: normal;
  font-size: 28px;
  padding-bottom: 10px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export default Login
