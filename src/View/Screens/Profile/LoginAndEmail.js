//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ProfileHeader from '../../Components/ProfileHeader';

// create a component
const LoginAndEmail = () => {
  return (
    <>
      <ProfileHeader name={'Login And Email'} />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            backgroundColor: '#EFF7FF',
            padding: 7,
            borderRadius: 8,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}
            source={require('../../../Assets/Img/Union.png')}
          />
          <Text>Connect</Text>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              color: 'black',
              paddingHorizontal: 8,
              paddingVertical: 5,
              backgroundColor: '#D8E6F3',
              borderRadius: 10,
            }}>
            Connect
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            backgroundColor: '#EFF7FF',
            padding: 7,
            borderRadius: 8,
            marginTop: 10,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}
            source={require('../../../Assets/Img/Google.png')}
          />
          <Text>Connect</Text>
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              color: 'black',
              paddingHorizontal: 8,
              paddingVertical: 5,
              backgroundColor: '#D8E6F3',
              borderRadius: 10,
            }}>
            Disconnect
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.btncontainer, {backgroundColor: '#FF001F'}]}>
          <Text style={{color: '#fff', fontFamily: 'Inter-Bold', fontSize: 15}}>
            Delete account
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    padding: 15,
  },
  btncontainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2A2EEC',
    marginVertical: 15,
    width: '80%',
    paddingVertical: 15,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

//make this component available to the app
export default LoginAndEmail;
