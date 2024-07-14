import { Movie } from '../types/movie';
import MovieCard from './MovieCard';
import { MovieListContainer } from './MovieList.styles';

function MovieList({ movies }: {movies: Movie[]}) {
  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </MovieListContainer>
  );
}

export default MovieList;