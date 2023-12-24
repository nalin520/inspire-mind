//import libraries
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Button = ({btnText, isLoading, disabled, ...rest}: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled || isLoading}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.btnText}>{btnText}</Text>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2EEC',
    marginVertical: 10,
    width: '45%',
    paddingVertical: 15,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
});

//make this component available to the app
export default Button;
