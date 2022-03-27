import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <HeroSection>
        <div className="hero-bg">
          <div>
            <h1>
              MAKE YOUR <br />
              AXIE REAL
            </h1>
            <p>
              <strong>Axie Plushies</strong> will let your dream come true by
              making your favorite axie into a real life cute plushie.
            </p>
            <button>SIGN UP NOW</button>
          </div>
        </div>
      </HeroSection>
      <CardSection>
        <div className="card-bg">
          <div></div>
        </div>
      </CardSection>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap !important;
  flex:1;
  align-items: stretch;
  overflow-x: hidden;
`;
const HeroSection = styled.section`
  flex: 1;

justify-content: stretch;
  & .hero-bg {
    height: 100%;
    padding: 2rem 4rem;
    top: 0;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("/images/hero_bg.jpg");
    color: #fff;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      @media screen and (max-width: 480px) {
        text-align: center;
        display: flex;
        align-items: center;
      }
    }
    & h1 {
      font-weight: bold;
      font-family: "Montserrat", sans-serif;
      font-size: 10vw;
    }
    & p {
      max-width: 70%;
      margin-top: 2rem;
      font-family: "Sora", sans-serif;
      font-size: 3vw;
    }
    & button {
      cursor: pointer;
      font-weight: bold;
      margin-top: 2rem;
      padding: 1.5vw 2vw;
      border: 2px solid #fff;
      border-radius: 5px;
      background-color: transparent;
      outline: none;
      text-decoration: none;
      color: #fff;
      font-size: 2vw;
      transition: all 0.2s ease-in-out;
    }
    & button:hover {
      background-color: #fff;
      color: #000;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const CardSection = styled.section`
  flex: 1;

  & .card-bg {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("https://cdn.axieinfinity.com/landing-page/_next/static/images/drawer-eb7c690a3e719c4e1fa89440f5504981.jpg");
    
  }
`;

export default Home;
