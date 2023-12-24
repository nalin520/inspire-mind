//import libraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import Button from '../../Components/Button';
import CheckBox from '@react-native-community/checkbox';
import OTPTextView from '../../Components/OTPTextView';
import {Color} from '../../../styles/globalStyle';
import {useForm} from 'react-hook-form';
import TextField from '../../Components/formInput/TextField';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import {saveToken} from '../../../libs/storage';

const schema = yup
  .object({
    firstName: yup.string().min(4).required(),
    lastName: yup.string().min(4).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  })
  .required();

// create a component
const SignUp = ({navigation}: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const [otp, setOtp] = useState<string>('');

  const {control, handleSubmit} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    const res = await axios.post('/customer/auth/signup', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
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
      setUserId(res.data.data.userId);
      setModalVisible(true);
    }

    setLoading(false);
  };

  const submitOtp = async () => {
    if (!otp || otp.length !== 4) {
      return;
    }

    setLoading(true);

    const res = await axios.post('/customer/auth/verify-otp', {
      userId: userId,
      otp,
    });

    if (res.status !== 200) {
      Alert.alert('ALert', res.data?.message || '', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
    } else {
      await saveToken(res.data.data.token);
      navigation.navigate('question');
    }

    setLoading(false);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.loginText}>InspireMind</Text>
        <Text style={styles.subTitle}>
          Sign up for, Elevate Your Journey to {'\n'}
          Health and Happiness
        </Text>
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
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>
        <Text style={styles.formTitle}>Continue with Email</Text>
        <TextField
          control={control}
          name="firstName"
          placeholder={'First Name'}
        />
        <TextField
          control={control}
          name="lastName"
          placeholder={'Last Name'}
        />
        <TextField control={control} name="email" placeholder={'Email'} />
        <TextField control={control} name="password" placeholder={'Password'} />

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.checkboxText}>
            <Text>By continuing, you agree to InspireMind's</Text>
            <Text style={styles.textPrimary}> Terms & conditions </Text>
            <Text>And </Text>
            <Text style={styles.textPrimary}> Privacy Policy</Text>
          </Text>
        </View>

        <Button
          onPress={handleSubmit(onSubmit)}
          btnText="Next"
          disabled={loading}
          isLoading={loading}
        />
        <View style={styles.loginContainer}>
          <Text style={styles.textMuted}>Already have an account? &nbsp;</Text>
          <Text
            onPress={() => navigation.navigate('login')}
            style={[styles.textPrimary, styles.textUnderline]}>
            Login
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.textMuted}>HELP</Text>
          <View style={styles.dot} />
          <Text style={styles.textMuted}>TERMS</Text>
          <View style={styles.dot} />
          <Text style={styles.textMuted}>POLICY</Text>
          <View style={styles.dot} />
          <Text style={styles.textMuted}>SUPPORT</Text>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(prev => !prev);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>OTP VERIFICATION</Text>
            <OTPTextView
              inputCount={4}
              handleTextChange={(e: string) => setOtp(e || '')}
            />
            <Text style={styles.otp}>00:59</Text>
            <Button
              onPress={submitOtp}
              btnText="Next"
              disabled={loading}
              isLoading={loading}
              style={styles.btn}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: '10%',
  },
  btn: {
    backgroundColor: '#2A2EEC',
    marginVertical: 10,
    width: '50%',
    paddingVertical: 13,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  loginText: {
    fontFamily: 'Inter-Bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 4,
    color: Color.colorBlack,
  },
  subTitle: {
    color: '#9C9C9C',
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 15,
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
  dividerContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  dividerLine: {
    flex: 1,
    borderWidth: 0.5,
    height: 1,
    alignSelf: 'center',
    borderColor: '#575757',
  },
  dividerText: {
    fontSize: 13,
    paddingHorizontal: 8,
    color: Color.colorBlack,
  },
  formTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 15,
    color: '#424242',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 18,
  },
  checkboxText: {
    color: Color.colorBlack,
  },
  textPrimary: {
    color: '#2A2EEC',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textMuted: {
    color: '#424242',
  },
  loginContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '10%',
  },
  dot: {
    borderWidth: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    borderColor: '#9C9C9C',
    marginLeft: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    paddingVertical: 25,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#DFDFDF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    color: Color.colorBlack,
  },
  otp: {
    textAlign: 'center',
    marginTop: 10,
    color: '#424242',
  },
  otpBtn: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
});

//make this component available to the app
export default SignUp;
