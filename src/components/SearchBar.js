import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  debounceTimer = null;

  componentWillUnmount() {
    clearTimeout(this.debounceTimer);
  }

  onInputChange = (e) => {
    const term = e.target.value;
    this.setState({ term });

    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      if (term.trim()) {
        this.props.onSubmit(term);
      }
    }, 500);
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    clearTimeout(this.debounceTimer);
    if (this.state.term.trim()) {
      this.props.onSubmit(this.state.term);
    }
  }

  render() {
    return <div className="searchbar ui segment">
      <form className="search ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Image Search v1.2</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
      </form>
    </div>
  }
}

export default SearchBar;
