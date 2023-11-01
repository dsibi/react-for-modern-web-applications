import Movie from "./Movie";

function MovieList(props: IMovieListProps) {
  const { movieList } = props;

  return (
    <div className="movies">
      {movieList.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
export default MovieList;
