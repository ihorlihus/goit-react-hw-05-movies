import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/moves">Moves</Link>
      </Header>
      <Outlet />
    </Container>
  );
};
