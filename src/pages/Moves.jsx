import { useSearchParams } from 'react-router-dom';
// import { ProductList } from "../components/ProductList";
import { SearchBox } from '../components/SearchBox';
import getMoves from './../API/GetMoves';

export const Moves = () => {
  const moves = getMoves();
  const [searchParams, setSearchParams] = useSearchParams();
  const moveName = searchParams.get('name') ?? '';
  console.log(moves);

  //   const visibleMoves = moves.filter(move =>
  //     move.name.toLowerCase().includes(moveName.toLowerCase())
  //   );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={moveName} onChange={updateQueryString} />
      {/* <ProductList products={visibleMoves} /> */}
    </main>
  );
};
