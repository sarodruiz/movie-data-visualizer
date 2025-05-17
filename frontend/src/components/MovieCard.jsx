function MovieCard({ movie }) {
    return (
        <div className="border border-gray-300 rounded-lg bg-gray-800 text-white p-4 shadow-lg min-h-[200px] flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm"><strong>Año:</strong> {movie.year}</p>
            <p className="text-sm"><strong>Género:</strong> {movie.genre}</p>
        </div>
    );
}

export default MovieCard;
