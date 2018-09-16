import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(data => this.setState({albums: data}))
  }

  render(){
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}


export default AlbumList;
