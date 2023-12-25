//import libraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import Button from '../../Components/Button';
import {useAppTheme} from '../../../theme';
import TextField from '../../Components/formInput/TextField';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import {CommonActions, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {saveToken} from '../../../libs/storage';
import {updateUser} from '../../../Adapter/Redux/slice/user';

const schema = yup
  .object({
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{8,99}$/,
        'Must contain at least 12 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number',
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();

// create a component
const CreatePassword = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {params} = useRoute();
  const {colors} = useAppTheme();
  const [loading, setLoading] = useState<boolean>(false);

  const {control, handleSubmit} = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    const paramData = (params as any)?.params || {};

    const res = await axios.post('/customer/auth/reset-password', {
      email: paramData.email,
      otp: paramData.otp,
      password: data.password,
    });

    if (res.status !== 200) {
      Alert.alert('ALert', res.data?.message || '', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
    } else {
      const token = res.data.data.token;
      saveToken(token);
      dispatch(updateUser({token}));

      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'privetStack'}],
      });
      navigation.dispatch(resetAction);
    }

    setLoading(false);
  };

  return (
    <View style={[styles.root, {backgroundColor: colors.background}]}>
      <CustomHeader />

      <View style={styles.container}>
        <Text style={[styles.loginText, {color: colors.onBackground}]}>
          Create a New{'\n'}Password
        </Text>

        <TextField
          control={control}
          name="password"
          placeholder="Enter Password"
          secureTextEntry
        />
        <TextField
          control={control}
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry
        />
        <View style={styles.spacer} />
        <Button
          onPress={handleSubmit(onSubmit)}
          btnText="UPDATE PASSWORD"
          disabled={loading}
          isLoading={loading}
          style={styles.wFull}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  loginText: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    marginBottom: 30,
  },
  spacer: {
    marginTop: 30,
  },
  wFull: {
    width: '100%',
  },
});

//make this component available to the app
export default CreatePassword;
