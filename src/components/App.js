import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component {
  state = { images: [], loading: false, searched: false }

  onSearchSubmit = async (term) => {
    this.setState({ loading: true });
    const resp = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: resp.data.results, loading: false, searched: true });
  }

  renderContent() {
    const { images, loading, searched } = this.state;
    if (loading) {
      return <div className="cmp-spinner"><div className="ui active centered inline loader large"></div></div>;
    }
    if (searched && images.length === 0) {
      return (
        <div className="cmp-empty-state">
          <p>No images found. Try a different search term.</p>
        </div>
      );
    }
    return <ImageList images={images} />;
  }

  render() {
    return <div className="cmp-app ui container">
      <SearchBar onSubmit={this.onSearchSubmit} />
      {this.renderContent()}
    </div>
  }
}

export default App;
