//import libraries
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Modal, Alert} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import OTPTextView from '../../Components/OTPTextView';
import {useAppTheme} from '../../../theme';
import * as yup from 'yup';
import axios from 'axios';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import TextField from '../../Components/formInput/TextField';
import Button from './../../Components/Button';

const OTP_RESEND_TIME = 80;
const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const OtpModal = ({modalVisible, setModalVisible, email, navigation}: any) => {
  const {colors} = useAppTheme();
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

    const res = await axios.post('/customer/auth/forgot-password-verify-otp', {
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
      navigation.navigate('createPassword', {
        params: {
          otp,
          email,
        },
      });
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
const ForgotPassword = ({navigation}: any) => {
  const {colors} = useAppTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    const res = await axios.post('/customer/auth/forgot-password', {
      email: data.email.toLowerCase(),
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
    <View style={[styles.root, {backgroundColor: colors.background}]}>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={[styles.loginText, {color: colors.onBackground}]}>
          Forgot{'\n'}Password
        </Text>
        <TextField control={control} name="email" placeholder="Email" />
        <View style={styles.spacer} />
        <Button
          onPress={handleSubmit(onSubmit)}
          btnText="SEND OTP"
          disabled={loading}
          isLoading={loading}
        />
      </View>

      <OtpModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
        email={email}
      />
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
  btn: {
    backgroundColor: '#2A2EEC',
    marginVertical: 10,
    width: '50%',
    paddingVertical: 13,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

//make this component available to the app
export default ForgotPassword;
