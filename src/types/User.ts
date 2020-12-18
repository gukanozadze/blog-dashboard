import { GoogleLoginResponse } from "react-google-login"

export interface User {
  id: string,
  name: string | null
  email: string | null
  imageUrl?: string,
}

export const USER_GOOGLE_LOGIN = "USER_GOOGLE_LOGIN"
export const USER_FIREBASE_LOGIN = "USER_FIREBASE_LOGIN"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const USER_LOGOUT = "USER_LOGOUT"

export interface UserGoogleLoginAction {
  type: typeof USER_GOOGLE_LOGIN,
  payload: User
}

export interface UserFirebaseLoginAction {
  type: typeof USER_FIREBASE_LOGIN,
  payload: User
}
export interface loginUserFailureAction {
  type: typeof USER_LOGIN_FAILURE,
  payload: { message: string }
}

export interface LogoutUserAction {
  type: typeof USER_LOGOUT,
}


export type UserActions = UserGoogleLoginAction | LogoutUserAction | loginUserFailureAction | UserFirebaseLoginAction

