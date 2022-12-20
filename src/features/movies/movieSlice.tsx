import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MovieState {
    loading: boolean
    error: null | string
    data: null | { results: any[] }
}

const initialState: MovieState = {
    loading: false,
    error: null,
    data: null
}

// Action

export const getMovies = createAsyncThunk("movies/getMovies", async (data, thunkApi) => {
    try {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=a8a6fa2f944128e9712135bc3ca000b1"
        );
        return await response.json();
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }
});


//slice
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMovies.fulfilled, (state, action: PayloadAction<{ results: any[] }>) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getMovies.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

// get move details

export const getMovieDetails = createAsyncThunk("movies/getMovieDetails", async (movieId, thunkApi) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=a8a6fa2f944128
            e9712135bc3ca000b1`
        )
        return await response.json();
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export default movieSlice.reducer;