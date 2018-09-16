import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(data => this.setState({albums: data}))
  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail
        album={album}
        key={album.title}
      />);
  }

  render(){
    return (
      <ScrollView>
          {this.renderAlbums()}
      </ScrollView>
    );
  }
}


export default AlbumList;
