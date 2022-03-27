import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uiSliceState {
    loadingStatus: string,
    modalIsShown: boolean,
    sidebarIsShown: boolean
}

const initialState: uiSliceState = {
    loadingStatus: "",
    modalIsShown: false,
    sidebarIsShown: false
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
        },
        showSidebar(state){
            state.sidebarIsShown = true
        },
        closeSidebar(state){
            state.sidebarIsShown = false
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;