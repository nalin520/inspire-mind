//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component
const ConsultationCard = ({video}) => {
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
      <View style={{marginLeft: 12}}>
        <Text>
          <Ionicons name="star" color={'gray'} />{' '}
          <Text style={{color: 'gray', fontSize: 13}}>4.5</Text>{' '}
          <Text>{video}</Text>
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: 'Inter-Bold',
            color: '#424242',
            fontSize: 15,
            width: '60%',
          }}>
          Relaxtion & Sleep
        </Text>
        <View
          style={{
            width: '65%',
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
            <Text
              style={{
                fontSize: 11,
                color: 'black',
                fontFamily: 'Inter-Medium',
              }}>
              Yoga
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 5,
              paddingVertical: 5,
              backgroundColor: '#D8E6F3',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 11,
                color: 'black',
                fontFamily: 'Inter-Medium',
              }}>
              Meditaion
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
});

//make this component available to the app
export default ConsultationCard;
