//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const CustomInput = ({placeholder, color}) => {
  return (
    <View>
      <TextInput
        style={[styles.container, {borderColor: color ? color : '#9C9C9C'}]}
        placeholder={placeholder}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 50,

    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 1,

    paddingHorizontal: 10,
  },
});

//make this component available to the app
export default CustomInput;
