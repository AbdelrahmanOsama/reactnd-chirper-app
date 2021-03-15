import { getInitialData } from "../utils/api"
import { recieveTweets,fetchSuccessTweet,fetchErrorTweet } from './tweets'
import { recieveUsers } from './users'
import { setAuthedUser } from './autherUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis';

export const handleInitiateDate = () => {
    return (dispatch) => {
        dispatch(fetchSuccessTweet())
        dispatch(showLoading())
        return getInitialData()
        .then(({users,tweets}) => {
            dispatch(recieveUsers(users))
            dispatch(recieveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        }).catch((err) => {
            dispatch(fetchErrorTweet(err))
            dispatch(hideLoading())
        })
    }
}