import { getMovieActorsBuId } from 'API/GetMoves';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMovieActorsBuId(movieId).then(setActors);
  }, [movieId]);

  if (!actors) {
    return;
  }
  return (
    <ul>
      {actors.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="120"
            />
          )}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
