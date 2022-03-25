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
              <strong>Axie Plushies</strong> will let your dream come true{" "}
              <br />
              by making your favorite axie into a real life cute plushie.
            </p>
            <button>SIGN UP NOW</button>
          </div>
        </div>
      </HeroSection>
      <CardSection>
        <div className="card-bg">Card</div>
      </CardSection>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap !important;
`;
const HeroSection = styled.section`
  flex: 1;
  & .hero-bg {
    padding: 5rem;
    top: 0;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("/images/hero_bg.jpg");
    color: #fff;
    & h1 {
      margin-top: 2rem;
      font-weight: bold;
      font-family: "Montserrat", sans-serif;
      font-size: 10rem;
    }
    & p {
      margin-top: 2rem;
      font-family: "Sora", sans-serif;
      font-size: 2rem;
    }
    & button {
      cursor: pointer;
      font-weight: bold;
      margin-top: 5rem;
      padding: 1.5rem 2rem;
      border: 8px solid #fff;
      border-radius: 5px;
      background-color: transparent;
      outline: none;
      text-decoration: none;
      color: #fff;
      font-size: 2rem;
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("https://cdn.axieinfinity.com/landing-page/_next/static/images/drawer-eb7c690a3e719c4e1fa89440f5504981.jpg");
  }
`;

export default Home;
