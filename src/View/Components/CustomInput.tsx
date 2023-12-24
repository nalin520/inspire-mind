//import libraries
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Color} from '../../styles/globalStyle';

// create a component
const CustomInput = ({placeholder, color, ...rest}: any) => {
  const customStyle = {
    borderColor: color ? color : '#9C9C9C',
  };

  return (
    <TextInput
      style={[styles.container, customStyle]}
      placeholder={placeholder}
      placeholderTextColor="#000"
      {...rest}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 57,
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    color: Color.colorBlack,
    fontSize: 15,
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default CustomInput;
