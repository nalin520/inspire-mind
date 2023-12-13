//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// create a component
const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={{height: 40, width: 40}}
          source={require('../../Assets/Img/left-arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingHorizontal: 10,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default CustomHeader;
