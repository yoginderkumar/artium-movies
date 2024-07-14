import { MovieDetails } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const searchMovies = async (searchTerm: string, page = 1) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${page}`);
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (imdbID: string): Promise<MovieDetails> => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
    const data = await response.json();
    return data;
  };