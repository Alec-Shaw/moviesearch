import { useParams } from 'react-router-dom';
import { useFetchDetalisMovieQuery } from '../../features/movies/UserService'


const Detail = () => {

    const { id } = useParams();
    const { data, error, isLoading } = useFetchDetalisMovieQuery(id)

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            <div key={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-1 gap-1 mb-10 max-w-4xl bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:translate-y-4 duration-200">
                <img
                    src={"https://image.tmdb.org/t/p/original" + data?.poster_path}
                    alt={data?.original_title}
                    className="rounded-t-lg h-96 "
                />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.original_title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg">{data?.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail
