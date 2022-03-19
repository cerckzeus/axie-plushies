import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

interface actionCreatorProps {
    email: string,
    password: string
}

interface authSliceState {
    token: string | null,
    isLoggedIn: boolean
}

const initialState: authSliceState = {
    token: localStorage.getItem('token') ,
    isLoggedIn: !!localStorage.getItem('token'),
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const token = action.payload;
      state.token = token;
      localStorage.setItem("token", token);
      state.isLoggedIn = !!localStorage.getItem('token');
      console.log(state.token, state.isLoggedIn);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
  },
});

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
      dispatch(authActions.login(loginData.idToken));
      dispatch(uiActions.setLoadingStatus("success"));
    } catch (error) {}
  };
};

export const registerAction = (requestData: actionCreatorProps) => {

  return async (dispatch: any) => {
      
    dispatch(uiActions.setLoadingStatus("pending"));
    const sendRequest = async () => {
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
    try {
      const registerData = await sendRequest();
      dispatch(uiActions.setLoadingStatus("success"));
    } catch (error) {}
  };
};

export const authActions = authSlice.actions;

export default authSlice;
