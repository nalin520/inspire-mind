//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const HomeRecommendedTracks = () => {
  return (
    <View style={styles.container}>
      <Text>HomeRecommendedTracks</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default HomeRecommendedTracks;
