import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'

const TweetPage = props => {
    const { id } = props.match.params
    const tweets = useSelector(state => state.tweets)
    const uu = useSelector(state => state.tweets)
    const replies = useSelector(state => !tweets[id]
                    ? []
                    : tweets[id].replies.sort((a,b,) => tweets[b].timestamp - tweets[a].timestamp))
    console.log(replies)
    return (
      <div>
        <Tweet id={id} />
        <NewTweet id={id} />
        {replies.length !== 0 && <h3 className='center'>Replies</h3>}
        <ul>
          {replies.map((replyId) => (
            <li key={replyId}>
              <Tweet id={replyId}/>
            </li>
          ))}
        </ul>
      </div>
    )
  
}


export default TweetPage