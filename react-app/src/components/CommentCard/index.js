import React from "react";
import "./CommentCard.css";
import CommentForm from '../auth/CommentForm'
const CommentCard = ({ comments }) => {
  console.log(comments.comment_body);
  return (
    <div className="page">
      <p>{comments.comment_body}</p>
      <CommentForm />
    </div>
  );
};

export default CommentCard;
