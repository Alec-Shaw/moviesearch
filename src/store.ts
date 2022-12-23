import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
//import movieReducer from "./features/movies/movieSlice";
import themeReducer from "./features/theme/themeSlice"
import { movieAPI } from "./features/movies/UserService"

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        [movieAPI.reducerPath]: movieAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieAPI.middleware),
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch)