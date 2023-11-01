import { Component } from "react";

interface ISearch {
  search: string;
}

class Search extends Component<{}, ISearch> {
  state = {
    search: "",
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 ">
              <i className="material-icons prefix">search</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                onChange={(e) => this.setState({ search: e.target.value })}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
