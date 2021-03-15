import {users} from './users'
import {tweets} from './tweets'
import {authedUser} from './autherUser'
import {combineReducers} from 'redux'
import { loadingBarReducer} from 'react-redux-loading'

const rootReducer = combineReducers({
    authedUser, 
    users, 
    tweets,
    loadingBar:loadingBarReducer
})

export default rootReducer
