import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatTweet,formatDate } from '../utils/helpers'
import { TiArrowBackOutline } from 'react-icons/ti/index'
import { TiHeartOutline } from 'react-icons/ti/index'
import { TiHeartFullOutline } from 'react-icons/ti/index'
import { handleToggleTweet } from '../actions/tweets'

const Tweet = props => {
    const dispatch = useDispatch();
    const toParent = (e, id) => {
        e.preventDefault()
        // todo: Redirect to parent Tweet.
    }

    const handleLike = (e) => {
        e.preventDefault()

        dispatch(handleToggleTweet({
            id:tweet.id,
            authedUser:authedUser.id,
            hasLiked:hasLiked
        }))     
    }

    const { id } = props;
    const tweet = useSelector(state => state.tweets[id])
    const authedUser = useSelector(state => state.authedUser)
    const user = useSelector(state => state.users.users)
    const parentTweet = useSelector(state => tweet ? state.tweets[tweet.replyingTo] : null)
    const tweetObject = tweet ? formatTweet(tweet, user[tweet.author] ,authedUser,parentTweet) : null
    const {name,avatar,timestamp,text,hasLiked, likes, replies, parent} = tweetObject


    if (tweet === null) {
        return <p> This Tweet does not exist</p>
    }
    return (
        <div className='tweet'>
            <img
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div className='tweet-info'>
                <div>
                    <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                    {parent && (
                    <button className='replying-to' onClick={(e) => toParent(e, parent.id)}>
                        Replying to @{parent.author}
                    </button>
                    )}
                    <p>{text}</p>
                </div>
                <div className='tweet-icons'>
                    <TiArrowBackOutline className='tweet-icon' />
                    <span>{replies !== 0 && replies}</span>
                    <button className='heart-button' onClick={handleLike}>
                    {
                    likes > 0
                        ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                        : <TiHeartOutline className='tweet-icon'/>
                    }
                    </button>
                    <span>{likes !== 0 && likes}</span>
                </div>
            </div>
    
        </div>
    )
}

export default Tweet
