import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uiSliceState {
    loadingStatus: string,
    modalIsShown: boolean
}

const initialState: uiSliceState = {
    loadingStatus: "",
    modalIsShown: false
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoadingStatus(state, action: PayloadAction<string>){
            state.loadingStatus = action.payload;
        },
        showModal(state){
            state.modalIsShown = true
        },
        closeModal(state){
            state.modalIsShown = false
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;