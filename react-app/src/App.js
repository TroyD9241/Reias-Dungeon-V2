import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignupFormModal from "./components/SignupModal";
import SearchModal from "./components/SearchModal";
import HomePage from "./components/HomePage";
import ProtectedRoute from './components/auth/ProtectedRoute'
import DeviationPage from "./components/DeviationPage";
import DeviationSubmitPage from "./components/DeviationSubmitPage";
import Search from "./components/Search";
import { authenticate } from "./store/session";
import UserPage from './components/UserPage'

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [search, setSearch] = useState(false)

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
      <NavBar login={login} setLogin={setLogin} signup={signup} setSignup={setSignup} setSearch={setSearch} />
      <LoginModal login={login} setLogin={setLogin} />
      <SignupFormModal signup={signup} setSignup={setSignup} />
      <SearchModal search={search} setSearch={setSearch} />
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <ProtectedRoute path="/posts/submit">
          <DeviationSubmitPage />
        </ProtectedRoute>
        <Route path="/posts/:postId">
          <DeviationPage />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route>
        <Route path="/users/:userId" exact={true}>
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
