import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ConsultationProfile from '../View/Screens/BookConsultation/ConsultationProfile';
import Course from '../View/Screens/BookConsultation/Course';
import About from '../View/Screens/BookConsultation/About';
import Content from '../View/Screens/BookConsultation/Contents';
import Testimonial from '../View/Screens/BookConsultation/Testimonial';
import Contents from '../View/Screens/BookConsultation/Contents';
import Event from '../View/Screens/BookConsultation/Event';

const Tab = createMaterialTopTabNavigator();

const MaterialTabViewStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Inter-Bold',
          color: '#424242',
          paddingBottom: -20,
        },
        // tabBarItemStyle: { width: 100 },
        // tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Event" component={Event} />

      <Tab.Screen name="Content" component={Contents} />
      <Tab.Screen name="Testimonial" component={Testimonial} />
    </Tab.Navigator>
  );
};
export default MaterialTabViewStack;
