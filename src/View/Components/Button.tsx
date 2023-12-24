//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Button = ({btnText, onPress, backgroundColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: backgroundColor ? backgroundColor : '#2A2EEC'},
      ]}>
      <Text style={{color: '#fff', fontFamily: 'Inter-Bold', fontSize: 15}}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

    marginVertical: 10,
    width: '45%',
    paddingVertical: 15,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

//make this component available to the app
export default Button;
