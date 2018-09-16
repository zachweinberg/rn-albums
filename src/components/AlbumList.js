import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: [],
    isLoading: true
  };

  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(data => this.setState({albums: data, isLoading: false}))
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
      <View style={styles.container}>
          <ScrollView>
              {this.renderAlbums()}
          </ScrollView>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 65
  }
})


export default AlbumList;
