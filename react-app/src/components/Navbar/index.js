import React from 'react';
import LogoutButton from '../../components/auth/LogoutButton';
import './Navbar.css'

const NavBar = () => {
  return (
    <>
    <div className='navbar-container'>

      <button className='navbar-button' to="/" exact={true} activeClassName="active">
        Home
      </button>

      <button className='navbar-button' to="/login" exact={true} activeClassName="active">
        Login
      </button>

      <button className='navbar-button' to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </button>

      <button className='navbar-button' to="/users" exact={true} activeClassName="active">
        Users
      </button>

      <LogoutButton />
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
