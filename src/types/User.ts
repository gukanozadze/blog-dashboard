export interface User {
  id: string,
  email: string | null
  imageUrl?: string,
}

export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const USER_LOGOUT = "USER_LOGOUT"
export const USER_LOGIN = "USER_LOGIN"

export interface LoginUserFailureAction {
  type: typeof USER_LOGIN_FAILURE,
  payload: { message: string }
}

export interface LoginUserAction {
  type: typeof USER_LOGIN,
  payload: User

}
export interface LogoutUserAction {
  type: typeof USER_LOGOUT,
}


export type UserActions = LoginUserAction | LogoutUserAction | LoginUserFailureAction

