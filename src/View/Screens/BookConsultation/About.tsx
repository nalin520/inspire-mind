//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ConsultationCard from '../../Components/ConsultationCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// create a component
const About = () => {
  return (
    <View style={styles.container}>
      {/* <ConsultationCard /> */}
      <Text
        style={{
          backgroundColor: '#EFF7FF',
          padding: 10,
          borderRadius: 10,
          // fontSize: 11,
          color: 'black',
          fontFamily: 'Inter-Regular',
        }}>
        A Board Certified Family Doctor with seven years of clinical experience,
        specializing in patient care, case management, family medicine, and
        communication.
      </Text>
      <View
        style={{
          backgroundColor: '#EFF7FF',
          padding: 10,
          borderRadius: 10,
          marginTop: 15,
          width: '100%',
        }}>
        <Text>
          {' '}
          <Ionicons name="location" /> 1 Forest Drive, Washington
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '70%',
            marginTop: 7,
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 5,
              paddingVertical: 4,
              backgroundColor: '#D8E6F3',
              borderRadius: 5,
            }}>
            <Text style={{color: 'black', fontFamily: 'Inter-Regular'}}>
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 5,
              paddingVertical: 4,
              backgroundColor: '#D8E6F3',
              borderRadius: 5,
            }}>
            <Text style={{color: 'black', fontFamily: 'Inter-Regular'}}>
              French
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 5,
              paddingVertical: 4,
              backgroundColor: '#D8E6F3',
              borderRadius: 5,
            }}>
            <Text style={{color: 'black', fontFamily: 'Inter-Regular'}}>
              Persian
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          backgroundColor: '#EFF7FF',
          padding: 10,
          borderRadius: 10,
          fontFamily: 'Inter-SemiBold',
          color: '#424242',
          marginTop: 10,
        }}>
        10+ Years
      </Text>
      <View
        style={{
          backgroundColor: '#EFF7FF',
          padding: 10,
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontFamily: 'Inter-SemiBold', color: '#424242'}}>
          <Entypo name="graduation-cap" style={{alignSelf: 'center'}} />
          {''}
          {`  `}GTU at BE Computer
        </Text>
        <Text>{`     `}08/02/2023 - 08/02/2023</Text>
        <View style={{borderBottomWidth: 0.4, paddingBottom: 8}} />
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#424242',
            marginTop: 5,
          }}>
          <Entypo name="graduation-cap" style={{alignSelf: 'center'}} />
          {''}
          {`  `}GTU at BE Computer
        </Text>
        <Text>{`     `}08/02/2023 - 08/02/2023</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default About;
