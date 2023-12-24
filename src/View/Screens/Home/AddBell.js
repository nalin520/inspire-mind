// import liraries
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import img from '../../../Assets/Img/Vector.png';
import bowl from '../../../Assets/Img/bowl.png';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import DatePicker from 'react-native-date-picker';
import HomeHeader from '../../Components/HomeHeader';
import ProfileHeader from '../../Components/ProfileHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../Components/Button';
import Swiper from 'react-native-swiper';
import {Image} from 'react-native';
const AddBell = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <ProfileHeader name={'Add Bell'} />
      <ScrollView style={styles.container}>
        <View style={styles.bellContainer}>
          <Swiper
            pagination={false}
            showsButtons={false}
            dotStyle={{display: 'none', backgroundColor: 'transparent'}}
            activeDotStyle={{display: 'none', backgroundColor: 'transparent'}}
            style={[
              {
                height: 230,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <View
              style={[
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 230,
                },
              ]}>
              <TouchableOpacity style={styles.arrowButton}>
                <Text>
                  <Entypo name="chevron-left" size={20} />
                </Text>
              </TouchableOpacity>
              <CountdownCircleTimer
                duration={10}
                size={230}
                colors={'blue'}
                strokeWidth={5}>
                {({remainingTime}) => (
                  <Image source={bowl} style={styles.image1} />
                )}
              </CountdownCircleTimer>
              <TouchableOpacity style={styles.arrowButton}>
                <Text>
                  <Entypo name="chevron-right" size={20} />
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                },
              ]}>
              <TouchableOpacity style={styles.arrowButton}>
                <Text>
                  <Entypo name="chevron-left" size={20} />
                </Text>
              </TouchableOpacity>
              <CountdownCircleTimer
                duration={10}
                size={230}
                colors={'blue'}
                strokeWidth={5}>
                {({remainingTime}) => (
                  <Image source={bowl} style={styles.image1} />
                )}
              </CountdownCircleTimer>
              <TouchableOpacity style={styles.arrowButton}>
                <Text>
                  <Entypo name="chevron-right" size={20} />
                </Text>
              </TouchableOpacity>
            </View>
          </Swiper>
        </View>

        <View style={styles.players}>
          <View>
            <AntDesign name="sound" size={22} />
          </View>
          <View
            style={{
              backgroundColor: 'blue',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 85,
              // padding: 70,
              width: 85,
              borderRadius: 80,
            }}>
            {/* <Entypo name="controller-play" size={27} color="white" /> */}
            <Image source={img} style={styles.image} />
          </View>
          <View>
            <Ionicons name="stop-outline" size={22} />
          </View>
        </View>
        <View style={styles.timers}>
          <View>
            <Text style={styles.timer}>HRS</Text>
          </View>
          <View>
            <Text style={styles.timer}>MIN</Text>
          </View>
          <View>
            <Text style={styles.timer}>SEC</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: 150,
          }}>
          <DatePicker
            dividerHeight={1}
            date={date}
            onDateChange={setDate}
            mode="time"
            is24hourSource="device"
          />
        </View>
        <View style={{paddingBottom: '13%'}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Button btnText={'Cancel'} backgroundColor={'black'}></Button>
          <Button btnText={'Submit'}></Button>
        </View>
        <View style={{paddingBottom: '14%'}} />
      </ScrollView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(239, 247, 255, 1)',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  image: {
    width: 25,
    height: 25,
  },
  image1: {
    width: 110,
    height: 110,
    padding: 10,
  },
  bellContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    // padding: 16,
  },
  scrollContent: {
    // flexDirection: 'row',
  },
  scrollItem: {
    // width: 190,
    // height: 180,
    // backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  arrowButton: {
    paddingHorizontal: 16,
  },
  players: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // marginTop: 5,
  },
  timers: {
    display: 'flex',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  timer: {
    fontSize: 28,
    color: 'black',
    fontWeight: '700',
  },
});

// make this component available to the app
export default AddBell;
