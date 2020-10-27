import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo-svg.svg";

import "./header.styles.css";

const Header = ({ currentUser }) => (
  <Navbar collapseOnSelect expand='lg' variant='light' className='navbar'>
    <Navbar.Brand>
      <Link to='/'>
        <Logo className='logo'></Logo>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav' className='navbar-collapse'>
      <Nav className='ml-auto'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>

        <Link className='option' to='/contact'>
          CONTACT
        </Link>

        {currentUser ? (
          <div
            className='sign-out option'
            variant='danger'
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
