import React from 'react'
import { useSelector } from 'react-redux'
import Tweet from './Tweet'

const Dashboard = () => {
    const tweetIds = useSelector(state => Object.keys(state.tweets).sort((a,b) => state.tweets[b].timestamp - state.tweets[a].timestamp));
    const tweets = useSelector(state => state);
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {
           (
                tweets && tweetIds &&
                tweetIds.map((id) => (
                  <li key={id}>
                   <Tweet id={id}/>
                  </li>
                ))
              )


          }
        </ul>
      </div>
    )
  
}


export default Dashboard