import React from 'react';

class SearchBar extends React.Component {
  state = { term:'' }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
      return <div className="searchbar ui segment">
          <form className="search ui form" onSubmit={this.onFormSubmit} >
            <div className="field">
              <label>Image Search v1.2</label>
              <input type="text"
                value={ this.state.term }
                onChange={(e) => this.setState({ term: e.target.value })} />
            </div>
          </form>
        </div>
    }
}

export default SearchBar;
