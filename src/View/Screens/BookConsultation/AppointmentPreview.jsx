import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ProfileCard from '../../Components/ProfileCard';
import {ScrollView} from 'react-native-gesture-handler';
import ProfileHeader from '../../Components/ProfileHeader';
import Button from '../../Components/Button';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TextInput} from 'react-native';

const Appointment = () => {
  const navigation = useNavigation();
  const [bottom, setBottom] = useState();
  const refRBSheet = useRef();

  const handleFilter = id => {
    setBottom(id);
    refRBSheet.current.open();
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <ProfileHeader name={'Confirmed Details'} />
        <ProfileCard />
        <View style={styles.content}>
          <Text>Plan Details</Text>
          <Text style={styles.planName}>Weigth Loss Plan</Text>
          <View style={styles.details}>
            <View>
              <Text style={styles.detail}>Service Charge </Text>
              <Text style={styles.detail}>Number of consultants</Text>
              <Text style={styles.detail}>Duration </Text>
              <Text style={styles.detail}>Post consultants (Inclued) </Text>
            </View>
            <View>
              <Text style={styles.detail}>Rs. 600 </Text>
              <Text style={styles.detail}>3 </Text>
              <Text style={styles.detail}>30 Minutes</Text>
              <Text style={styles.detail}>
                <Entypo name="squared-cross" /> No
              </Text>
            </View>
          </View>
          <Text style={[styles.planName, {marginTop: 10, marginBottom: 10}]}>
            Slot Details
          </Text>
          <View style={styles.details}>
            <View>
              <Text style={styles.detail}>Time Zone </Text>
              <Text style={styles.detail}>Booking Date</Text>
            </View>
            <View>
              <Text style={styles.detail}>Aisa/Kolkata</Text>
              <Text style={styles.detail}>Jul 25th 23 </Text>
            </View>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.details}>
            <View>
              <Text style={styles.detail}>Name </Text>
              <Text style={styles.detail}>Gender </Text>
              <Text style={styles.detail}>Age</Text>
              <Text style={styles.detail}>Email</Text>
            </View>
            <View>
              <Text style={styles.detail}>Shubham Khede</Text>
              <Text style={styles.detail}>Male</Text>
              <Text style={styles.detail}>17 years old </Text>
              <Text style={styles.detail}>shubham98@gmail.com </Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.details}>
            <View>
              <Text style={[styles.detail, {fontWeight: 'bold'}]}>
                Total Amount{' '}
              </Text>
            </View>
            <View>
              <Text style={[styles.detail, {fontWeight: 'bold'}]}>
                {' '}
                Rs. 600
              </Text>
            </View>
          </View>
        </View>
        <Button
          btnText={'Proceed to Pay'}
          backgroundColor={'black'}
          onPress={() => {
            refRBSheet.current.open();
          }}
        />
        <View style={{paddingBottom: '13%'}} />
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            backgroundColor: '#E6E6E6',
            borderTopRightRadius: 27,
            borderTopLeftRadius: 27,

            paddingHorizontal: 19,
          },
        }}>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 12}}>
            ADD RATING & REVIEW
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              color: 'black',
              marginVertical: 10,
              justifyContent: 'space-evenly',
            }}>
            <AntDesign name="staro" size={25} style={{margin: 5}} />
            <AntDesign name="staro" size={25} style={{margin: 5}} />
            <AntDesign name="staro" size={25} style={{margin: 5}} />
            <AntDesign name="staro" size={25} style={{margin: 5}} />
            <AntDesign name="staro" size={25} style={{margin: 5}} />
          </View>
          <View>
            <TextInput
              style={styles.textArea}
              multiline
              numberOfLines={4}
              placeholder="Write comment"
            />
          </View>
          <Button btnText={'Submit'} backgroundColor={'#2A2EEC'} />
          <View style={{paddingBottom: '13%'}} />
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#E6EEF7',
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  content: {
    marginVertical: 10,
    padding: 10,
  },
  planName: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    color: 'black',
    marginBottom: 5,
  },
  boxContainer: {
    backgroundColor: '#EFF7FF',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius: 19,
    display: 'flex',
    justifyContent: 'center',
  },
  textArea: {
    backgroundColor: 'white',
    width: 230,
    borderRadius: 10,
    fontSize: 10,
    textAlignVertical: 'top',
    color: 'black',
    marginVertical: 7,
  },
});

export default Appointment;
