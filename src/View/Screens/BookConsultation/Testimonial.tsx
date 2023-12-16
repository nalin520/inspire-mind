//import liraries
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// create a component
const DATA = [
  {
    id: 0,
    name: 'Morning Routines',
    image: require('../../../Assets/Img/Sun.png'),
  },
  {
    id: 1,
    name: 'Stress',
    image: require('../../../Assets/Img/moon.png'),
  },
  {
    id: 2,
    name: 'Sleep',
    image: require('../../../Assets/Img/sleep.png'),
  },
  {
    id: 3,
    name: 'Anxiety',
    image: require('../../../Assets/Img/head.png'),
  },
  {
    id: 4,
    name: 'Parenting',
    image: require('../../../Assets/Img/group.png'),
  },
  {
    id: 5,
    name: 'Religion',
    image: require('../../../Assets/Img/hand.png'),
  },
];
const Testimonial = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        {DATA.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color="#ffce00" />
              <Ionicons name="star" size={18} color="#ffce00" />
              <Ionicons name="star" size={18} color="#ffce00" />
              <Ionicons name="star" size={18} color="#ffce00" />
              <Ionicons name="star" size={18} color="#5c5c5c" />
            </View>
            <Text style={styles.content}>
              A Board Certified Family Doctor with seven years of clinical
              experience, specializing in patient care, case management, family
              medicine, and communication.
            </Text>
            <View style={styles.userContainer}>
              <AntDesign name="user" size={16} color="#5c5c5c" />
              <Text style={styles.userName}>Jhon Doe</Text>
            </View>
          </View>
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
  card: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    backgroundColor: '#EFF7FF',
    borderRadius: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 14,
  },
  content: {
    color: '#000000',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  userName: {
    fontFamily: 'Inter-Bold',
    color: '#5c5c5c',
    fontSize: 14,
  },
});

//make this component available to the app
export default Testimonial;
