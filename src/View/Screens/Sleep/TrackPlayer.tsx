//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Color, FontFamily} from '../../../styles/globalStyle';
import Slider from '@react-native-community/slider';
import * as Progress from 'react-native-progress';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
// create a component
const TrackPlayer = () => {
  const [progress, setProgress] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../Assets/Img/Track_PlayerBackground.png')}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}>
            <TouchableOpacity style={styles.playIconContainer}>
              <Ionicons name="arrow-back" size={20} color="#fff" />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={[styles.btn, {marginRight: 15}]}>
                <Text style={styles.btnText}>FOLLOW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.playIconContainer}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity style={styles.emtyBoxContainer}>
              <Image
                style={styles.emtyBox}
                source={require('../../../Assets/Img/check-box-empty.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              //   onPress={() => navigation?.navigate('sleep_track_player')}
              style={[styles.bookmarkIconContainer, {marginTop: 15}]}>
              <Ionicons name="play-outline" size={28} color={'#fff'} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 24,
                alignItems: 'center',
              }}>
              <View>
                <Image
                  style={{height: 65, width: 65}}
                  source={require('../../../Assets/Img/doctorphoto.png')}
                />
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    position: 'absolute',
                    left: 50,
                    top: -5,
                  }}
                  source={require('../../../Assets/Img/veifytick.png')}
                />
              </View>
              <Text
                style={{
                  fontFamily: FontFamily.interRegular,
                  color: 'black',
                  fontSize: 60,
                }}>
                12:05
              </Text>
            </View>
            <Slider
              style={{width: '100%', height: 40, borderWidth: 3}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#2A2EEC"
              maximumTrackTintColor="#000000"
              thumbTintColor={'#2A2EEC'}
            />
            <Text
              style={{
                fontFamily: FontFamily.interBold,
                color: 'black',
                fontSize: 18,
                marginTop: 5,
                textAlign: 'center',
              }}>
              Relaxtion & Sleep
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  padding: 17,
                  backgroundColor: 'rgba(64, 64, 64, 1)',
                  borderRadius: 55,
                  margin: 5,
                }}>
                <Entypo color={'#fff'} name="cross" size={22} />
              </TouchableOpacity>
              <CountdownCircleTimer
                isPlaying
                duration={15}
                size={60}
                strokeWidth={3}
                colors={Color.colorMediumblue}
                colorsTime={[7, 5, 2, 0]}>
                {({remainingTime}) => (
                  <TouchableOpacity
                    style={{
                      padding: 17,
                      backgroundColor: Color.colorMediumblue,
                      borderRadius: 55,
                      margin: 4,
                    }}>
                    <Ionicons color={'#fff'} name="checkmark-sharp" size={22} />
                  </TouchableOpacity>
                )}
              </CountdownCircleTimer>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  playIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',

    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  btn: {
    // borderColor: Color.colorMediumblue,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 11,
    backgroundColor: Color.colorMediumblue,
  },
  btnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: Color.colorWhite,
    fontWeight: '500',
  },
  emtyBoxContainer: {
    padding: 15,
    backgroundColor: '#fff',
    width: '13%',
    alignItems: 'center',
    borderRadius: 50,
  },
  emtyBox: {
    height: 15,
    width: 15,
  },
  bookmarkIconContainer: {
    width: 58,
    height: 58,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: Color.colorMediumblue,
  },
});

//make this component available to the app
export default TrackPlayer;
