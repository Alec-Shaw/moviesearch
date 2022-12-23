
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { DMovie, IMovie } from '../../models/IPost'

export const movieAPI = createApi({
    reducerPath: 'movieAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/movie' }),
    endpoints: (build) => ({
        fetchAllMovies: build.query<IMovie, []>({
            query: () => ({
                url: '/top_rated?api_key=a8a6fa2f944128e9712135bc3ca000b1',
            }),

        }),
        fetchDetalisMovie: build.query<DMovie, any>({
            query: (id) => ({
                url: `/${id}?api_key=a8a6fa2f944128e9712135bc3ca000b1`,
            })
        })
    })

})

export const { useFetchAllMoviesQuery, useFetchDetalisMovieQuery } = movieAPI