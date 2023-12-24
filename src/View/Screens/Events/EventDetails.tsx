//import liraries
import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Color, FontFamily, FontSize} from '../../../styles/globalStyle';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '../../Components/Button';
import ProfileCard from '../../Components/ProfileCard';

// create a component
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
const data2 = [
  {
    id: 0,
    name: 'Morning Routines',
    image: require('../../../Assets/Img/link.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 1,
    name: 'Stress',
    image: require('../../../Assets/Img/whatsapp.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 2,
    name: 'Sleep',
    image: require('../../../Assets/Img/twitter.png'),
    tags: ['Yoga', 'Meditation'],
  },

  {
    id: 3,
    name: 'Anxiety',
    image: require('../../../Assets/Img/instagram.png'),
    tags: ['Yoga', 'Meditation'],
  },
  {
    id: 4,
    name: 'Anxiety',
    image: require('../../../Assets/Img/more.png'),
    tags: ['Yoga', 'Meditation'],
  },
];
const EventDetails = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [bottom, setBottom] = useState();
  const refRBSheet = useRef();

  const bottomSheet = key => {
    setBottom(key);
    refRBSheet.current.open();
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={require('../../../Assets/Img/eventdetails.png')}
        />
        <View style={{position: 'absolute', width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}>
            <TouchableOpacity
              style={[
                styles.playIconContainer,
                {backgroundColor: 'black', borderRadius: 30},
              ]}>
              {/* <Ionicons name="arrow-back" size={20} color="black" /> */}
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  paddingHorizontal: 10,
                  borderRadius: 8,
                  marginRight: 8,
                }}>
                <TouchableOpacity style={{}}>
                  <Ionicons name="download-outline" size={20} color="black" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: FontFamily.interRegular,
                    color: 'black',
                    fontSize: 13,
                  }}>
                  {' '}
                  SAVE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.playIconContainer}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: -40,
            marginLeft: 10,
            marginBottom: 15,
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 7,
              backgroundColor: 'rgba(42, 46, 236, 1)',
              borderRadius: 7,
              marginRight: 7,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons color={'#fff'} name="videocam-outline" size={14} />
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                fontFamily: FontFamily.interRegular,
                marginLeft: 5,
              }}>
              Live Event
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 7,
              backgroundColor: 'rgba(255, 255, 255, 0.78)',
              borderRadius: 7,
              marginRight: 7,
            }}>
            <Text
              style={{
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12,
                fontFamily: FontFamily.interSemiBold,
              }}>
              Paid
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            backgroundColor: 'rgba(42, 46, 236, 1)',
            borderRadius: 7,
            marginRight: 7,
            width: '30%',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginTop: -35,
            elevation: 10,
            shadowColor: 'black',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: FontFamily.interSemiBold,
            }}>
            ATTEND
          </Text>
        </TouchableOpacity>

        {/* <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'flex-end',
            position: 'absolute',
            bottom: 10,
            right: 9,
            // width: '70%',
          }}>
          {[0, 1].map(item => (
            <View style={styles.flagSection}>
              <Image
                style={styles.flag}
                source={require('../../../Assets/Img/germany.png')}
              />
              <Text style={styles.countryName}>German</Text>
            </View>
          ))}
          <View style={styles.flagSection}>
            <Text>+2</Text>
          </View>
        </View> */}
      </View>
      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 8,
                backgroundColor: 'rgba(42, 46, 236, 1)',
                borderRadius: 7,
                marginRight: 7,
                width: '40%',
                alignItems: 'center',
                // alignSelf: 'flex-end',
                elevation: 10,
                shadowColor: 'black',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: FontFamily.interSemiBold,
                }}>
                2,000
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: FontFamily.interRegular,
                color: 'gray',
                fontSize: 13,
                marginTop: 10,
              }}>
              06/08/2023 • 10:09 PM | Origin : India
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.bookmarkIconContainer,
              {borderColor: 'black', borderWidth: 1},
            ]}>
            <Ionicons name="bookmark-outline" size={18} color={'black'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          Bedtime Routine Ideas for a Better{'\n'} Night's Sleep
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'flex-end',
            // position: 'absolute',
            // bottom: 10,
            // right: 9,
            // width: '70%',
            marginTop: 10,
          }}>
          {[0, 1].map(item => (
            <View style={styles.flagSection}>
              <Image
                style={styles.flag}
                source={require('../../../Assets/Img/germany.png')}
              />
              <Text style={styles.countryName}>German</Text>
            </View>
          ))}
          <View style={styles.flagSection}>
            <Text>+2</Text>
          </View>
        </View>
        <View style={styles.chipContainer}>
          {['Meditation', 'Sleep']?.map(tag => (
            <TouchableOpacity style={styles.chip} key={tag}>
              <Text style={styles.chipText}>{tag}</Text>
            </TouchableOpacity>
          ))}
          {/* {['Meditation', 'Sleep']?.map(tag => ( */}
          <TouchableOpacity
            style={[styles.chip, {backgroundColor: '#fff', borderWidth: 1.5}]}>
            <Text style={styles.chipText}>Life coach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chip, {backgroundColor: '#fff', borderWidth: 1.5}]}>
            <Text style={styles.chipText}>Mindfulness</Text>
          </TouchableOpacity>
          {/* ))} */}
        </View>
        <View
          style={{
            padding: 12,
            backgroundColor: 'rgba(239, 247, 255, 1)',
            marginTop: 15,
            borderRadius: 11,
          }}>
          <Text
            style={[
              styles.deepText,
              {
                fontFamily: 'Inter-Bold',
                color: 'rgba(64, 77, 85, 1)',
                paddingVertical: 10,
              },
            ]}>
            BENEFITS
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons color={'black'} name="checkmark-sharp" size={22} />
            <Text style={styles.deepText}>Deep Sleep</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons color={'black'} name="checkmark-sharp" size={22} />
            <Text style={styles.deepText}>Stress Relief</Text>
          </View>
        </View>
        <View
          style={{
            padding: 12,
            backgroundColor: 'rgba(239, 247, 255, 1)',
            marginTop: 15,
            borderRadius: 11,
          }}>
          <Text
            style={[
              styles.deepText,
              {
                fontFamily: 'Inter-Bold',
                color: 'rgba(64, 77, 85, 1)',
                paddingVertical: 10,
              },
            ]}>
            DESCRIPTION
          </Text>

          <Text style={styles.deepText}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 25,
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: Color.colorMediumblue,
              borderRadius: 11,
            }}>
            <Image
              style={{width: 26, height: 26, marginRight: 5}}
              source={require('../../../Assets/Img/donation.png')}
            />
            <Text style={[styles.deepText, {color: '#fff'}]}>Donation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 25,
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: Color.colorMediumblue,
              borderRadius: 11,
            }}>
            <Image
              style={{width: 26, height: 26, marginRight: 5}}
              source={require('../../../Assets/Img/donation.png')}
            />
            <Text style={[styles.deepText, {color: '#fff'}]}>Privet</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingBottom: 30}} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  playIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',

    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  flagSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(216, 230, 243, 1)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    marginRight: 5,
  },
  flag: {height: 20, width: 20, marginRight: 8},
  countryName: {fontSize: 10, fontFamily: 'Inter-Medium', color: 'black'},
  deepText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 5,
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: '#424242',
    fontSize: 18,
    marginBottom: 4,
    marginTop: 5,
  },
  bookmarkIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  secContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  followContainer: {
    marginTop: 16,
    flexDirection: 'row',
    backgroundColor: '#EFF7FF',
    padding: 20,
    borderRadius: 18,
  },
  followItem: {
    flex: 1,
    alignItems: 'center',
  },
  followTitle: {
    textTransform: 'capitalize',
    textAlign: 'center',
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    fontSize: 20,
  },
  followSubTitle: {
    textAlign: 'center',
    color: 'black',
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    fontSize: 12,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#6e6e6e',
  },
  btn: {
    paddingVertical: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 11,
    width: '30%',
  },
  btnBlack: {
    backgroundColor: 'black',
  },
  btnPrimary: {
    backgroundColor: Color.colorMediumblue,
  },
  btnText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: '500',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 17,
    alignItems: 'center',
    marginTop: 10,
  },
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#D8E6F3',
    borderRadius: 5,
  },
  chipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    fontWeight: '500',
    color: 'black',
  },
  dropdown: {
    height: 50,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 15,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

//make this component available to the app
export default EventDetails;
