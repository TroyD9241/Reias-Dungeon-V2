import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import LoginModal from '../auth/LoginForm'

const DeviationForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [bodyContent, setBodyContent] = useState("");


  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateBodyContent = (e) => {
    setBodyContent(e.target.value);
  };

  if (!user) {
    return <LoginModal/>;
    // want to pop up modal here
  }
  //very different form.
  return (
    <form className='login-form-shell' onSubmit={onSignUp}>
      <div className='login-form-input'>
        <label className='login-form-label'>Upload your Deviation here</label>
        <input
          type="file"
          name="image"
          onChange={updateImage}
          value={image}
          className='login-form-text'
        ></input>
      </div>
      <div className='login-form-input'>
        <label className='login-form-label'>Title</label>
        <input
          type="text"
          name="title"
          onChange={updateTitle}
          value={title}
          className='login-form-text'
        ></input>
      </div>
      <div className='login-form-input'>
        <label className='login-form-label'>Description</label>
        <input
          type="text"
          name="description"
          onChange={updateBodyContent}
          value={bodyContent}
          className='login-form-text'
        ></input>
      </div>
      <div className='login-button-shell'>
        <button className='login-form-button' type="submit">Submit Deviation</button>
      </div>
    </form>

  );
};

export default DeviationForm;
