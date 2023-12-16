//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SleepEventCard from '../../Components/SleepEventCard';
const data = [
  {
    id: 0,
    name: 'Morning Routines',
    image: require('../../../Assets/Img/Sun.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 1,
    name: 'Stress',
    image: require('../../../Assets/Img/moon.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 2,
    name: 'Sleep',
    image: require('../../../Assets/Img/sleep.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 3,
    name: 'Anxiety',
    image: require('../../../Assets/Img/head.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 4,
    name: 'Parenting',
    image: require('../../../Assets/Img/group.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 5,
    name: 'Religion',
    image: require('../../../Assets/Img/hand.png'),
    tags: ['Yoga', 'Meditation'],
  },
];
// create a component
const Events = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map(item => (
        <SleepEventCard />
      ))}
      <View style={{paddingBottom: 30}} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});

//make this component available to the app
export default Events;
