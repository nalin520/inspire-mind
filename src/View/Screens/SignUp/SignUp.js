//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import Button from '../../Components/Button';
import CheckBox from '@react-native-community/checkbox';
import OTPTextView from '../../Components/OTPTextView';

// create a component
const SignUp = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.loginText}>InspireMind</Text>
        <Text style={{color: '#9C9C9C', textAlign: 'center', marginBottom: 25}}>
          Sign up for, Elevate Your Journey to {'\n'}
          Health and Happiness
        </Text>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingHorizontal: 40,
          }}>
          <Image
            style={{height: 40, width: 40, resizeMode: 'contain'}}
            source={require('../../../Assets/Img/Facebook.png')}
          />
          <Image
            style={{height: 40, width: 40, resizeMode: 'contain'}}
            source={require('../../../Assets/Img/Apple.png')}
          />
          <Image
            style={{height: 40, width: 40, resizeMode: 'contain'}}
            source={require('../../../Assets/Img/Google.png')}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingHorizontal: 40,
            marginTop: 20,
          }}>
          <View
            style={{
              width: '45%',
              borderWidth: 0.5,
              height: 1,
              alignSelf: 'center',
            }}
          />
          <Text style={{paddingHorizontal: 5}}>OR</Text>
          <View
            style={{
              width: '45%',
              borderWidth: 0.5,
              height: 1,
              alignSelf: 'center',
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 15,
            textAlign: 'center',
            marginVertical: 15,
          }}>
          Continue with Email
        </Text>
        <CustomInput placeholder={'Name....'} />
        <CustomInput placeholder={'Email....'} />
        <CustomInput placeholder={'Password....'} />

        <View style={{flexDirection: 'row', marginBottom: 18}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{}}>
            <Text>By continuing, you agree to InspireMind's</Text>
            <Text style={{color: '#2A2EEC'}}> Terms & conditions </Text>
            <Text>And </Text>
            <Text style={{color: '#2A2EEC'}}> Privacy Policy</Text>
          </Text>
        </View>

        <Button onPress={() => setModalVisible(true)} btnText={'Next'} />
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: '10%'}}>
          <Text style={{color: '#424242'}}>Already have an account?{`  `}</Text>
          <Text
            onPress={() => navigation?.navigate('Login')}
            style={{
              borderBottomWidth: 1,
              borderColor: '#2A2EEC',
              color: '#2A2EEC',
            }}>
            Login
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: '#fff',
            paddingVertical: 25,
          }}>
          {/* <View style={{flexDirection: 'row'}}> */}
          <Text>HELP</Text>
          <View
            style={{
              borderWidth: 2,
              width: 4,
              height: 4,
              borderRadius: 2,
              alignSelf: 'center',
              borderColor: '#9C9C9C',
              marginLeft: 4,
            }}
          />
          {/* </View> */}
          {/* <View style={{flexDirection: 'row'}}> */}
          <Text>TERMS</Text>
          <View
            style={{
              borderWidth: 2,
              width: 4,
              height: 4,
              borderRadius: 2,
              alignSelf: 'center',
              borderColor: '#9C9C9C',
              marginLeft: 4,
            }}
          />
          {/* </View> */}
          {/* <View style={{flexDirection: 'row'}}> */}
          <Text>POLICY</Text>
          <View
            style={{
              borderWidth: 2,
              width: 4,
              height: 4,
              borderRadius: 2,
              alignSelf: 'center',
              borderColor: '#9C9C9C',
              marginLeft: 4,
            }}
          />
          {/* </View> */}
          {/* <View style={{flexDirection: 'row'}}> */}
          <Text>SUPPORT</Text>
          {/* <View
            style={{
              borderWidth: 2,
              width: 4,
              height: 4,
              borderRadius: 2,
              alignSelf: 'center',
              borderColor: '#9C9C9C',
              marginLeft: 4,
            }}
          /> */}
          {/* </View> */}
        </View>
        <View style={{paddingBottom: 50}} />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>OTP VERIFICATION</Text>
            <OTPTextView
              inputCount={4}
              // handleTextChange={e => {
              //   e.length == 4 && onSubmitOtp(e);
              // }}
            />
            <Text
              style={{textAlign: 'center', marginTop: 10, color: '#424242'}}>
              00:59
            </Text>
            <TouchableOpacity
              onPress={() => navigation?.navigate('Login')}
              style={styles.btn}>
              <Text
                style={{color: '#fff', fontFamily: 'Inter-Bold', fontSize: 15}}>
                Next
              </Text>
            </TouchableOpacity>
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
    // justifyContent: 'center',
    // alignItems: 'center',
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
    marginBottom: 10,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
});

//make this component available to the app
export default SignUp;
