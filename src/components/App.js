import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component {
  state = { images: [], loading: false }

  onSearchSubmit = async (term) => {
    this.setState({ loading: true });
    const resp = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: resp.data.results, loading: false });
  }

  render() {
    const { images, loading } = this.state;
    return <div className="cmp-app ui container">
      <SearchBar onSubmit={this.onSearchSubmit} />
      {loading
        ? <div className="cmp-spinner"><div className="ui active centered inline loader large"></div></div>
        : <ImageList images={images} />
      }
    </div>
  }
}

export default App;
