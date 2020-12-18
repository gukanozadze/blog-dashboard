import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import firebase from '../../api/firebase'
import { User, UserActions } from '../../types/User'
import { Dispatch } from 'redux'



export const loginFirebaseUser = ({ email, password }: { email: string, password: string }) => {
  return (dispatch: Dispatch<UserActions>) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user !== null) {
          const id = user.uid
          const email = user.email
          const name = user.displayName
          dispatch(loginUser({ id, email, name }))
        }
      })
      .catch((error) => {
        dispatch(loginUserFailure(error.message))
      });
  }
}

export const registerFirebaseUser = ({ email, password }: { email: string, password: string }) => {
  return (dispatch: Dispatch<UserActions>) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user) {
          const id = user.uid
          const email = user.email
          const name = user.displayName

          dispatch(loginUser({ id, email, name }))
        }
      })
      .catch((error) => {
        dispatch(loginUserFailure(error.message))
      });
  }
}


export const loginUser = (user: User): UserActions => {
  localStorage.setItem('userId', user.id);


  return {
    type: "USER_GOOGLE_LOGIN",
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

