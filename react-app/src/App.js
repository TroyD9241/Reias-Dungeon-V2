import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navbar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LoginModal from './components/LoginModal'
import SignupFormModal from './components/SignupModal'
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)



  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
  console.log(login);
  return (
    <BrowserRouter>
    <LoginModal  login={login} setLogin={setLogin}/>
    <SignupFormModal signup={signup} setSignup={setSignup}/>
      <NavBar  login={login} setLogin={setLogin} signup={signup} setSignup={setSignup}/>
      <Switch>
        <Route path="/login" exact={true}>
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignupForm />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
