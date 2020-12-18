import React from 'react';
import styled from 'styled-components'
import ClipLoader from "react-spinners/ClipLoader";

import { useDispatch } from 'react-redux';
import { loginUser, loginUserFailure } from '../actions/user/userActions';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const loading = localStorage.getItem('googleId') ? true : false

  const handleLoginSuccess = (googleResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    dispatch(loginUser(googleResponse as GoogleLoginResponse))
  }

  const handleLoginFailure = (response: any) => {
    dispatch(loginUserFailure(response))
  }


  return (
    <LoginBody>
      <ClipLoader
        size={110}
        color="#00BFFF"
        loading={loading}
      />

      {/* style prop - Just to dim this text a bit when loading */}
      <WelcomeText style={{ opacity: loading ? 0.3 : 1 }}>
        Sign In
      </WelcomeText>

      <GoogleLogin
        clientId="193863253314-9q5fmvs0hblg76dt28k0efn5iu6b2qgi.apps.googleusercontent.com"
        buttonText="Enter with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
        disabled={loading}
        isSignedIn={true} // This will save the user if we refresh the page
      />
    </LoginBody>

  );
}

const LoginBody = styled.div`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: white;
  padding: 100px;
  padding-top: 50px;
  text-align: center;
  width: 500px;
  margin: 100px auto;
`
const WelcomeText = styled.h2`
  color: rgba(0,0,0,.8);
  margin-bottom: 50px;
  font-weight: normal;
  font-size: 35px;
  padding-bottom: 10px;
  text-align: left;
  border-bottom: 1px solid rgba(0,0,0,.2);
`

export default Login;
