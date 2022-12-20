import { createSlice } from "@reduxjs/toolkit";

type ThemeState = boolean;

const themeFromLocalStorage = !!localStorage.getItem("movies-them")

const initialState: ThemeState = themeFromLocalStorage;

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state) {
                localStorage.removeItem("movies-them")
            } else {
                localStorage.setItem("movies-them", "_")
            }
            return (state = !state);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;