import { getTrandMoves } from '../API/GetMoves';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [trandMovesState, setTrendMovesState] = useState([]);

  async function fetchTrendMoves() {
    const moves = await getTrandMoves();
    console.log(moves);
    setTrendMovesState(moves);
  }

  useEffect(() => {
    fetchTrendMoves();
  }, []);

  // fetchTrendMoves();

  return (
    <main>
      <h1>Welcome</h1>
      <ul>
        {trandMovesState.map(move => (
          <li key={move.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${move.poster_path}`}
              alt={move.title}
              width="240"
            />
            <p>{move.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};
