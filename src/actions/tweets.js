import { saveLikeToggle,saveTweet } from '../utils/api'
import { RECEIVE_TWEETS,TOGGLE_TWEET,ADD_TWEET,FETCH_SUCCESS,FETCH_ERROR } from '../constants/actionTypes'
import { showLoading, hideLoading } from 'react-redux-loading'


export const recieveTweets = tweets => {
    return {
        type: RECEIVE_TWEETS,
        payload:tweets
    }
}

const toggleTweets = ({id, authedUser, hasLiked}) => {
    return {
        type:TOGGLE_TWEET,
        payload:{
            id, authedUser, hasLiked
        }
        
    }
}

const addTweet = (tweet) => {
    return {
        type:ADD_TWEET,
        tweet
        
    }
}

export const fetchSuccessTweet = () => {
    return {
        type: FETCH_SUCCESS,
    }
}

export const fetchErrorTweet = error => {
    return {
        type: FETCH_ERROR,
        payload:error
    }
}

export const handleToggleTweet = (info) => {
    return (dispatch) => {
        dispatch(toggleTweets(info))
         return saveLikeToggle(info)
        .catch((e) => {
            dispatch(toggleTweets(info))
        })
    }
}

export const handleAddTweet = (text, replyingTo) => {
    return async (dispatch,getState) => {
        const { authedUser } =  getState();

        dispatch(showLoading())
        try {
            const tweet = await saveTweet({
                text,
                author: authedUser.id,
                replyingTo
            })
            dispatch(addTweet(tweet))
            dispatch(hideLoading())
        } catch (error) {
            console.log(error)
        }
        
      }
    }