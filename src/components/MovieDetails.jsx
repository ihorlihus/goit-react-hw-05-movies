import { getMoviesBuId } from 'API/GetMoves';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMoviesBuId(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="240"
        />
        <h3>{title}</h3>
        <h3>Rating {vote_average}</h3>
        <h3>Overwiev</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres.map(({ id, name }) => (
          <span key={id}> {name}</span>
        ))}
      </div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};
