import { createSlice } from "@reduxjs/toolkit";
import { cartActions, fetchCartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";

interface actionCreatorProps {
  email: string;
  password: string;
}

interface authSliceState {
  token: string | null;
  email: string | null;
  localId: string | null;
  isLoggedIn: boolean;
}

const initialState: authSliceState = {
  token: localStorage.getItem("token"),
  email: localStorage.getItem("email"),
  localId: localStorage.getItem("localId"),
  isLoggedIn: !!localStorage.getItem("token"),
};

const authSlice = createSlice({ 
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const loginData = action.payload;
      state.token = loginData.idToken;
      state.email = loginData.email;
      state.localId = loginData.localId;
      localStorage.setItem("token", loginData.idToken);
      localStorage.setItem("localId", loginData.localId);
      localStorage.setItem("email", loginData.email);
      state.isLoggedIn = !!localStorage.getItem("token");
      console.log(state);
    },
    logout(state) {
      state.token = null;
      state.localId = null;
      state.email = null;
      localStorage.removeItem("token");
      localStorage.removeItem("localId");
      localStorage.removeItem("email");
      state.isLoggedIn = false;
    },
  },
});

export const logOutAction = () => {
  return (dispatch: any) => {
    dispatch(
      cartActions.clearCart()
    );
  };
};

export const logInAction = (requestData: actionCreatorProps) => {
  return async (dispatch: any) => {
    dispatch(uiActions.setLoadingStatus("pending"));
    const fetchLoginData = async () => {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD26oEXEaOJk3VHW_AYhrPQCl-VzeWQ9gM",
        {
          method: "POST",
          body: JSON.stringify({
            email: requestData.email,
            password: requestData.password,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        //throw error
      }
      return data;
    };
    try {
      const loginData = await fetchLoginData();
      dispatch(authActions.login(loginData));
      dispatch(uiActions.setLoadingStatus("success"));
      dispatch(fetchCartAction());
    } catch (error) {}
  };
};

interface registerDataType {
  email: string;
  localId: string;
  cartItems: {};
}

export const registerAction = (requestData: actionCreatorProps) => {
  return async (dispatch: any) => {
    dispatch(uiActions.setLoadingStatus("pending"));
    const sendSignUpRequest = async () => {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD26oEXEaOJk3VHW_AYhrPQCl-VzeWQ9gM",
        {
          method: "POST",
          body: JSON.stringify({
            email: requestData.email,
            password: requestData.password,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        //throw error
      }
      return data;
    };
    const sendPostRequest = async (regData: registerDataType) => {
      const res = await fetch(
        "https://axie-plushies-default-rtdb.firebaseio.com/users/" +
          regData.localId +
          ".json",
        {
          method: "PUT",
          body: JSON.stringify({
            email: regData.email,
            id: regData.localId,
            cart: { totalPieces: 0, totalAmount: 0 },
          }),
          headers: { "Content-type": "application/json" },
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        //throw error
      }
      return data;
    };
    try {
      const registerData = await sendSignUpRequest();
      await sendPostRequest(registerData);
      dispatch(uiActions.setLoadingStatus("success"));
    } catch (error) {}
  };
};

export const authActions = authSlice.actions;

export default authSlice;
