//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component
const EventCard = ({video}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          //   style={{height: 120, width: 120, resizeMode: 'contain'}}
          source={require('../../Assets/Img/videoImage.png')}
        />
        <Ionicons
          name="play-outline"
          size={25}
          color={'#fff'}
          style={{position: 'absolute', bottom: 3, left: 4}}
        />
      </View>
      <View style={{marginLeft: 12, width: '65%'}}>
        <View
          style={{
            width: '45%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 5,
              paddingVertical: 5,
              backgroundColor: '#D8E6F3',
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 8}}>Yoga</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 5,
              paddingVertical: 5,
              backgroundColor: '#D8E6F3',
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 8}}>Meditaion</Text>
          </TouchableOpacity>
        </View>

        <Text
          numberOfLines={1}
          style={{
            fontFamily: 'Inter-Bold',
            color: '#424242',
            marginTop: 3,
            width: '60%',
            fontSize: 13,
          }}>
          Relaxtion & Sleep
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 3,
            justifyContent: 'space-evenly',
            width: '90%',
          }}>
          <Ionicons size={15} name="calendar-outline" />
          <View>
            <Text style={{fontSize: 10}}>20 jULY 2023</Text>
            <Text style={{fontSize: 10}}>09:30 PM</Text>
          </View>
          <TouchableOpacity style={[styles.btncontainer]}>
            <Text
              style={{color: '#fff', fontFamily: 'Inter-Bold', fontSize: 12}}>
              ATTEND
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{
            position: 'absolute',
            height: 35,
            width: 35,
            resizeMode: 'contain',
            top: 0,
            right: '10%',
          }}
          source={require('../../Assets/Img/consult.png')}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 10,
  },
  btncontainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2A2EEC',
    // marginVertical: 10,

    paddingVertical: 3,
    alignItems: 'center',

    borderRadius: 5,
    paddingHorizontal: 5,
  },
});

//make this component available to the app
export default EventCard;
