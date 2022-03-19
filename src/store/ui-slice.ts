import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uiSliceState {
    loadingStatus: string
}

const initialState: uiSliceState = {
    loadingStatus: ""
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoadingStatus(state, action: PayloadAction<string>){
            state.loadingStatus = action.payload;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;