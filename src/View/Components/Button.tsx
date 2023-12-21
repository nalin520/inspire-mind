//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Button = ({btnText, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2A2EEC',
    marginVertical: 10,
    width: '45%',
    paddingVertical: 15,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnText: {color: '#fff', fontFamily: 'Inter-Bold', fontSize: 15},
});

//make this component available to the app
export default Button;
