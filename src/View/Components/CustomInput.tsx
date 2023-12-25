//import libraries
import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Color} from '../../styles/globalStyle';
import {useAppTheme} from '../../theme';

export interface ICustomInput extends TextInputProps {
  color?: string;
}

// create a component
const CustomInput = ({placeholder, color, ...rest}: ICustomInput) => {
  const {colors} = useAppTheme();

  const customStyle = {
    borderColor: color ? color : colors.outline,
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
    overflow: 'hidden',
  },
});

//make this component available to the app
export default CustomInput;
