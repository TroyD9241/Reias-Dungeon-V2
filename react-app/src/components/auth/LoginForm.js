import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";

const LoginForm = () => {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const setDemoLogin = async (e) => {
    e.preventDefault()
    const email = "demo@aa.io"
    const password = 'password'
    const data = await dispatch(login(email, password))

    if (data.errors) {
      return null
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <form className='login-form-shell' onSubmit={onLogin}>
      <div className='login-errors'>
        {errors.map((error) => (
          <div className='login-individual-errors'>{error}</div>
        ))}
      </div>
      <div className='login-form-input'>
        <div className='login-form-label'>Email</div>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          className='login-form-text'
        />
      </div>
      <div className='login-form-input'>
        <div className='login-form-label'>Password</div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          className='login-form-text'
        />
      </div>
      <div className='login-button-shell'>
        <button className='login-form-button' type="submit">Log In</button>
      </div>

      <button className='demologin-form-button' onClick={setDemoLogin}>DemoLogin</button>
    </form>
  );
};

export default LoginForm;
