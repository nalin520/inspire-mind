import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
// circle-with-cross
const PlanSelect = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowContainer}>
          <Image
            style={styles.arrow}
            source={require('../../../Assets/Img/left-arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <View>
          <Text style={styles.topText}>Weight Loss Plan</Text>
          <Text style={[styles.topText, {fontWeight: 'normal', fontSize: 15}]}>
            Service Charge : ₹ 600
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#2A2EEC'}]}>
            <Text
              style={[
                styles.buttonText,
                {
                  backgroundColor: '#2A2EEC',
                  fontWeight: '500',
                  fontSize: 17,
                  padding: 4,
                },
              ]}>
              + Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.middle}>
        <Text
          style={[styles.middleText, {fontWeight: 'normal', color: 'black'}]}>
          <AntDesign name="clockcircleo" /> 30 Minutes
        </Text>
        <Text style={styles.middleText}>
          ✓ 3 Consultants <Text style={{fontSize: 10}}> &#x25CF; </Text> Weekly
        </Text>
        <Text style={[styles.middleText, {fontWeight: 'bold', color: 'black'}]}>
          Post Consultants (Included) :{' '}
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            {' '}
            <Entypo name="circle-with-cross" /> No
          </Text>
        </Text>
      </View>
      <View>
        <Text style={{marginTop: 10}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          hic?
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  arrowContainer: {
    padding: 10,
  },
  arrow: {
    height: 25,
    width: 25,
  },
  horizontalLine: {
    width: '90%',
    height: 1,
    margin: 5,
    backgroundColor: '#EFF4FA',
  },
  boxContainer: {
    backgroundColor: '#EFF7FF',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius: 19,
    display: 'flex',
  },
  top: {
    width: '90%',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  topText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  middle: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: '#EFF7FF',
    borderRadius: 19,
  },
  middleText: {
    fontSize: 14,
    //     fontWeight: 'bold',
    //     color: 'black',
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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default PlanSelect;
