//import libraries
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Button from '../../Components/Button';
import CheckBox from '@react-native-community/checkbox';
import OTPTextView from '../../Components/OTPTextView';
import {useForm} from 'react-hook-form';
import TextField from '../../Components/formInput/TextField';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import {saveToken} from '../../../libs/storage';
import {useAppTheme} from '../../../theme';
import TextDivider from '../../Components/common/divider/TextDivider';
import Footer from '../../Components/common/nonAuth/Footer';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../../Adapter/Redux/slice/user';

const OTP_RESEND_TIME = 80;
const schema = yup
  .object({
    firstName: yup.string().min(4).required(),
    lastName: yup.string().min(4).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  })
  .required();

const OtpModal = ({modalVisible, setModalVisible, email, navigation}: any) => {
  const {colors} = useAppTheme();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [timerTime, seTimerTime] = useState(OTP_RESEND_TIME);
  const timer = useRef<any>();

  const runTimer = () => {
    timer.current = setInterval(() => {
      seTimerTime(prev => {
        if (prev <= 1) {
          clearInterval(timer.current);
          timer.current = null;
        }

        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (!modalVisible) {
      seTimerTime(OTP_RESEND_TIME);
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
      return;
    }

    runTimer();

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, [modalVisible]);

  useEffect(() => {
    () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  const handleOtpSubmit = async () => {
    if (!otp || otp.length !== 4) {
      return;
    }

    setLoading(true);

    const res = await axios.post('/customer/auth/verify-otp', {
      email,
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
      setModalVisible(false);
      const token = res.data.data.token;
      saveToken(token);
      dispatch(updateUser({token}));

      navigation.navigate('question');
    }

    setLoading(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {backgroundColor: colors.modal}]}>
          <Text style={[styles.modalText, {color: colors.onBackground}]}>
            OTP VERIFICATION
          </Text>
          <OTPTextView
            inputCount={4}
            handleTextChange={(e: string) => setOtp(e || '')}
          />
          <Text style={[styles.otp, {color: colors.onBackground}]}>
            {Math.floor(timerTime / 60)}:{timerTime % 60}
          </Text>
          <Button
            onPress={handleOtpSubmit}
            btnText="Next"
            disabled={loading}
            isLoading={loading}
            style={styles.btn}
          />
        </View>
      </View>
    </Modal>
  );
};

// create a component
const SignUp = ({navigation}: any) => {
  const {colors} = useAppTheme();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<{[key: string]: boolean}>({});

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
    setError({term: false});
    if (!toggleCheckBox) {
      setError({term: true});
      return;
    }
    setLoading(true);

    const res = await axios.post('/customer/auth/sign-up', {
      firstName: data.firstName,
      lastName: data.lastName,
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
      setModalVisible(true);
      setEmail(data.email.toLowerCase());
    }

    setLoading(false);
  };

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.loginText, {color: colors.onBackground}]}>
        InspireMind
      </Text>
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
      <TextDivider text="OR" />
      <Text style={styles.formTitle}>Continue with Email</Text>
      <View style={styles.formRow}>
        <View style={styles.flex}>
          <TextField
            control={control}
            name="firstName"
            placeholder="First Name"
          />
        </View>
        <View style={styles.flex}>
          <TextField
            control={control}
            name="lastName"
            placeholder="Last Name"
          />
        </View>
      </View>
      <TextField control={control} name="email" placeholder={'Email'} />
      <TextField
        control={control}
        name="password"
        placeholder={'Password'}
        secureTextEntry
      />

      {error.term && !toggleCheckBox && (
        <Text style={styles.errorText}>This is Required</Text>
      )}
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          boxType="circle"
          hideBox={false}
          tintColors={{true: colors.primary, false: colors.primary}}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{color: colors.onBackground}}>
          <Text>By continuing, you agree to InspireMind's</Text>
          <Text style={styles.textPrimary}> Terms & conditions </Text>
          <Text>And </Text>
          <Text style={styles.textPrimary}> Privacy Policy</Text>
        </Text>
      </View>

      <Button
        onPress={handleSubmit(onSubmit)}
        btnText="NEXT"
        disabled={loading}
        isLoading={loading}
      />

      <View style={styles.loginContainer}>
        <Text style={styles.textMuted}>Already have an account? &nbsp;</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={[styles.textPrimary, styles.textUnderline]}>Login</Text>
        </TouchableOpacity>
      </View>
      <Footer />
      <OtpModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        email={email}
        navigation={navigation}
      />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  flex: {
    flex: 1,
  },
  loginText: {
    fontFamily: 'Inter-Bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 4,
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
  formTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 15,
    color: '#424242',
  },
  formRow: {
    flexDirection: 'row',
    gap: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 18,
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
  centeredView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalView: {
    maxWidth: 300,
    width: '100%',
    borderRadius: 20,
    marginTop: 150,
    paddingHorizontal: 25,
    paddingBottom: 25,
    paddingTop: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  otp: {
    textAlign: 'center',
    marginTop: 10,
  },
  errorText: {
    fontSize: 11,
    marginTop: 5,
    marginBottom: -20,
    color: 'red',
  },
});

//make this component available to the app
export default SignUp;
