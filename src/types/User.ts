import { GoogleLoginResponse } from "react-google-login"

export interface User {
  googleId: string
  email: string
  givenName: string
  familyName: string
  name: string
  imageUrl: string,
}

export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const USER_LOGOUT = "USER_LOGOUT"

export interface LoginUserAction {
  type: typeof USER_LOGIN,
  payload: GoogleLoginResponse["profileObj"]
}

export interface loginUserFailureAction {
  type: typeof USER_LOGIN_FAILURE
}

export interface LogoutUserAction {
  type: typeof USER_LOGOUT,
}


export type UserActions = LoginUserAction | LogoutUserAction | loginUserFailureAction

