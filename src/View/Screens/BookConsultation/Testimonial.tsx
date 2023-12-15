//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ConsultationCard from '../../Components/ConsultationCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
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
      {/* <ConsultationCard /> */}
      {DATA.map(item => (
        <View
          style={{
            backgroundColor: '#EFF7FF',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <Image
            style={{
              // height: 80,
              // width: 80,
              // resizeMode: 'contain',
              // marginTop: -30,
              marginBottom: 10,
            }}
            source={require('../../../Assets/Img/rating.png')}
          />
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Inter-Medium',
            }}>
            A Board Certified Family Doctor with seven years of clinical
            experience, specializing in patient care, case management, family
            medicine, and communication.
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Ionicons name="person-outline" size={18} />
            <Text style={{fontFamily: 'Inter-Bold', color: '#424242'}}>
              {` `} Jhon Doe
            </Text>
          </View>
        </View>
      ))}
      <View style={{paddingBottom: 30}} />
    </ScrollView>
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
export default Testimonial;
