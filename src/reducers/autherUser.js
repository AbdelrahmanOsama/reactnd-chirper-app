import {SET_AUTHED_USER} from '../constants/actionTypes'

const initialState = ''

export const authedUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHED_USER: return {
            id:action.payload
        }
        default:return state;
    }
}

