import * as React from "react";
import {
  HeaderContainer,
  HeaderLinksContainer,
  Paragraph,
  SearchBarContainer,
  SearchInput,
  SuggestionItem,
  SuggestionsList,
  Title,
} from "./Navigation.styles";
import {useDebounce} from "../hooks";
import { searchMovies } from "../api";
import { Movie } from "../types";
import { Link } from "react-router-dom";

export default function NavigationBar({
  onSearch,
}: {
  onSearch: (search: string) => void;
}) {
  const searchInput = React.useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<Movie[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  React.useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearchTerm) {
        const data = await searchMovies(debouncedSearchTerm);
        if (data.Search) {
          setSuggestions(data.Search.slice(0, 5));
        } else {
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedSearchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (movie: Movie) => {
    setSearchTerm(movie.Title);
    onSearch(movie.Title);
    setSuggestions([]);
    searchInput.current?.blur()
  };

  return (
    <HeaderContainer>
      <HeaderLinksContainer>
      <Title>Movie List</Title>
      <Link to='/'>
      <Paragraph>Home</Paragraph>
      </Link>
      </HeaderLinksContainer>
      <SearchBarContainer>
        <SearchInput
          type="text"
          ref={searchInput}
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {suggestions?.length > 0 && document.activeElement === searchInput.current && (
          <SuggestionsList>
            {suggestions.map((movie) => (
              <SuggestionItem
                key={movie.imdbID}
                onClick={() => handleSuggestionClick(movie)}
              >
                {movie.Title} ({movie.Year})
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </SearchBarContainer>
    </HeaderContainer>
  );
}
