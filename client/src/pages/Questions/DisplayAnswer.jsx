import React from 'react'
import moment from "moment";
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAnswer } from "../../actions/question";


const DisplayAnswer = ({question, handleShare}) => {

  const User = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();
  const { id } = useParams();

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };

  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className="display-ans" key={ans._id}>
            <p style={{paddingBottom:"30px"}}>{ans.answerBody}</p>
            <div className="question-actions-user">
              <div style={{paddingBottom:"14px"}}>
                <button type='button' onClick={handleShare}>Share</button>
                { 
                    User?.result?._id === ans?.userId && ( 
                      <button type="button" onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                    ) 
                }
              </div>
            </div>
            <div style={{float:"right", marginTop:"-63.5px"}}>
              <p style={{marginBottom:"-1px"}}>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link to={`/Users/${ans.userId}`} className='user-link' style={{color:"#0086d8"}}>
                <Avatar backgroundColor="green" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                <div>
                  {ans.userAnswered}
                </div>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer