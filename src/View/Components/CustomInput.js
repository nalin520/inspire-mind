//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const CustomInput = ({placeholder}) => {
  return (
    <View>
      <TextInput style={styles.container} placeholder={placeholder} />
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
    borderColor: '#9C9C9C',
    paddingHorizontal: 10,
  },
});

//make this component available to the app
export default CustomInput;
