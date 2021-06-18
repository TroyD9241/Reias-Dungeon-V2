import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignupForm = ({ setSignup }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [penname, setPenname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(penname, email, password));
      setSignup(false)
    }
  };

  const updatePenname = (e) => {
    setPenname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form className='login-form-shell' onSubmit={onSignUp}>
      <div className='login-form-input'>
        <label className='login-form-label'>Pen Name</label>
        <input
          type="text"
          name="penname"
          onChange={updatePenname}
          value={penname}
          className='login-form-text'
        ></input>
      </div>
      <div className='login-form-input'>
        <label className='login-form-label'>Email</label>
        <input
          type="input"
          name="email"
          onChange={updateEmail}
          value={email}
          className='login-form-text'
        ></input>
      </div>
      <div className='login-form-input'>
        <label className='login-form-label'>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          className='login-form-text'
        ></input>
      </div>
      <div className='login-form-input'>
        <label className='login-form-label'> Repeat Password</label>
        <input
          type="password"
          name="repeatpassword"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className='login-form-text'
        ></input>
      </div>
      <div className='login-button-shell'>
        <button className='login-form-button' type="submit">Join DeviantArt</button>
      </div>
    </form>

  );
};

export default SignupForm;
