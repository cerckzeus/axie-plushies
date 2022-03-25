
import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const Header = () => {
  return (
    <StyledHeader>
      <MainNavigation />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
`;


export default Header;
