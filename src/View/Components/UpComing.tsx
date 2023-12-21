import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeText} from './NativeText';
import {BlankSpacer} from './BlankSpacer';
import {Image} from 'react-native';
import {images} from '../../Utils/images';
import {hp, wp, fs} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {useColorController} from '../../Controller/Color/useColorController';
import {ColorName} from '../../Controller/Color/ColorName';
import {FlatList} from 'react-native-gesture-handler';
import {FontFamily} from '../../styles/globalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const UpComingEvent = ({
  headerDisable,
  ftrBtnTxt1,
  ftrBtnTxt2,
  ftrBtnTxt3,
  date,
  liveEvent,
  inImgBtn,
  horizontal,
}) => {
  const {getColor} = useColorController();
  const data = [
    {
      id: '1',
      title: 'Event 1',
      image: images.Other1,
    },
    {
      id: '2',
      title: 'Event 2',
      image: images.Other1,
    },
    // Add more items as needed
  ];
  const renderItem = ({item}) => (
    <View style={{padding: 11, alignSelf: 'center'}}>
      <View>
        <Image
          source={images.Other1}
          style={{
            width: wp(90),
            resizeMode: 'stretch',
            height: hp(30),
            borderRadius: wp(2),
          }}
        />
        {inImgBtn && (
          <>
            <View style={styles.playIconContainer}>
              <MaterialCommunityIcons
                name="arrow-top-right"
                size={20}
                color="#fff"
              />
            </View>
            <View style={styles.bookmarkIconContainer}>
              <View style={styles.bookMark}>
                <Ionicons name="bookmark-outline" size={18} color={'black'} />
              </View>
            </View>
          </>
        )}
      </View>

      <BlankSpacer height={hp(1)} />
      {liveEvent && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            paddingVertical: 7,
            backgroundColor: 'rgba(42, 46, 236, 1)',
            borderRadius: 7,
            marginRight: 7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35%',
            marginTop: wp(-13),
            marginLeft: wp(2),
            marginBottom: wp(4),
          }}>
          <Ionicons color={'#fff'} name="videocam-outline" size={14} />
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              fontFamily: FontFamily.interRegular,
              marginLeft: 5,
            }}>
            Live Event
          </Text>
        </TouchableOpacity>
      )}
      <NativeText
        text="Bedtime Routine For A Better Night's Sleep"
        style={styles.eventTitle}
      />
      <BlankSpacer height={hp(1)} />
      {date && (
        <NativeText
          text="20 JULY 2023 | 09:30 PM"
          style={{
            fontSize: fs(4),
            color: getColor(ColorName.secondary_002),
          }}
        />
      )}
      <BlankSpacer height={hp(1)} />
      <View style={{flexDirection: 'row', width: wp(90)}}>
        <NativeText
          text={ftrBtnTxt1 ? ftrBtnTxt1 : 'Yoga'}
          style={styles.eventTag}
        />
        <BlankSpacer width={wp(2)} />
        <NativeText
          text={ftrBtnTxt2 ? ftrBtnTxt2 : 'Meditation'}
          style={styles.eventTag}
        />
        <NativeText
          text={ftrBtnTxt3 ? ftrBtnTxt3 : 'ATTEND'}
          style={styles.eventSchudele}
        />
      </View>
    </View>
  );
  return (
    <View style={{backgroundColor: '#fff'}}>
      {!headerDisable && (
        <>
          <NativeText text="Upcomming Event" style={styles.EventTitle} />
          <BlankSpacer height={hp(2)} />
          <View style={{flexDirection: 'row'}}>
            <NativeText text="Today" style={styles.EventTypeActive} />
            <BlankSpacer width={wp(2)} />
            <NativeText text="This Week" style={styles.EventType} />
            <BlankSpacer width={wp(2)} />
            <NativeText text="Next Week" style={styles.EventType} />
          </View>
        </>
      )}
      <BlankSpacer height={wp(3)} />
      <FlatList
        data={data}
        horizontal={horizontal ? false : true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  welcomeHead: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
  welcomeSubHead: {
    fontSize: 15,
    fontWeight: '500',
    color: '#9C9C9C',
  },
  EventTitle: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
  EventTypeActive: {
    fontSize: fs(4),
    backgroundColor: '#2A2EEC',
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.5),
    borderRadius: wp(2),
    color: '#fff',
  },
  EventType: {
    fontSize: fs(4),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.5),
    borderRadius: wp(2),
    color: '#9C9C9C',
    borderColor: '#9C9C9C',
    borderWidth: 1,
  },
  eventTag: {
    fontSize: fs(4),
    color: '#000',
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    backgroundColor: '#D8E6F3',
  },
  eventSchudele: {
    zIndex: -1,
    fontSize: fs(4),
    position: 'absolute',
    right: 0,
    color: '#fff',
    borderRadius: wp(2),
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    backgroundColor: '#2A2EEC',
  },
  eventTitle: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
  },
  playIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: wp(1),
    right: wp(1),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bookmarkIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 20,
    position: 'absolute',
    bottom: wp(-5),
    right: wp(1),
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
});
export default UpComingEvent;
