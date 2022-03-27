import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <StyledAbout>
      <div className="logo">
        <img src="/images/logo_min.png" alt="" />
      </div>
      <StyledContent>
        <p>
          <strong>Axie Plushies</strong> is a simple demonstration website made
          by Cerck Zeus Cailipan that uses Axie Infinity's official API's. Not
          just that! It is also dedicated on making your favorite axie into real
          life cute plushies.
        </p>
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
    </StyledAbout>
  );
};

export const StyledAbout = styled.div`
  display: flex;
  min-height: 100vh;
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
  padding: 2rem;
  margin: 2rem 20%;
  display: flex;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.9) !important;
  & p {
    color: #256ce1;
  }
`;

export default About;
