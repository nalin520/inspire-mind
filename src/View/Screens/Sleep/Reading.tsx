//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ConsultationCard from '../../Components/ConsultationCard';
const data = [
  {
    id: 0,
    name: 'Sort',
  },
  {
    id: 1,
    name: 'Length',
  },
  {
    id: 2,
    name: 'Filter',
  },
  {
    id: 3,
    name: 'Bookmark',
  },
];
const data2 = [
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
const Reading = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.btnContainer}>
        {data.map(item => (
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.btnText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.list}>
        {data2.map(item => (
          <ConsultationCard
            key={item.id}
            rating="4.5"
            tags={item.tags}
            title={item.name}
            value={'true'}
            bookmarkColor={'black'}
            onPress={() => navigation?.navigate('details')}
          />
        ))}
      </View>
      <View style={{paddingBottom: 30}} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  btnView: {
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 7,
    marginRight: 15,
  },

  btnContainer: {},
  btnText: {
    fontFamily: 'Inter-Light',
    color: 'black',
    fontSize: 14,
  },
  list: {
    gap: 12,
    paddingVertical: 16,
  },
});

//make this component available to the app
export default Reading;
