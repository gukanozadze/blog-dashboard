import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { UserActions } from '../../types/User'

export const loginUser = (googleResponse: GoogleLoginResponse): UserActions => {
  localStorage.setItem('googleId', googleResponse.profileObj.googleId);

  return {
    type: "USER_LOGIN",
    payload: googleResponse.profileObj
  }
}

export const logoutUser = (): UserActions => {
  localStorage.clear();

  return {
    type: "USER_LOGOUT",
  }
}

export const loginUserFailure = (googleResponse: GoogleLoginResponseOffline): UserActions => ({
  type: "USER_LOGIN_FAILURE",
})

