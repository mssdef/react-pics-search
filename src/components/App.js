import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] }

   onSearchSubmit = async (term) => {
    const resp = await unsplash.get('/search/photos', {
        params: { query: term }
    });

    this.setState({ images: resp.data.results });
  }

  render() {
    return <div className="cmp-app ui container">
      <SearchBar onSubmit={this.onSearchSubmit} />

      Found {this.state.images.length} images.
    </div>
  }
}

export default App;
