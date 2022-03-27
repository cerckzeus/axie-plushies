import styled from "styled-components";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import { selectAuth, selectCart, selectUi } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions, logOutAction } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";

const Sidebar = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const { totalPieces } = useSelector(selectCart);
  const { sidebarIsShown } = useSelector(selectUi);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOutAction());
    dispatch(authActions.logout());
    dispatch(uiActions.closeSidebar());
    history.push("/");
  };

  const showCartModal = () => {
    dispatch(uiActions.closeSidebar());
    dispatch(uiActions.showModal());
  };

  const closeSidebar = () => {
    dispatch(uiActions.closeSidebar());
  };
  return (
    <SidebarContainer sidebarIsShown={sidebarIsShown}>
      <Icon>
        <CloseIcon onClick={closeSidebar} />
      </Icon>
      <SidebarWrapper>
        <NavLink to="/" onClick={closeSidebar}>
          <img src="/images/logo_min.png" alt="logo" />
        </NavLink>
        <SidebarMenu>
          <NavLink to="/" exact onClick={closeSidebar}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/market" onClick={closeSidebar}>
              Market
            </NavLink>
          )}
          <NavLink to="/about" onClick={closeSidebar}>
            About
          </NavLink>
          <NavLink to="/contact-us" onClick={closeSidebar}>
            Contact Us
          </NavLink>
        </SidebarMenu>
        <SidebarBtn>
          {!isLoggedIn && (
            <SidebarBtnLink to="/sign-in" onClick={closeSidebar}>Sign In</SidebarBtnLink>
          )}
          {isLoggedIn && (
            <div className="actions">
              <SidebarBtnCart onClick={showCartModal}>
                <FaShoppingCart size="33" />
                <div>{totalPieces}</div>
              </SidebarBtnCart>
              <SidebarLogoutLink onClick={logoutHandler}>
                Log out
              </SidebarLogoutLink>
            </div>
          )}
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export const SidebarContainer = styled.div<{ sidebarIsShown: boolean }>`
  position: fixed;
  z-index: 60;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  background: #0d0d0d;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ sidebarIsShown }) => (sidebarIsShown ? "100%" : "0")};
  top: ${({ sidebarIsShown }) => (sidebarIsShown ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;
export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
`;
export const SidebarBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .actions {
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
  flex: 1;
  & img {
    max-width: 50%;
    flex: 1;
  }
  &.active {
    color: #15cdfc;
  }
  &:hover {
    color: #15cdfc;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const SidebarBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const SidebarBtnCart = styled.button`
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  & svg {
    position: relative;
    top: 0.1rem;
    left: 0.5rem;
  }
  & div {
    position: relative;
    top: -0.8rem;
    left: -0.1rem;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    color: #010606;
    background-color: #fff;
    border-radius: 30px;
    border: 2px solid #010606;
    padding: 0.15rem 0.6rem;
    border-radius: 30px;
  }

  &:hover {
    & div {
      background-color: #256ce1;
    }
    transition: all 0.2s ease-in-out;
    color: #256ce1;
  }
`;
export const SidebarLogoutLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: #15cdfc;
  }
`;

export default Sidebar;
