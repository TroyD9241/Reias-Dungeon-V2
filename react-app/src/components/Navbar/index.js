import React from 'react';
import LogoutButton from '../../components/auth/LogoutButton';
import './Navbar.css'
import  src from '../../images/maxresdefault.jpg'
import ProfileDropDown from '../ProfileDropDown'


const NavBar = ({login, setLogin, signup, setSignup}) => {
  let profileHover = () => {
    if (document.querySelector(".dropdown-shell").classList.contains("hidden")) {
      document.querySelector(".dropdown-shell").classList.remove("hidden")
    } else {
      document.querySelector(".dropdown-shell").classList.add("hidden")
    }
  }
  return (
    <>
    <ProfileDropDown profileHover={profileHover} login={login} setLogin={setLogin} signup={signup} setSignup={setSignup}/>

    <div className='navbar-container'>
    <div className='navbar-left'>

      <button className='navbar-button' id='home-button' to="/" exact={true} activeClassName="active">

      <img className='logo-image' src={src} alt='logo'></img>
      </button>

      <button className='navbar-button' to="/login" exact={true} activeClassName="active">
        Search
      </button>
    </div>

      <div className='navbar-right'>
      <button className='navbar-button' id='logout-button' onMouseEnter={() => profileHover()}>
        <i class="fas fa-user-alt"></i>
      </button>

      <button className='navbar-button' id="submit-button" to="/login" exact={true} activeClassName="active">
        SUBMIT
      </button>
      </div>


    </div>
    <div className='home-shell'>
      <div className='left-side'>
        <div className='banner'>Home</div>
        <div className='banner-deviations'>Deviations</div>
      </div>

      <div className='right-side'>
      <span className='banner-posts'>Posts</span>
      </div>
    </div>

    </>
  );
}

export default NavBar;
