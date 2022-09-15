import { getTrandMovies } from '../API/GetMoves';
import { useState, useEffect } from 'react';
import { MovieItem } from '../components/MovieItem';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trandMovesState, setTrendMovesState] = useState([]);

  async function fetchTrendMoves() {
    const moves = await getTrandMovies();
    setTrendMovesState(moves);
  }

  useEffect(() => {
    fetchTrendMoves();
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <ul>
        {trandMovesState.map(movie => (
          <Link to={`/moves/${movie.id}`} key={movie.id}>
            {MovieItem(movie)}
          </Link>
        ))}
      </ul>
    </main>
  );
};
