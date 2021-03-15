import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

const NewTweet = (props) =>{
  console.log(props)
  const { id } = props
  console.log(id)
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    inputText:'',
    toHome:false,
  });

  const handleChange = (e) => {
    const text = e.target.value
    setInputValue({...inputValue,inputText:text});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // todo: Add Tweet to Store
    dispatch(handleAddTweet(inputValue.inputText,id))
    setInputValue({...inputValue,inputText:'',toHome: id ? false : true});
  }

  if (inputValue.toHome === true) {
    return <Redirect to='/' />
  }
    const tweetLeft = 280 - inputValue.inputText.length

    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={inputValue.inputText}
            onChange={handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={inputValue === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  
}

export default NewTweet