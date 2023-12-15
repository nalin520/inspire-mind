//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// create a component
const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontFamily: 'Inter-Bold', color: 'black'}}>
          Good Afternoon
        </Text>
        <Text>Hi, John Due</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '20%',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MaterialTabViewStack')}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../../Assets/Img/bell.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../../Assets/Img/user_profile.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default HomeHeader;
