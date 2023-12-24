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
import ProfileHeader from '../View/Components/ProfileHeader';
import Courses from '../View/Screens/Events/Courses';
import EventReading from '../View/Screens/Events/EventReading';
import Playlist from '../View/Screens/Events/Playlist';
import RecentActivity from '../View/Screens/Events/RecentActivity';
const Tab = createMaterialTopTabNavigator();

const EventTab = () => {
  return (
    <>
      <ProfileHeader name={'Bookmark'} />
      <SafeAreaView style={styles.root}>
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
            <Tab.Screen name="COURSES" component={Courses} />
            <Tab.Screen name="READING" component={EventReading} />
            <Tab.Screen name="PLAYLIST" component={Playlist} />
            <Tab.Screen name="RESENT ACTIVITY" component={RecentActivity} />
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

export default EventTab;
