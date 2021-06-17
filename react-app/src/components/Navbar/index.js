import React, { useState } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import src from "../../images/maxresdefault.jpg";
import ProfileDropDown from "../ProfileDropDown";

const NavBar = ({ login, setLogin, signup, setSignup }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  let profileHover = () => {
    if (document.querySelector(".dropdown-shell").classList.contains("hidden")) {
      document.querySelector(".dropdown-shell").classList.remove("hidden");
    } else {
      document.querySelector(".dropdown-shell").classList.add("hidden");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <>
      <ProfileDropDown
        profileHover={profileHover}
        login={login}
        setLogin={setLogin}
        signup={signup}
        setSignup={setSignup}
      />

      <div className="navbar-container">
        <div className="navbar-left">
          <button className="navbar-button" id="home-button">
            <Link to="/">
              <img className="logo-image" src={src} alt="logo"></img>
            </Link>
          </button>

          <form className="navbar-button" onSubmit={handleSearch}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

        <div className="navbar-right">
          <button
            className="navbar-button"
            id="logout-button"
            onMouseEnter={() => profileHover()}
          >
            <i className="fas fa-user-alt fa-2x"></i>
          </button>

          <button className="navbar-button" id="submit-button">
            <Link to="/posts/submit">SUBMIT</Link>
          </button>
        </div>
      </div>
      <div className="home-shell">
        <div className="left-side">
          <div className="banner">Home</div>
          <div className="banner-deviations">Deviations</div>
        </div>

        <div className="right-side">
          <span className="banner-posts">Posts</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
