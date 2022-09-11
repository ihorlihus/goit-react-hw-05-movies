import { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Тут выполняем асинхронную операцию,
    // например HTTP-запрос за информацией о пользователе
    if (moveName === '') return;

    async function fetchMoves() {
      const moves = await getMoves(moveName);
      console.log(moves);
      setMovesState(moves);
    }

    fetchMoves();
  }, [moveName]);

  return (
    <main>
      <SearchBox value={moveName} onChange={updateQueryString} />
      <ul>
        {movesState.map(move => (
          <li key={move.id}>
            <img src={`${move.poster_path}`} alt={move.title} width="240" />
          </li>
        ))}
      </ul>
      {/* <ProductList products={visibleMoves} /> */}
    </main>
  );
};
