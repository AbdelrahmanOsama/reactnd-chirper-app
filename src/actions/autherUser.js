import {SET_AUTHED_USER} from '../constants/actionTypes'

export const setAuthedUser = id => {
    return {
        type: SET_AUTHED_USER,
        payload:id
    }
}