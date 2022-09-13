import { Routes, Route } from 'react-router-dom';
import { Home } from './../pages/Home';
import { Moves } from './../pages/Moves';
import { NotFound } from './../pages/NotFound';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/moves" element={<Moves />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
