//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import CustomInput from '../../Components/CustomInput';
import Button from '../../Components/Button';
import OTPTextView from '../../Components/OTPTextView';

// create a component
const ForgotPassword = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={styles.loginText}>Forgot{'\n'}Password</Text>
        <CustomInput placeholder={'Enter Email'} />
        <Button onPress={() => setModalVisible(true)} btnText={'Send Otp'} />
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
            <Button
              btnText={'Next'}
              onPress={() => navigation?.navigate('CreatePassword')}
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
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  loginText: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    marginBottom: 10,
    color: 'black',
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
export default ForgotPassword;
