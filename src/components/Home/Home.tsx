import React, { useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { SearchBox } from '../SearchBox/SearchBox';
import { useFetchAllMoviesQuery } from '../../features/movies/UserService';
import { IPost } from '../../models/IPost'
import { Link } from 'react-router-dom';


export const Home = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const { data, error, isLoading } = useFetchAllMoviesQuery([])

    const searchMovies = data?.results.filter((movie: IPost) => {
        if (!searchTerm.length) return movie;
        if (!movie.title) return [];
        return movie.title.toLowerCase().includes(searchTerm)
    })

    return (
        <>
            <div className="sticky top-0 mb-12 flex  items-center justify-between">
                <SearchBox setSearchTerm={setSearchTerm} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-5 mb-10">
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error</h1>}
                {searchMovies && searchMovies.map((movie) => {
                    const { id, title, overview, poster_path } = movie
                    return <Link to={`${id}`}>
                        <MovieCard key={id} title={title} overview={overview} poster_path={"https://image.tmdb.org/t/p/original" + poster_path} />
                    </Link>
                })}
            </div>
        </>
    );
}