//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Slider from '@react-native-community/slider';
import Button from '../../Components/Button';
// create a component
const DATA = [
  {
    id: 0,
    name: 'Morning Routines',
    image: require('../../../Assets/Img/Sun.png'),
  },
  {
    id: 1,
    name: 'Stress',
    image: require('../../../Assets/Img/moon.png'),
  },
  {
    id: 2,
    name: 'Sleep',
    image: require('../../../Assets/Img/sleep.png'),
  },
  {
    id: 3,
    name: 'Anxiety',
    image: require('../../../Assets/Img/head.png'),
  },
  {
    id: 4,
    name: 'Parenting',
    image: require('../../../Assets/Img/group.png'),
  },
  {
    id: 5,
    name: 'Religion',
    image: require('../../../Assets/Img/hand.png'),
  },
];
const Question = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <Slider
        style={{width: '100%', height: 40, borderWidth: 3}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#2A2EEC"
        maximumTrackTintColor="#000000"
        thumbTintColor={'#2A2EEC'}
      />
      <View style={{paddingHorizontal: 20, marginVertical: 20}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 22,
            marginBottom: 15,
            color: 'black',
          }}>
          You Are Here For...
        </Text>

        {DATA.map(item => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#EFF7FF',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Image
              style={{height: 40, width: 40, resizeMode: 'contain'}}
              source={item.image}
            />
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                fontSize: 14,
                marginBottom: 10,
                color: 'gray',
                marginLeft: 30,
              }}>
              {item.name}
            </Text>
          </View>
        ))}
        <Button btnText={'Save'} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    padding: 15,
  },
});

//make this component available to the app
export default Question;
