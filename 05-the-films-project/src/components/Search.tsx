import { Component } from "react";

class Search extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = { search: "", type: "all" };
  }

  handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.props.searchMovie(this.state);
    }
  };

  handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      () => ({
        type: event.target.dataset.type,
      }),
      () => {
        this.props.searchMovie(this.state);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field s12">
              <i
                className="material-icons prefix"
                onClick={() => this.props.searchMovie(this.state)}
              >
                search
              </i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                placeholder="search"
                onChange={(event) => {
                  this.setState({ search: event.target.value });
                }}
                onKeyDown={this.handleKey}
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
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies Only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
