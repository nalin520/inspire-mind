import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ProfileHeader from '../../Components/ProfileHeader';

const PreferededPlan = () => {
  const navigation = useNavigation();

  return (
    <>
      <ProfileHeader name={'Prefered Plan'} />
      <View style={styles.container}>
        {/* <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowContainer}>
          <Image
            style={styles.arrow}
            source={require('../../../Assets/Img/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.preferredPlanText}>Prefered Plans</Text>
      </View> */}

        <View style={styles.horizontalLine} />
        <View style={styles.boxContainer}>
          <View style={styles.top}>
            <Text style={styles.topText}>Weight Loss Plan</Text>
            <Text style={styles.topText}>₹ 600</Text>
          </View>
          <View style={styles.horizontalLine1} />
          <View style={styles.middle}>
            <Text style={styles.middleText}>
              Post Consultants (Included) :{' '}
              <Text style={{fontWeight: 'bold', color: 'black'}}> S Yes</Text>
            </Text>
            <Text style={styles.middleText}>✓ 3 Consultants</Text>
            <Text style={styles.middleText}>
              <AntDesign name="clockcircleo" /> 30 Minutes
            </Text>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#2A2EEC'}]}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    backgroundColor: '#2A2EEC',
                    fontWeight: '500',
                    fontSize: 15,
                  },
                ]}>
                + Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.top}>
            <Text style={styles.topText}>Weight Loss Plan</Text>
            <Text style={styles.topText}>₹ 600</Text>
          </View>
          <View style={styles.horizontalLine1} />
          <View style={styles.middle}>
            <Text style={styles.middleText}>
              Post Consultants (Included) :{' '}
              <Text style={{fontWeight: 'bold', color: 'black'}}> S Yes</Text>
            </Text>
            <Text style={styles.middleText}>✓ 3 Consultants</Text>
            <Text style={styles.middleText}>O 30 Minutes</Text>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#2A2EEC'}]}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    backgroundColor: '#2A2EEC',
                    fontWeight: '500',
                    fontSize: 15,
                  },
                ]}>
                + Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 10,
    // borderWidth: 2, // Border width
    // borderColor: 'blue', // Border color
    // borderRadius: 10,
  },
  arrowContainer: {
    padding: 10,
  },
  arrow: {
    height: 30,
    width: 30,
  },
  preferredPlanText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: 20,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E6EEF7',
  },
  horizontalLine1: {
    width: '90%',
    height: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  boxContainer: {
    backgroundColor: '#EFF7FF',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius: 19,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  top: {
    width: '90%',
    alignItems: 'center',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    fontSize: 40,
  },
  topText: {
    fontSize: 17,
    color: 'black',
    fontWeight: '700',
  },
  middle: {},
  middleText: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 2,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'black',
    marginHorizontal: 5,
    padding: 7,
    paddingHorizontal: 17,
    borderRadius: 11,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default PreferededPlan;
