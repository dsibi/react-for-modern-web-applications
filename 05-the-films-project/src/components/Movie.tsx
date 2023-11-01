function Movie(props: IMovieProps) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image">
        {poster === "N/A" ? (
          <img src={`https://placehold.co/300x420?text=${title}`} alt={title} />
        ) : (
          <img src={poster} alt={title} />
        )}
      </div>
      <div className="card-content">
        <p>
          <span className="card-title activator grey-text text-darken-4">
            {title}
          </span>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export default Movie;
