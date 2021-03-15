import { RECEIVE_TWEETS,TOGGLE_TWEET,ADD_TWEET,FETCH_SUCCESS,FETCH_ERROR } from '../constants/actionTypes'

const initialState = {
   
}

export const tweets = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
        }
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.payload,
        }
        case TOGGLE_TWEET:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    likes: state[action.payload.id].likes.includes(action.payload.authedUser) ?
                        state[action.payload.id].likes.filter((uid) => uid !== action.payload.authedUser)
                        : state[action.payload.id].likes.concat([action.payload.authedUser])
                }, 
        }
        case ADD_TWEET:
            console.log(action)
            const { tweet } = action
            let replyingTo = {};
            if (tweet.replyingTo !== null) {
                debugger
                replyingTo = {
                    [tweet.replyingTo]:{
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }
            return {
                ...state,
                [action.tweet.id]: action.tweet, 
                ...replyingTo
        }
        case FETCH_ERROR:
            return {
                ...state,
        }
       
        default:return state;
    }
}

