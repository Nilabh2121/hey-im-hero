import React, { useState, useEffect } from 'react'
import './AskQuestion.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from "../../actions/question";


import '../../App'
import Cards from '../../Cards';
//import { payamount } from '../../Cards';






const AskQuestion = () => {
  const [questionTitle, setQuestionTitle ] = useState('')
  const [questionBody, setQuestionBody ] = useState('')
  const [questionTags, setQuestionTags ] = useState('')
  const [post, setPost] = useState(0)
  const dispatch = useDispatch()
  const User = useSelector((state) => state.currentUserReducer)
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/Cards')
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
       
        if(questionTitle && questionBody && questionTags) {
          dispatch(
            askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User?.result?._id,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");

      
    } else alert("Login to ask question");
  };

  //  useEffect(() => {
  //    if (post === 0) {
  //      navigate('/Cards');
      
  //    }
  //  }, [post, navigate]);



  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n")
    }
  }

  return (
    <div className='ask-question'>
      <div className="ask-ques-conatiner" style={{padding:"0px 20px 20px 20px"}}>
        <h1 style={{paddingBottom:"15px"}}>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input type="text" id='ask-ques-title'  onChange={(e) => { setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector' />
            </label>
            <label htmlFor="ask-ques-title">
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea name="" id="ask-ques-body"  onChange={(e) => { setQuestionBody(e.target.value)}} cols="30" rows="10" style={{resize:"vertical"}} onKeyPress={handleEnter}></textarea>
            </label>
            <label htmlFor="ask-ques-title">
              <h4>Tags</h4>
              <p>Add upto 5 tags to describe what your question is about</p>
              <input type="text" id='ask-ques-tags'  onChange={(e) => { setQuestionTags(e.target.value.split(" "))}} placeholder='e.g. (xml typescript wordpress)' />
            </label>
          </div>
            <input type="submit" value='Review your question' className='review-btn' /> 
            <div style={{float:"right", paddingRight:"100px"}}><input type="button" value='Pay Now' onClick={handleClick} className='review-btn' /></div>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion