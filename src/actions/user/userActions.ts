import firebase from '../../api/firebase'
import { User, UserActions } from '../../types/User'
import { Dispatch } from 'redux'


export const startLoginFirebaseUser = ({ email, password }: { email: string, password: string }) => {
  return (dispatch: Dispatch<UserActions>) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user !== null) {
          // Login
          dispatch(loginFirebaseUser({ id: user.uid, email: user.email, name: user.displayName }))
        }
      })
      .catch((error) => {
        dispatch(loginUserFailure(error.message))
      });
  }
}

export const startRegisterFirebaseUser = ({ email, password }: { email: string, password: string }) => {
  return (dispatch: Dispatch<UserActions>) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user) {
          // Login
          dispatch(loginFirebaseUser({ id: user.uid, email: user.email, name: user.displayName }))
        }
      })
      .catch((error) => {
        dispatch(loginUserFailure(error.message))
      });
  }
}
export const loginFirebaseUser = (user: User): UserActions => ({
  type: "USER_FIREBASE_LOGIN",
  payload: user
})

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

