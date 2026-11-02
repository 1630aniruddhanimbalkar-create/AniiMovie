import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Poster";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title || "Movie poster"} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
      </div>
    </div>
  );
}

export default MovieCard;
