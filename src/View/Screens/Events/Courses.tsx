//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import EventCourseCard from '../../Components/EventCourseCard';
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
const Courses = () => {
  return (
    <View style={styles.container}>
      <FlatList data={data2} renderItem={() => <EventCourseCard />} />
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
    paddingTop: 15,
  },
});

//make this component available to the app
export default Courses;
