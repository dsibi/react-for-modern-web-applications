interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IMovieList {
  movieList: IMovie[];
  loading: boolean;
}

interface ISearchState {
  search: string;
  type: string | disabled;
}

interface ISearchProps {
  searchMovie(filter: ISearchState): void;
}

interface APIResponse {
  Search: IMovie[];
}
