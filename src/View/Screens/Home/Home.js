//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeHeader from '../../Components/HomeHeader';

// create a component
const Home = () => {
  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Home;
