//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import ProfileHeader from '../../Components/ProfileHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../Components/Button';

// create a component
const Timer = () => {
  return (
    <>
      {/* <ProfileHeader name={'Start Timer'} /> */}
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={{fontSize: 85, fontWeight: '100', fontStyle: 'Inter'}}>
            05:00
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Button btnText={'Cancel'} backgroundColor={'black'}></Button>
          <Button btnText={'Submit'}></Button>
        </View>
        <View style={{paddingBottom: '13%'}} />
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
    //     borderWidth: 1, // Border width
    backgroundColor: 'rgba(239, 247, 255, 1)',
    padding: 16,
    borderRadius: 240,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Timer;
