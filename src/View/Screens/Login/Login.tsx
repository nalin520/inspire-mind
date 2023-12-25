//import libraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Button from '../../Components/Button';
import {useAppTheme} from '../../../theme';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '../../Components/formInput/TextField';
import TextDivider from '../../Components/common/divider/TextDivider';
import Footer from '../../Components/common/nonAuth/Footer';
import {saveToken} from '../../../libs/storage';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../../Adapter/Redux/slice/user';
import {CommonActions} from '@react-navigation/native';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  })
  .required();

// create a component
const Login = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {colors} = useAppTheme();
  const [loading, setLoading] = useState<boolean>(false);

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    const res = await axios.post('/customer/auth/login', {
      email: data.email.toLowerCase(),
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
      setLoading(false);

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
    <ScrollView style={[styles.root, {backgroundColor: colors.background}]}>
      <Text style={[styles.loginText, {color: colors.onSurface}]}>Log in</Text>
      <View style={styles.logoContainer}>
        <Image
          style={styles.socialLogo}
          source={require('../../../Assets/Img/Facebook.png')}
        />
        <Image
          style={styles.socialLogo}
          source={require('../../../Assets/Img/Apple.png')}
        />
        <Image
          style={styles.socialLogo}
          source={require('../../../Assets/Img/Google.png')}
        />
      </View>
      <TextDivider text="OR" style={styles.mbXl} />

      <TextField control={control} name="email" placeholder="Email" />
      <TextField
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation?.navigate('forgotPassword')}>
        <Text style={[styles.mutedTitle, {color: colors.muted}]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <Button
        onPress={handleSubmit(onSubmit)}
        btnText="NEXT"
        disabled={loading}
        isLoading={loading}
      />

      <View style={[styles.loginContainer]}>
        <Text style={{color: colors.muted}}>New to Inspire mind &nbsp;</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text style={[{color: colors.primary}, styles.textUnderline]}>
            Sign up for free
          </Text>
        </TouchableOpacity>
      </View>
      <Footer style={styles.footer} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    paddingTop: '10%',
  },
  mbXl: {
    marginBottom: 30,
  },
  loginText: {
    fontFamily: 'Inter-Bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 28,
    marginBottom: 10,
  },
  socialLogo: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  loginContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '10%',
  },
  mutedTitle: {
    textAlign: 'right',
    marginVertical: 2,
    marginBottom: '10%',
  },
  footer: {
    marginTop: 20,
  },
});

//make this component available to the app
export default Login;
