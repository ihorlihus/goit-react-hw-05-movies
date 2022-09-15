import { useState } from 'react';
import { Outlet, useSearchParams, Link } from 'react-router-dom';
// import { ProductList } from "../components/ProductList";
import { SearchBox } from '../components/SearchBox';
import { getSearchMovies } from '../API/GetMoves';
import { MovieItem } from '../components/MovieItem';

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
    const moves = await getSearchMovies(moveName);
    setMovesState(moves);
  }

  return (
    <main>
      <SearchBox value={moveName} onChange={updateQueryString} />
      <button type={'submit'} onClick={() => fetchMoves(moveName)}>
        Search
      </button>
      <Outlet />
      <ul>
        {movesState.map(movie => (
          <Link to={`${movie.id}`} key={movie.id}>
            {MovieItem(movie)}
          </Link>
        ))}
      </ul>
      {/* <ProductList products={visibleMoves} /> */}
    </main>
  );
};
