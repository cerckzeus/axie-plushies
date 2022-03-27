import styled from "styled-components";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div>
          <img src="/images/logo_min.png" alt=""/>
        </div>
        <div>
          <small>© 2022 AxiePlushies. All rights reserved.</small>
        </div>
        <div className="links">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <a href="https://fb.com/Cerckyy/">
            <FaFacebook />
          </a>
          <a href="https://github.com/cerckzeus">
            <FaGithub />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  color: #fff;
  background-color: #000;
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & img {
    width: 100px;
  }
  & div {
    margin-bottom: 0.5rem;
  }
  & .links {
    display: flex;
    align-items: center;
  }
  & .links a {
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.5rem;
    border-left: 2px solid #fff;
  }
  & .links a:first-child {
    border-left: none;
  }
  & .footer-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export default Footer;
