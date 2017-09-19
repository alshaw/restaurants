import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../fakeAuth';

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

const additionalLinks = (history) => {
  if (isAuthenticated()) {
    return (
      <span>
        <NavLink activeStyle={styles.active} to="/dashboard">Dashboard</NavLink>
        {' '}
        <a href="#" onClick={() => {
          logout()
          history.push("/login")
        }}>
          Logout
        </a>
      </span>
    )
  } else {
    return (
      <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
    )
  }
}

const Navbar = ({ history }) => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
     {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
     {' '}
    {additionalLinks(history)}
  </nav>
)

export default withRouter(Navbar);