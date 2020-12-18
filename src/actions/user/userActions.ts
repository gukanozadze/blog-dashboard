import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { UserActions } from '../../types/User'

export const loginUser = (googleResponse: GoogleLoginResponse): UserActions => ({
  type: "USER_LOGIN",
  payload: googleResponse.profileObj
})

export const loginUserFailure = (googleResponse: GoogleLoginResponseOffline): UserActions => ({
  type: "USER_LOGIN_FAILURE",
})

export const logoutUser = (): UserActions => ({
  type: "USER_LOGOUT",
})