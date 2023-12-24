import React from 'react';
import {View} from 'react-native';
import {Controller} from 'react-hook-form';
import CustomInput from '../CustomInput';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

export default function TextField({control, name, rules, ...rest}: any) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}, formState: {errors}}) => (
        <View>
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
  errorText: {
    fontSize: 13,
    color: 'red',
    marginLeft: 8,
    marginTop: -8,
  },
});
