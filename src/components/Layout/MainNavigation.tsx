import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnCart,
  NavLogoutLink,
} from "../styles/NavbarElements.styled";
import { FaShoppingCart } from "react-icons/fa";
import { selectAuth } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/auth-slice";

const MainNavigation: React.FC = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.push("/");
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>LOGO</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/market">Market</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </NavMenu>
        <NavBtn>
          {!isLoggedIn && !token && <NavBtnLink to="/sign-in">Sign In</NavBtnLink>}
          {isLoggedIn && !!token && (
            <div>
              <NavBtnCart>
                <FaShoppingCart />
              </NavBtnCart>
              <NavLogoutLink onClick={logoutHandler}>Log out</NavLogoutLink>
            </div>
          )}
          </NavBtn>
      </Nav>
    </>
  );
};

export default MainNavigation;
