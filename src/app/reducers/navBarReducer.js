import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
    name: "navbar",
    initialState: {
        isOpen: false

    },
    reducers: {
        toggleNavBar: (state) => {
            state.isOpen = !state.isOpen
        },


    },
});

export const { toggleNavBar } = navBarSlice.actions;
export default navBarSlice.reducer;
