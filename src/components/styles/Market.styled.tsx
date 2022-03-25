import styled from "styled-components";

export const MarketWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background-image: url("https://cdn.axieinfinity.com/landing-page/_next/static/images/arena-e2c796e23cdd8c171dd56950e96b4f40.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const StyledMarketContainer = styled.div`
  flex: 1;
  display: flex;
  margin: 0 auto;
  background-color: rgba(240, 240, 240, 0.85);
  min-width: 70%;
  padding: 10px;

  align-self: stretch;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .loading-spinner {
    margin: 0 auto;
  }

  & .filter {
    flex: 1;
    width: 100%;
  }

  & .AxieResultsWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    flex: 1;
    @media screen and (max-width: 599px) {
      flex-wrap: wrap;
    }
  }

  & .pagination-container {
  }

  & .pagination nav {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    max-width: 70%;
  }
`;
