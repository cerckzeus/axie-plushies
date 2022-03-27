import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10 !important;
  background: #000;
  height: 85px;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  
  overflow-x: hidden;
  padding: 0.5rem calc((100vw-1000px) / 2);
  & img {
    width: 100px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
  &:hover {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;

  & div {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
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

export const NavBtnCart = styled.button`
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

export const NavLogoutLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #15cdfc;
  }
`;
