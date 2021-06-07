import React from "react";
import "./Comments.css";
import CommentForm from '../auth/CommentForm'

const Comments = () => {
  return (
    <div className="page">
      <h1>Comments Component</h1>
      <CommentForm />
    </div>
  );
};

export default Comments;
