import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import LoginModal from "./components/LoginModal";
import SignupFormModal from "./components/SignupModal";
import HomePage from "./components/HomePage";
import DeviationPage from "./components/DeviationPage";
import DeviationSubmitPage from "./components/DeviationSubmitPage";
import Search from "./components/Search";
import { authenticate } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <NavBar login={login} setLogin={setLogin} signup={signup} setSignup={setSignup} />
      <LoginModal login={login} setLogin={setLogin} />
      <SignupFormModal signup={signup} setSignup={setSignup} />
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/posts/submit">
          <DeviationSubmitPage />
        </Route>
        <Route path="/posts/:postId">
          <DeviationPage />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
