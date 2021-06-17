import React from "react";
import "./CommentCard.css";
import CommentForm from '../auth/CommentForm'
const CommentCard = ({ comments }) => {
  return (
    <div className="page">
      <CommentForm />

      <div className='comment-shell'>

      </div>
    </div>
  );
};

export default CommentCard;
