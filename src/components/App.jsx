import { Routes, Route } from 'react-router-dom';
import { Home } from './../pages/Home';
import { Moves } from './../pages/Moves';
import { NotFound } from './../pages/NotFound';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/moves">Moves</Link>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moves" element={<Moves />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
