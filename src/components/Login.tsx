import React from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginUserFailure } from '../actions/user/userActions';
import { AppState } from '../store/configureStore';
import { User } from '../types/User';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { getParsedCommandLineOfConfigFile } from 'typescript';


const Login: React.FC = () => {

  const dispatch = useDispatch()

  const handleLoginSuccess = (googleResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    dispatch(loginUser(googleResponse as GoogleLoginResponse))
  }
  const handleLoginFailure = (response: any) => {
    dispatch(loginUserFailure(response))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <GoogleLogin
        clientId="193863253314-9q5fmvs0hblg76dt28k0efn5iu6b2qgi.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </LoginForm>
  );
}

const LoginForm = styled.form`
background-color: white;
border-radius: 5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

`


export default Login;
