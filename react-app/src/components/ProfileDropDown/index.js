import React from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import "./ProfileDropDown.css";

const ProfileDropDown = ({ profileHover, login, setLogin, signup, setSignup }) => {
  const user = useSelector((state) => state.session.user);
  return (
    <>
      <div className="dropdown-shell hidden" onMouseLeave={() => profileHover()}>
        <div className="inner-shell">
          {user && (
            <>
              {" "}
              <button className="dropdown-button">{user.pen_name}</button>
              <LogoutButton />
              <button className="dropdown-button">Linkedin</button>
              <a
                className="dropdown-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TroyD9241/Reias-Dungeon-/wiki"
              >
                Github Repo
              </a>
            </>
          )}
          {!user && (
            <>
              <button className="dropdown-button" onClick={() => setSignup(true)}>
                Sign-Up
              </button>
              <button className="dropdown-button" onClick={() => setLogin(true)}>
                Login
              </button>
              <a
                className="dropdown-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/troyd41/"
              >
                Linkedin
              </a>

              <a
                className="dropdown-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TroyD9241/Reias-Dungeon-/wiki"
              >
                Github Repo
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileDropDown;
