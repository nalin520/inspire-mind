//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../styles/globalStyle';

interface IEventCard {
  title: string;
  tags: string[];
  date: string;
  time: string;
}

// create a component
const EventCard = ({date, time, tags, title}: IEventCard) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../Assets/Img/videoImage.png')} />
        <View style={styles.playIconContainer}>
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={20}
            color="#fff"
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.chipContainer}>
          {tags?.map(tag => (
            <TouchableOpacity style={styles.chip} key={tag}>
              <Text style={styles.chipText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.footerContainer}>
          <View style={styles.timeContainer}>
            <Ionicons size={20} name="calendar-outline" color="gray" />
            <View>
              <Text style={styles.dateTime}>{date}</Text>
              <Text style={styles.dateTime}>{time}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>ATTEND</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bookmarkIconContainer}>
          <Ionicons name="bookmark-outline" size={18} color={'gray'} />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eff7ff',
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    borderRadius: 11,
  },
  imgContainer: {
    position: 'relative',
    height: 90,
    width: 110,
    borderRadius: 10,
    overflow: 'hidden',
  },
  playIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    flex: 1,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    alignItems: 'center',
    marginBottom: 6,
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
  title: {
    fontFamily: 'Inter-Bold',
    color: '#424242',
    fontSize: 14,
    marginBottom: 4,
  },
  bookmarkIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    top: 0,
    right: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateTime: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#9c9c9c',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  btn: {
    backgroundColor: Color.colorMediumblue,
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 8,
  },
  btnText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#fff',
    fontWeight: '500',
  },
});

//make this component available to the app
export default EventCard;
