import { getTrandMovies } from '../API/GetMoves';
import { useState, useEffect } from 'react';
import { MovieItem } from '../components/MovieItem';
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const [trandMovesState, setTrendMovesState] = useState([]);
  const location = useLocation();

  async function fetchTrendMoves() {
    const moves = await getTrandMovies();
    setTrendMovesState(moves);
  }

  useEffect(() => {
    fetchTrendMoves();
  }, []);

  return (
    <main>
      <ul>
        {trandMovesState.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
            display="grid"
          >
            {MovieItem(movie)}
          </Link>
        ))}
      </ul>
    </main>
  );
};
