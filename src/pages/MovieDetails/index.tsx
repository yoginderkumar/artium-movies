import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/omdb';
import { MovieDetails } from '../../types/movie';
import {
  MovieDetailsContainer,
  PosterSection,
  Poster,
  InfoSection,
  Title,
  MetaData,
  Plot,
  AdditionalInfo,
  BackButton
} from './MovieDetails.styles';

function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        const details = await getMovieDetails(id);
        setMovie(details);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <MovieDetailsContainer>
      <BackButton to="/">← Back to Search</BackButton>
      <PosterSection>
        <Poster src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450.png?text=No+Poster'} alt={movie.Title} />
      </PosterSection>
      <InfoSection>
        <Title>{movie.Title}</Title>
        <MetaData>
          <span>{movie.Year}</span> • <span>{movie.Rated}</span> • <span>{movie.Runtime}</span>
        </MetaData>
        <Plot>{movie.Plot}</Plot>
        <AdditionalInfo>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writers:</strong> {movie.Writer}</p>
          <p><strong>Stars:</strong> {movie.Actors}</p>
          <p><strong>Genres:</strong> {movie.Genre}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}/10</p>
        </AdditionalInfo>
      </InfoSection>
    </MovieDetailsContainer>
  );
}

export default MovieDetailsPage;