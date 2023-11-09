import { useState } from "react";

const Search = ({ searchMovie }: ISearchProps) => {
  const [filter, setFilter] = useState<ISearchState>({
    search: "",
    type: "all",
  });

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchMovie(filter);
    }
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, type: event.target.dataset.type });
    searchMovie(filter);
  };

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field s12">
            <i
              className="material-icons prefix"
              onClick={() => searchMovie(filter)}
            >
              search
            </i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              placeholder="search"
              onChange={(event) => {
                filter.search = event.target.value;
                setFilter(filter);
              }}
              onKeyDown={handleKey}
            />
          </div>
        </div>
      </form>
      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={filter.type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={filter.type === "movie"}
          />
          <span>Movies Only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={filter.type === "series"}
          />
          <span>Series Only</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
