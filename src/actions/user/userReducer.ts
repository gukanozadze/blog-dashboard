import { User, UserActions } from '../../types/User'

interface UserState {
  data: User,
  error: string
}

export const initialUserState: UserState = {
  data: {
    id: "",
    email: "",
    name: "",
    imageUrl: "",
  },
  error: ""
}

const userReducer = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case "USER_GOOGLE_LOGIN":
      return { ...state, data: { ...action.payload } }
    case "USER_FIREBASE_LOGIN":
      return { ...state, data: { ...action.payload } }
    case "USER_LOGOUT":
      return { ...state, ...initialUserState }
    case "USER_LOGIN_FAILURE":
      return { ...state, error: action.payload.message }
    default:
      return state
  }
}

export default userReducer