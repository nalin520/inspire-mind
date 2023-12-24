import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ConsultationProfile from '../View/Screens/BookConsultation/ConsultationProfile';
import Course from '../View/Screens/BookConsultation/Course';
import About from '../View/Screens/BookConsultation/About';
// import Content from '../View/Screens/BookConsultation/Contents';
import Testimonial from '../View/Screens/BookConsultation/Testimonial';
import Contents from '../View/Screens/BookConsultation/Contents';
import Event from '../View/Screens/BookConsultation/Event';
import {Color} from '../styles/globalStyle';
import ProfileCard from '../View/Components/ProfileCard';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Sleep from '../View/Screens/Sleep/Sleep';
import Events from '../View/Screens/Sleep/Events';
import Track from '../View/Screens/Sleep/Track';
import Video from '../View/Screens/Sleep/Video';
import Classes from '../View/Screens/Sleep/Classes';
import CustomHeader from '../View/Components/CustomHeader';
import Reading from '../View/Screens/Sleep/Reading';
const Tab = createMaterialTopTabNavigator();

const SleepTab = () => {
  return (
    <>
      <CustomHeader />
      <SafeAreaView style={styles.root}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Inter-Bold',
            color: 'black',
            paddingHorizontal: 15,
          }}>
          Sleep
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Inter-Light',
            color: '#9C9C9C',
            paddingHorizontal: 15,
            marginTop: -2,
          }}>
          Activities that help you get better sleep
        </Text>
        <View style={styles.container}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 15,
                fontFamily: 'Inter-Bold',
                textTransform: 'none',
                fontWeight: '600',
              },
              lazy: true,
              tabBarItemStyle: {width: 'auto'},
              tabBarScrollEnabled: true,
              tabBarActiveTintColor: Color.colorMediumblue,
              tabBarInactiveTintColor: '#424242',
            }}>
            <Tab.Screen name="SLEEP" component={Sleep} />
            <Tab.Screen name="EVENTS" component={Events} />
            <Tab.Screen name="TRACK" component={Track} />
            <Tab.Screen name="VIDEO" component={Video} />
            <Tab.Screen name="CLASSES" component={Classes} />
            <Tab.Screen name="READING" component={Reading} />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
});

export default SleepTab;
