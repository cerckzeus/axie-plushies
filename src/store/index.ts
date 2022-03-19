import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {auth: authSlice.reducer, ui: uiSlice.reducer}
});

type RootState = ReturnType<typeof store.getState>;

export const selectAuth = (state: RootState) => state.auth;
export const selectUi = (state: RootState) => state.ui;



export default store;