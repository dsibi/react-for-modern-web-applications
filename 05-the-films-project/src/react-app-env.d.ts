interface IMovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IMovieListProps {
  movieList: IMovieProps[];
}
