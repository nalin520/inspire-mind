//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component
const ProfileHeader = ({onPress, source, name}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
      <Text style={{fontFamily: 'Inter-Bold', color: '#424242'}}>{name}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image style={{height: 20, width: 20}} source={source} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    // borderTopColor: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(216, 230, 243, 1)',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ProfileHeader;
