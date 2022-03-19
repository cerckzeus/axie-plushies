import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/market">
          <MarketPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact-us">
          <ContactUsPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
