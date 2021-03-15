import React, { useEffect,Fragment } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {handleInitiateDate} from '../actions/shared'
import { Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'


const App =  () => {
  const dispatch = useDispatch()
    useEffect(() => {
     dispatch(handleInitiateDate())
    }, [dispatch]) // eslint-disable-line react-hooks/exhaustive-deps
  
    return (
      <>
        <LoadingBar />
        <div className='container'>
          <Nav />
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/tweet/:id' component={TweetPage} />
              <Route path='/new' component={NewTweet} />
            </div>
        </div>
      </>
    )
}

export default App