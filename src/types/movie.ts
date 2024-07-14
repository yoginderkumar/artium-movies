export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface MovieDetails extends Movie {
  Director: string;
  Plot: string;
  imdbRating: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Writer: string;
  Actors: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Metascore: string;
  imdbVotes: string;
  Type: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
