//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Color, FontFamily} from '../../styles/globalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component
const EventCourseCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={require('../../Assets/Img/sleepcardImg.png')}
        />
        <View style={styles.playIconContainer}>
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={20}
            color="#fff"
          />
        </View>
        <View style={styles.bookmarkIconContainer}>
          <View style={styles.bookMark}>
            <Ionicons name="bookmark-outline" size={18} color={'#fff'} />
          </View>
        </View>
      </View>

      <View style={styles.docImgView}>
        <Image
          style={styles.docImg}
          source={require('../../Assets/Img/doctorphoto.png')}
        />
        <View>
          <Text style={styles.jhoneDoeText}>John Due</Text>
          <Text>
            <Ionicons color={'#fff'} name="star" size={10} />
            <Text style={styles.rating}>4.5</Text>
          </Text>
        </View>

        {/* <View>
        //  
          <View style={styles.dateTextView}>
            <Text style={styles.dateText}>20 JULY 2023</Text>
            <Text style={styles.dateText}>09 : 30 PM</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>ATTEND</Text>
        </TouchableOpacity> */}
      </View>
      <Text style={styles.text}>The Science of overcoming inover</Text>
      <Text style={styles.tenDay}>10 day Course</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    // alignSelf: 'center',
    paddingHorizontal: 15,
    // paddingVertical: 20,
    paddingBottom: 10,
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  text: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -4,
  },
  dateText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: '#D8E6F3',
    marginRight: 8,
    borderRadius: 9,
  },
  dateTextView: {
    flexDirection: 'row',
    marginTop: 8,
  },
  btn: {
    borderColor: Color.colorMediumblue,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 1,
    marginLeft: -85,
  },
  btnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: Color.colorMediumblue,
    fontWeight: '500',
  },
  playIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 23,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bookmarkIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 20,
    position: 'absolute',
    bottom: -6,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bookMark: {
    // width: 32,
    // height: 32,
    borderRadius: 20,
    // borderColor: 'black',
    // borderWidth: 1,
    padding: 8,
    backgroundColor: Color.colorMediumblue,
  },
  docImgView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -67,
    marginLeft: 5,
  },
  docImg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 6,
    // backgroundColor: 'red',
  },
  jhoneDoeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#fff',
  },
  rating: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#fff',
  },
  tenDay: {
    fontSize: 13,
    color: 'rgba(156, 156, 156, 1)',
    fontFamily: FontFamily.interRegular,
  },
});

//make this component available to the app
export default EventCourseCard;
