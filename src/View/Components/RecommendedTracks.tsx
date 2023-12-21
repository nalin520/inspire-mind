//import liraries
import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {wp} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {Color, FontFamily} from '../../styles/globalStyle';
import Button from './Button';

// create a component
const RecommendedTracks = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{marginRight: 10}}
          source={require('../../Assets/Img/doctorphoto.png')}
        />
        <Image
          style={{position: 'absolute', left: 50, top: -2}}
          source={require('../../Assets/Img/veifytick.png')}
        />
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 12,
          fontFamily: FontFamily.interBold,
          marginLeft: 5,
          marginBottom: 5,
        }}>
        Dr Antanas Due
      </Text>
      <View style={styles.chipContainer}>
        {['Yoga', 'Meditaion']?.map(tag => (
          <TouchableOpacity style={styles.chip} key={tag}>
            <Text style={styles.chipText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Consultant</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 247, 255, 1)',
    width: '23%',
    padding: 10,
    borderRadius: 12,
    marginRight: wp(5),
    paddingVertical: wp(5),
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    alignItems: 'center',
  },
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#D8E6F3',
    borderRadius: 5,
  },
  chipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    fontWeight: '500',
    color: 'black',
  },
  btn: {
    borderColor: Color.colorMediumblue,
    paddingVertical: wp(1.5),
    // paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: wp(2),
    backgroundColor: Color.colorMediumblue,
    // marginLeft: -85,
  },
  btnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: Color.colorWhite,
    fontWeight: '500',
  },
});

//make this component available to the app
export default RecommendedTracks;
