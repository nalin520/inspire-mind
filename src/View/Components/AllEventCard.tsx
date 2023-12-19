//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Color, FontFamily} from '../../styles/globalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
// create a component
const AllEventCard = () => {
  const navigation = useNavigation();
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: -56,
          marginLeft: 10,
          marginBottom: 15,
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            paddingVertical: 7,
            backgroundColor: 'rgba(42, 46, 236, 1)',
            borderRadius: 7,
            marginRight: 7,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              fontFamily: FontFamily.interRegular,
            }}>
            <Ionicons name="videocam-outline" size={14} /> Live Event
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            paddingVertical: 7,
            backgroundColor: 'rgba(255, 255, 255, 0.78)',
            borderRadius: 7,
            marginRight: 7,
          }}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 1)',
              fontSize: 12,
              fontFamily: FontFamily.interSemiBold,
            }}>
            Paid
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text>
            <Ionicons size={12} name="star" color={'gray'} />
            <Text style={styles.rating}>20 jULY 2023 | 09:30 PM | </Text>
            <Text style={styles.rating}>
              <Ionicons name="language-outline" size={12} />
              {`  English`}
            </Text>
          </Text>
          <Text style={styles.text}>Bedtime Routine Ideas for a Be</Text>
        </View>
        {/* <View style={styles.bookmarkIconContainer}> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('event_eventTab')}
          style={styles.bookMark}>
          <Ionicons name="bookmark-outline" size={18} color={'black'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <View style={styles.chipContainer}>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>Meditation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>Yoga</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.ATTENDbtn}>
          <Text style={styles.ATTENDbtnText}>ATTEND</Text>
        </TouchableOpacity>
      </View>
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
    // paddingHorizontal: 15,
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
    fontSize: 15,
    marginTop: 5,
    color: 'black',
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
    // position: 'absolute',
    // bottom: -6,
    // right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bookMark: {
    // width: 32,
    // height: 32,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  rating: {
    color: '#9c9c9c',
    fontSize: 15,
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: '#424242',
    fontSize: 15,
    marginBottom: 4,
  },
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#D8E6F3',
    borderRadius: 9,
  },
  chipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    alignItems: 'center',
  },
  ATTENDbtn: {
    backgroundColor: Color.colorMediumblue,
    paddingVertical: 7,
    paddingHorizontal: 19,
    borderRadius: 9,
  },
  ATTENDbtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: Color.colorWhite,
    fontWeight: '500',
  },
});

//make this component available to the app
export default AllEventCard;
