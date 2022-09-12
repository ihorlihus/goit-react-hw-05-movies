import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { ProductList } from "../components/ProductList";
import { SearchBox } from '../components/SearchBox';
import getMoves from './../API/GetMoves';

export const Moves = () => {
  const [movesState, setMovesState] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moveName = searchParams.get('name') ?? '';

  //   const visibleMoves = moves.filter(move =>
  //     move.name.toLowerCase().includes(moveName.toLowerCase())
  //   );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  async function fetchMoves(moveName) {
    if (moveName === '') return;
    const moves = await getMoves(moveName);
    console.log(moves);
    setMovesState(moves);
  }

  return (
    <main>
      <SearchBox value={moveName} onChange={updateQueryString} />
      <button type={'submit'} onClick={() => fetchMoves(moveName)}>
        Search
      </button>
      <ul>
        {movesState.map(move => (
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
      {/* <ProductList products={visibleMoves} /> */}
    </main>
  );
};
