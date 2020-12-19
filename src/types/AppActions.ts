import { UserActions } from './User'
import { BlogActions } from './Blog'


// This is to get all AppActions at once 
export type AppActions = UserActions | BlogActions