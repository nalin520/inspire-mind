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
import CustomInput from '../../Components/CustomInput';
const DATA = [
  {
    id: 0,
    name: ' My\nProfile',
    image: require('../../../Assets/Img/Sun.png'),
  },
  {
    id: 1,
    name: 'My\ninspiremind\nProfile',
    image: require('../../../Assets/Img/moon.png'),
  },
  {
    id: 2,
    name: 'My\nStats',
    image: require('../../../Assets/Img/sleep.png'),
  },
  {
    id: 3,
    name: 'Language',
    image: require('../../../Assets/Img/head.png'),
  },
  {
    id: 4,
    name: 'Mood\nCheck-In',
    image: require('../../../Assets/Img/group.png'),
  },
  {
    id: 5,
    name: 'Daily\nReminder',
    image: require('../../../Assets/Img/hand.png'),
  },
  ,
  {
    id: 6,
    name: 'Theme',
    image: require('../../../Assets/Img/hand.png'),
  },
];
// create a component
const Account = ({navigation}) => {
  return (
    <>
      <ProfileHeader
        name={'Account'}
        source={require('../../../Assets/Img/setting.png')}
        onPress={() => navigation?.navigate('Setting')}
      />
      <ScrollView style={styles.container}>
        <View>
          <Image
            style={{height: 80, width: 80}}
            source={require('../../../Assets/Img/ProfilePhoto.png')}
          />
          <Image
            style={{
              height: 80,
              width: 80,
              resizeMode: 'contain',
              marginTop: -30,
            }}
            source={require('../../../Assets/Img/rating.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 8,
            backgroundColor: '#D8E6F3',
            paddingHorizontal: 15,
            borderRadius: 10,
          }}>
          <Text style={{fontFamily: 'Inter-Bold', color: '#424242'}}>01</Text>
          <Text style={{fontFamily: 'Inter-Bold', color: '#424242'}}>
            Consecutive days
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 15,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Inter-Bold',
                color: 'black',
              }}>
              0{'\n'}Day
            </Text>
            <Image
              style={{height: 40, fontFamily: 'Inter-Bold', color: 'black'}}
              source={require('../../../Assets/Img/Line.png')}
            />
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Inter-Bold',
                color: 'black',
              }}>
              0{'\n'}Day
            </Text>
            <Image
              style={{height: 40, fontFamily: 'Inter-Bold', color: 'black'}}
              source={require('../../../Assets/Img/Line.png')}
            />
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Inter-Bold',
                color: 'black',
              }}>
              0{'\n'}STARS
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 22,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          {DATA.map(item => (
            <TouchableOpacity
              style={{
                padding: 25,
                backgroundColor: '#fff',
                width: '45%',
                borderRadius: 15,
                marginBottom: 10,
              }}
              onPress={() => navigation?.navigate('EditProfile')}>
              <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <CustomInput color={'#2A2EEC'} placeholder={'Purchase'} />
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
});

//make this component available to the app
export default Account;
