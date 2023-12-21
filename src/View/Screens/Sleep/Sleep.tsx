//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import HomeCard from '../../Components/HomeCard';
import UpCommingEvent from '../../Components/UpCommingEvent';
import UpComingEvent from '../../Components/UpComing';
import Recommedation from '../../Components/Recommedation';
import {NativeText} from '../../Components/NativeText';
import EventCourseCard from '../../Components/EventCourseCard';
import {Color, FontFamily} from '../../../styles/globalStyle';
import {wp} from '../../../Adapter/ReactNativeResponsiveScreen/Responsive';
import ConsultationCard from '../../Components/ConsultationCard';
const data2 = [
  {
    id: 0,
    name: 'Morning Routines',
    image: require('../../../Assets/Img/link.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 1,
    name: 'Stress',
    image: require('../../../Assets/Img/whatsapp.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 2,
    name: 'Sleep',
    image: require('../../../Assets/Img/twitter.png'),
    tags: ['Yoga', 'Meditation'],
  },

  {
    id: 3,
    name: 'Anxiety',
    image: require('../../../Assets/Img/instagram.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 4,
    name: 'Anxiety',
    image: require('../../../Assets/Img/more.png'),
    tags: ['Yoga', 'Meditation'],
  },
];
// create a component
const Sleep = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <UpComingEvent
        ftrBtnTxt1="20 jULY 2023"
        ftrBtnTxt2="09 : 30 pM"
        headerDisable={'true'}
        liveEvent
        inImgBtn
        horizontal
      />
      <NativeText
        text="Popular Class"
        style={{
          fontFamily: FontFamily.interBold,
          color: Color.colorBlack,
          paddingHorizontal: wp(5),
          paddingTop: wp(5),
          borderTopWidth: 0.8,
          // marginHorizontal: wp(5),
          marginTop: wp(4),
          borderColor: 'rgba(239, 239, 239, 1)',
        }}
      />
      <FlatList data={data2} renderItem={() => <EventCourseCard />} />
      <NativeText
        text="Popular Videos"
        style={{
          fontFamily: FontFamily.interBold,
          color: Color.colorBlack,
          paddingHorizontal: wp(5),
          paddingTop: wp(5),
          borderTopWidth: 0.8,
          // marginHorizontal: wp(5),
          marginTop: wp(3),
          borderColor: 'rgba(239, 239, 239, 1)',
        }}
      />
      <View style={styles.list}>
        {data2.map(item => (
          <ConsultationCard
            key={item.id}
            rating=" 4.5"
            tags={item.tags}
            title={item.name}
            videoText="  50 MIN"
          />
        ))}
      </View>
      <NativeText
        text="Trending"
        style={{
          fontFamily: FontFamily.interBold,
          color: Color.colorBlack,
          paddingHorizontal: wp(5),
          paddingTop: wp(5),
          borderTopWidth: 0.8,
          // marginHorizontal: wp(5),
          marginTop: wp(3),
          borderColor: 'rgba(239, 239, 239, 1)',
        }}
      />
      <View style={styles.list}>
        {data2.map(item => (
          <ConsultationCard
            key={item.id}
            rating=" 4.5"
            tags={item.tags}
            title={item.name}
            videoText="  50 MIN"
          />
        ))}
      </View>
      <NativeText
        text="Recently Played"
        style={{
          fontFamily: FontFamily.interBold,
          color: Color.colorBlack,
          paddingHorizontal: wp(5),
          paddingTop: wp(5),
          borderTopWidth: 0.8,
          // marginHorizontal: wp(5),
          marginTop: wp(3),
          borderColor: 'rgba(239, 239, 239, 1)',
        }}
      />
      <View style={styles.list}>
        {data2.map(item => (
          <ConsultationCard
            key={item.id}
            rating=" 4.5"
            tags={item.tags}
            title={item.name}
            videoText="  50 MIN"
          />
        ))}
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  list: {
    gap: 10,
    paddingVertical: 16,
    paddingHorizontal: wp(5),
  },
});

//make this component available to the app
export default Sleep;
