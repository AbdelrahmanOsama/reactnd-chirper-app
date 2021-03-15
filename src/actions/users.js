import { RECEIVE_USERS,FETCH_SUCCESS,FETCH_ERROR } from '../constants/actionTypes'

export const recieveUsers = users => {
    return {
        type: RECEIVE_USERS,
        payload:users
    }
}


export const fetchSuccessUser = () => {
    return {
        type: FETCH_SUCCESS,
    }
}

export const fetchErrorUser = error => {
    return {
        type: FETCH_ERROR,
        payload:error
    }
}