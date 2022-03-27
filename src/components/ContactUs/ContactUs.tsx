import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <StyledContact>
      <div className="logo">
        <img src="/images/logo_min.png" alt="" />
      </div>
      <StyledContent>
        <h1>Contact Us</h1>
        <div>
          <a href="https://fb.com/Cerckyy/">
            <FaFacebook size={50} />
          </a>
          <a href="https://github.com/cerckzeus">
            <FaGithub size={50} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cerckzeus@gmail.com"
            target="_blank"
          >
            <FaEnvelope size={50} />
          </a>
        </div>
      </StyledContent>
      <div className="fighters">
        <img className="sidekick" src="/images/axie-infinity (1).gif" alt="" />
        <img src="/images/axie-infinity.gif" alt="" />
        <img
          className="sidekick2"
          src="/images/axie-axie-infinity.gif"
          alt=""
        />
      </div>
    </StyledContact>
  );
};

export const StyledContact = styled.div`
  min-height: 100vh;
  display: flex;
  background-image: url("https://cdn.axieinfinity.com/landing-page/_next/static/images/arena-e2c796e23cdd8c171dd56950e96b4f40.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  & .logo {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 10px;
    & img {
      width: 100%;
      flex: 1;
    }
  }
  & a {
    margin: 1rem;
    color: #ffb300;
  }
  & a:hover {
    color: #fb8c00;
  }
  & .fighters {
    flex: 1;
    margin-left: 20px;
    & img {
      width: 25vw;
    }
    & .sidekick {
      width: 10vw;
    }
    & .sidekick2 {
      width: 12.5vw;
      transform: scaleX(-1);
    }
  }
`;

export const StyledContent = styled(Paper)`
  padding: 2rem 4rem;
  margin: 2rem 20%;
  display: flex;
  flex-direction: column;
  background-color: rgba(240, 240, 240, 0.9) !important;
  & h1 {
    flex: 1;
    margin-bottom: 1rem;
    color: #256ce1;
  }
`;

export default ContactUs;
