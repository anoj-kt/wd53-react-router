import movies from '../data/movies.json';
import MovieCard from './MovieCard';
import { Outlet } from 'react-router-dom';

const AnimationMovies = () => {
  const filteredMovies = movies.filter((movie) => movie.genre === 'Animation');

  return (
    <div className='movie-list'>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Outlet />
    </div>
  );
};

export default AnimationMovies;
