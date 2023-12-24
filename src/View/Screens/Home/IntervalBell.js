//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import ProfileHeader from '../../Components/ProfileHeader';
import Entypo from 'react-native-vector-icons/Entypo';

// create a component
const IntervalBell = () => {
  return (
    <>
      <ProfileHeader name={'Interval Bell'} />
      <View style={styles.container}>
        <View style={styles.box}>
          <Entypo name="plus" size={40} />
          <Text style={{fontSize: 20}}> Add Bell</Text>
        </View>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderWidth: 1, // Border width
    borderColor: '#909090',
    borderStyle: 'dashed', // Border style to create dashed effect
    padding: 16,
    borderRadius: 20,
    height: 150,
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default IntervalBell;
