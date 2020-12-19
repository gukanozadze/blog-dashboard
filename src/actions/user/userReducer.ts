import { User, UserActions } from '../../types/User'

interface UserState {
  data: User,
  error: string
}

export const initialUserState: UserState = {
  data: {
    id: "",
    email: "",
    imageUrl: "",
  },
  error: ""
}

const userReducer = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case "USER_LOGIN":
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