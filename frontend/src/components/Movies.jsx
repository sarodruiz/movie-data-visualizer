import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = import.meta.env.VITE_API_URL;

function Movies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchMovies = async (search, page) => {
        try {
            const response = await fetch(`${API_URL}/movies?title=${search}&page=${page}`);
            if (!response.ok) {
                throw new Error("Error fetching movies");
            }
            const data = await response.json();
            setMovies(data.movies);
            setTotalPages(Math.ceil(data.total / data.offset));
        } catch (error) {
            console.error("Error fetching movies: ", error.message);
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    }

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchMovies(search, page);
        }, 500);
        return () => clearTimeout(delayDebounce);
    }, [search, page]);

    return (
        <div className="flex flex-col items-center p-6">
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Título"
                    value={search}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex gap-4 mb-4">
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Anterior
                </button>

                <span>Página {page} de {totalPages}</span>

                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    disabled={page >= totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Siguiente
                </button>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <li key={movie.imdb_title_id} className="list-none">
                        <MovieCard movie={movie} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Movies;
