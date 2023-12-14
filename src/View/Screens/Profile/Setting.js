//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import ProfileHeader from '../../Components/ProfileHeader';

// create a component
const Setting = ({navigation}) => {
  return (
    <>
      <ProfileHeader name={'Setting'} />
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
          }}
          onPress={() => navigation?.navigate('SettingNotification')}>
          <Text on style={{fontFamily: 'Inter-Bold', color: 'black'}}>
            Notification
          </Text>

          <Image
            style={{
              height: 15,
              width: 15,
              resizeMode: 'contain',
            }}
            source={require('../../../Assets/Img/after.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
          onPress={() => navigation?.navigate('CustomizeStatus')}>
          <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
            Customize Stats
          </Text>

          <Image
            style={{
              height: 15,
              width: 15,
              resizeMode: 'contain',
            }}
            source={require('../../../Assets/Img/after.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation?.navigate('LoginAndEmail')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
            Login and Email
          </Text>

          <Image
            style={{
              height: 15,
              width: 15,
              resizeMode: 'contain',
            }}
            source={require('../../../Assets/Img/after.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 15,
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>More</Text>
          <View style={{marginTop: 15, backgroundColor: '#fff'}}>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: 'black',
                paddingBottom: 10,
                backgroundColor: '#fff',
                borderBottomWidth: 0.5,
                marginBottom: 8,
              }}>
              Share INSPIREMIND
            </Text>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: 'black',
                paddingBottom: 10,
                backgroundColor: '#fff',
                borderBottomWidth: 0.5,
                marginBottom: 8,
              }}>
              Rate our app
            </Text>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: 'black',
                paddingBottom: 10,
                backgroundColor: '#fff',
                borderBottomWidth: 0.5,
                marginBottom: 8,
              }}>
              Feedback and suggestions
            </Text>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: 'black',
                paddingBottom: 10,
                backgroundColor: '#fff',
                borderBottomWidth: 0.5,
                marginBottom: 8,
              }}>
              Privacy and policy
            </Text>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: 'black',
                paddingBottom: 10,
                backgroundColor: '#fff',
                // borderBottomWidth: 0.5,
                marginBottom: 8,
              }}>
              Terms of services
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity style={styles.btncontainer}>
            <Text
              style={{color: '#fff', fontFamily: 'Inter-Bold', fontSize: 15}}>
              Logout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btncontainer, {backgroundColor: '#7A7A7A'}]}>
            <Text
              style={{color: '#fff', fontFamily: 'Inter-Bold', fontSize: 15}}>
              Delete account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: 30}} />
      </ScrollView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#EFF7FF',
    paddingHorizontal: 10,

    paddingVertical: 10,
  },
  btncontainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2A2EEC',
    marginVertical: 10,
    width: '45%',
    paddingVertical: 15,
    alignItems: 'center',

    borderRadius: 10,
  },
});

//make this component available to the app
export default Setting;
