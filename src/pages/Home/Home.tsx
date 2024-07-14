import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/NavigationLayout';
import MovieList from '../../components/MovieList';
import { searchMovies } from '../../api/omdb';
import useDebounce from '../../hooks/useDebounce';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { HomePageContainer, Footer } from './Home.styles';
import { Movie } from '../../types/movie';

function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fetchMovies = useCallback(async (term: string, pageNumber: number) => {
    if (!term) return;
    setIsLoading(true);
    try {
      const data = await searchMovies(term, pageNumber);
      if (data.Search) {
        setMovies(prevMovies => pageNumber === 1 ? data.Search : [...prevMovies, ...data.Search]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setPage(1);
    fetchMovies(debouncedSearchTerm, 1);
  }, [debouncedSearchTerm, fetchMovies]);

  const loadMore = useCallback(() => {
    if (!isLoading) {
      setPage(prevPage => {
        const nextPage = prevPage + 1;
        fetchMovies(debouncedSearchTerm, nextPage);
        return nextPage;
      });
    }
  }, [debouncedSearchTerm, fetchMovies, isLoading]);

  useInfiniteScroll(loadMore);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setMovies([]);
    setPage(1);
  };

  return (
    <HomePageContainer>
      <Header onSearch={handleSearch} />
      <MovieList movies={movies} />
      {isLoading && <Footer>Loading more movies...</Footer>}
    </HomePageContainer>
  );
}

export default HomePage;