import React from 'react';
import {View} from 'react-native';
import {Controller} from 'react-hook-form';
import CustomInput, {ICustomInput} from '../CustomInput';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

export interface ITextField extends ICustomInput {
  control: any;
  name: string;
  rules?: any;
}

export default function TextField({control, name, rules, ...rest}: ITextField) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}, formState: {errors}}) => (
        <View style={styles.fullWidth}>
          <CustomInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
          {errors[name] && (
            <Text style={styles.errorText}>This is required.</Text>
          )}
        </View>
      )}
      name={name}
    />
  );
}

// define your styles
const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    marginLeft: 8,
    marginTop: -8,
  },
});
