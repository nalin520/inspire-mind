//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import CustomInput from '../../Components/CustomInput';
import Button from '../../Components/Button';

// create a component
const CreatePassword = ({navigation}) => {
  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={styles.loginText}>Create a New{'\n'}Password</Text>
        <CustomInput placeholder={'Enter Password'} />
        <CustomInput placeholder={'Confirm Password'} />
        <Button
          onPress={() => navigation?.navigate('Login')}
          btnText={'Submit'}
        />
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
});

//make this component available to the app
export default CreatePassword;
