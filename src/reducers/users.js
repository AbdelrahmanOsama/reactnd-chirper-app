import { RECEIVE_USERS,FETCH_SUCCESS,FETCH_ERROR } from '../constants/actionTypes'

const initialState = {
    loading: false,
    users:[],
    error:''
}

export const users = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: true
        }
        case RECEIVE_USERS: 
            return {
                ...state,
                users:action.payload
        }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                users:[],
                error:action.payload,
        }
        default:return state;
    }
}