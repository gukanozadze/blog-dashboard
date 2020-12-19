import { User, UserActions } from '../../types/User'
import { Dispatch } from 'redux'
import * as api from '../../api/axios'

export const startLoginUserWithId = (id: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const response = await api.logiUserId(id)
      dispatch(loginUser(response.data))
    } catch (err) {
      const errorMessage = err.response.data.message
      dispatch(loginUserFailure(errorMessage))
    }
  }
}

export const startLoginUser = ({ email, password }: { email: string, password: string }) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const response = await api.logiUser({ email, password })
      dispatch(loginUser(response.data))
    } catch (err) {
      const errorMessage = err.response.data.message
      dispatch(loginUserFailure(errorMessage))
    }
  }
}
export const startRegisterUser = ({ email, password }: { email: string, password: string }) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const response = await api.registerUser({ email, password })
      dispatch(loginUser(response.data))

    } catch (err) {
      const errorMessage = err.response.data.message
      dispatch(loginUserFailure(errorMessage))
    }
  }
}

export const loginUser = (user: User): UserActions => {
  localStorage.setItem('userId', user.id);

  return {
    type: "USER_LOGIN",
    payload: user
  }
}

export const logoutUser = (): UserActions => {
  localStorage.clear();
  return {
    type: "USER_LOGOUT",
  }
}

export const loginUserFailure = (message: string): UserActions => ({
  type: "USER_LOGIN_FAILURE",
  payload: { message }
})

