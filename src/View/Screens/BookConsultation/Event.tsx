//import liraries
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import EventCard from '../../Components/EventCard';

const data = [
  {
    id: 0,
    name: 'Morning Routines',
    image: require('../../../Assets/Img/Sun.png'),
    tags: ['Yoga', 'Meditation'],
    date: '20 JULY 2023',
    time: '09:30 PM',
  },
  {
    id: 1,
    name: 'Stress',
    image: require('../../../Assets/Img/moon.png'),
    tags: ['Yoga', 'Meditation'],
    date: '20 JULY 2023',
    time: '09:30 PM',
  },
  {
    id: 2,
    name: 'Sleep',
    image: require('../../../Assets/Img/sleep.png'),
    tags: ['Yoga', 'Meditation'],
    date: '20 JULY 2023',
    time: '09:30 PM',
  },
  {
    id: 3,
    name: 'Anxiety',
    image: require('../../../Assets/Img/head.png'),
    tags: ['Yoga', 'Meditation'],
    date: '20 JULY 2023',
    time: '09:30 PM',
  },
  {
    id: 4,
    name: 'Parenting',
    image: require('../../../Assets/Img/group.png'),
    tags: ['Yoga', 'Meditation'],
    date: '20 JULY 2023',
    time: '09:30 PM',
  },
  {
    id: 5,
    name: 'Religion',
    image: require('../../../Assets/Img/hand.png'),
    tags: ['Yoga', 'Meditation'],
    date: '20 JULY 2023',
    time: '09:30 PM',
  },
];
// create a component
const Event = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        {data.map(item => (
          <EventCard
            key={item.id}
            tags={item.tags}
            title={item.name}
            date={item.date}
            time={item.time}
          />
        ))}
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  list: {
    gap: 10,
    paddingVertical: 16,
  },
});

//make this component available to the app
export default Event;
