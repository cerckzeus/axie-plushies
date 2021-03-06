import { Fragment } from "react";
import styled from "styled-components";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { selectUi } from "../../store";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout: React.FC = (props) => {
  const { modalIsShown } = useSelector(selectUi);

  return (
    <Fragment>
      {modalIsShown && <Cart />}
      <Sidebar />
      <Header />
      <Page>
        <StyledMain>{props.children}</StyledMain>
        <Footer />
      </Page>
    </Fragment>
  );
};

const Page = styled.div`
  margin-top: 79px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledMain = styled.main`
display: flex;
flex: 1;
height: 100vh;
`;

export default Layout;
