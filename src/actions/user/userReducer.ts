import { User, UserActions } from '../../types/User'

export const initialUserState: User = {
  googleId: "",
  email: "",
  givenName: "",
  familyName: "",
  name: "",
  imageUrl: ""
}

const userReducer = (state = initialUserState, action: UserActions): User => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, ...action.payload }
    case "USER_LOGOUT":
      return { ...state, ...initialUserState }
    default:
      return state
  }
}

export default userReducer