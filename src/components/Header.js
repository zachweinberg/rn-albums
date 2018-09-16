import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.headerTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20
  }
});

export default Header;
