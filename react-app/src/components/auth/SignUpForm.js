import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignupForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [penname, setPenname] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("")
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  // const [first_name, setFirstName]

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(penname, email, password));
    }
  };
  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const updateLastname = (e) => {
    setLastname(e.target.value);
  }

  const updatePenname = (e) => {
    setPenname(e.target.value);
  };

  const updateLocation = (e) => {
    setLocation(e.target.value);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateProfilePicture = (e) => {
    setProfilePicture(e.target.value);
  }

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
    <form onSubmit={onSignUp}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          onChange={updateFirstname}
          value={firstname}
        ></input>
        <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          onChange={updateLastname}
          value={lastname}
        ></input>
      </div>
      </div>
      <div>
        <label>Pen Name</label>
        <input
          type="text"
          name="penname"
          onChange={updatePenname}
          value={penname}
        ></input>
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={updateLocation}
          value={location}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="input"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Profile Picture URL</label>
        <input
          type="file"
          accepts='image/*'
          name="profilepicture"
          onChange={updateProfilePicture}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeatpassword"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
