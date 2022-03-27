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
import { selectAuth, selectCart } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions, logOutAction } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";

const MainNavigation: React.FC = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const { totalPieces } = useSelector(selectCart);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOutAction());
    dispatch(authActions.logout());
    history.push("/");
  };

  const showCartModal = () => {
    dispatch(uiActions.showModal());
  };

  const showSidebar = () => {
    dispatch(uiActions.showSidebar());
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="/images/logo_min.png" alt="logo" />
        </NavLink>
        <Bars onClick={showSidebar}/>
        <NavMenu>
          <NavLink to="/" exact>
            Home
          </NavLink>
          {isLoggedIn && <NavLink to="/market">Market</NavLink>}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </NavMenu>
        <NavBtn>
          {!isLoggedIn && <NavBtnLink to="/sign-in">Sign In</NavBtnLink>}
          {isLoggedIn && (
            <div>
              <NavBtnCart onClick={showCartModal}>
                <FaShoppingCart size="33" />
                <div>{totalPieces}</div>
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
