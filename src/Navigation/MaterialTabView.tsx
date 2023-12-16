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
import {SafeAreaView, StyleSheet, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const MaterialTabViewStack = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ProfileCard showFollower />
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 13,
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
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Course" component={Course} />
          <Tab.Screen name="Event" component={Event} />
          <Tab.Screen name="Content" component={Contents} />
          <Tab.Screen name="Testimonial" component={Testimonial} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
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

export default MaterialTabViewStack;
