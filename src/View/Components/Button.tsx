//import libraries
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {useAppTheme} from '../../theme';

interface IButton extends TouchableOpacityProps {
  btnText: string;
  isLoading?: boolean;
  disabled?: boolean;
}

// create a component
const Button = ({
  btnText,
  isLoading,
  disabled,
  style = {},
  ...rest
}: IButton) => {
  const {colors} = useAppTheme();

  const btnStyle = [styles.container, {backgroundColor: colors.primary}, style];
  const btnTextStyle = [styles.btnText, {color: colors.onPrimary}];

  return (
    <TouchableOpacity
      style={btnStyle}
      disabled={disabled || isLoading}
      activeOpacity={0.6}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={btnTextStyle}>{btnText}</Text>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '45%',
    paddingVertical: 15,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
});

//make this component available to the app
export default Button;
