import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] }

   onSearchSubmit = async (term) => {
    const resp = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID fe23936d559a1890c5a706836d1c3fedb39993ca89b0a9c87fcde61f47f784a3'
        }
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
