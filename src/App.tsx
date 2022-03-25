import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { selectAuth, selectCart } from "./store";
import { sendCartAction, fetchCartAction } from "./store/cart-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const { isLoggedIn, token } = useSelector(selectAuth);

  console.log("CART VALUES:");
  console.log(cart);

  useEffect(() => {
    dispatch(fetchCartAction());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartAction(cart));
    }
  }, [cart, dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {!isLoggedIn && !token && (
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
        )}

        {!isLoggedIn && !token && (
          <Route path="/sign-in">
            <SignInPage />
          </Route>
        )}
        {isLoggedIn && !!token && (
          <Route path="/market">
            <MarketPage />
          </Route>
        )}

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
