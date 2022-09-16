import { useState, useEffect } from 'react';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
// import { ProductList } from "../components/ProductList";
import { SearchBox } from '../components/SearchBox';
import { getSearchMovies } from '../API/GetMoves';
import { MovieItem } from '../components/MovieItem';

export const Movies = () => {
  const [movesState, setMovesState] = useState([]);
  const [searchMovieQwerry, setSearchMovieQwerry] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const moveName = searchParams.get('name') ?? '';
  const location = useLocation();

  useEffect(() => {
    fetchMoves(searchMovieQwerry);
  }, [searchMovieQwerry]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  async function fetchMoves(moveName) {
    if (searchMovieQwerry === '') return;
    const moves = await getSearchMovies(searchMovieQwerry);
    setMovesState(moves);
  }

  const onSummit = event => {
    event.preventDefault();
    setSearchMovieQwerry(moveName);
  };

  return (
    <main>
      <form>
        <SearchBox value={moveName} onChange={updateQueryString} />
        <button type={'submit'} onClick={onSummit}>
          Search
        </button>
      </form>
      <Outlet />
      <ul>
        {movesState.map(movie => (
          <Link to={`${movie.id}`} key={movie.id} state={{ from: location }}>
            {MovieItem(movie)}
          </Link>
        ))}
      </ul>
    </main>
  );
};
