import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(
  query: string,
  page: number
): Promise<FetchMovies> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<FetchMovies>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}