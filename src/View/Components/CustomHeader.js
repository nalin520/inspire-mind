//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {wp} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
// create a component
const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingHorizontal: 10,
    paddingTop: wp(4),
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default CustomHeader;
