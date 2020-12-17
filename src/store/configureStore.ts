import userEvent from '@testing-library/user-event'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import userReducer from '../actions/user/userReducer'
import { AppActions } from '../types/AppActions'

export const rootReducer = combineReducers({
  user: userReducer,
})

export type AppState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;


export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
)