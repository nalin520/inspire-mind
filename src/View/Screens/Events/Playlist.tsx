import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import ConsultationCard from '../../Components/ConsultationCard';
import {Color} from '../../../styles/globalStyle';

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
const EventReading = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        {data.map(item => (
          <ConsultationCard
            key={item.id}
            rating="4.5"
            tags={item.tags}
            title={item.name}
            bookmarkBackgroundColor="rgba(42, 46, 236, 1)"
            bookmarkColor={'rgba(42, 46, 236, 1)'}
            bookmarkIconColor={Color.colorWhite}
            videoText="50 MIN"
            playBtnColor="rgba(0, 0, 0, 1)"
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
export default EventReading;
