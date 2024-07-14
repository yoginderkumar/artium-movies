import { Link } from "react-router-dom";
import { Movie } from "../types";
import { Card, Poster, CardContent, Title, Year } from "./MovieCard.styles";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
      <Card>
        <Poster src={movie.Poster} alt={movie.Title} />
        <CardContent>
          <Title>{movie.Title}</Title>
          <Year>{movie.Year}</Year>
        </CardContent>
      </Card>
    </Link>
  );
}

export default MovieCard;
