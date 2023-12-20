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
const Details = ({navigation}) => {
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
          source={require('../../../Assets/Img/DetailsPhoto.png')}
        />
        <View style={{position: 'absolute', width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}>
            <TouchableOpacity style={styles.playIconContainer}>
              <Ionicons name="arrow-back" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playIconContainer}>
              <MaterialCommunityIcons
                name="share-outline"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
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
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.secContainer}>
          <View>
            <Text>
              <Ionicons name="star" color={'gray'} />
              <Text style={styles.rating}>4.5</Text>
              <Text style={styles.rating}>{` • 50 MIN`}</Text>
            </Text>
            <Text numberOfLines={1} style={styles.title}>
              Relaxtion & Sleep
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={[
                styles.bookmarkIconContainer,
                {borderColor: 'black', borderWidth: 1},
              ]}>
              <Ionicons name="bookmark-outline" size={18} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation?.navigate('sleep_track_player')}
              style={[
                styles.bookmarkIconContainer,
                {
                  backgroundColor: Color.colorMediumblue,
                  width: 48,
                  height: 48,
                  borderRadius: 40,
                  marginLeft: 17,
                },
              ]}>
              <Ionicons name="play-outline" size={20} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.followContainer}>
          <TouchableOpacity
            onPress={() => bottomSheet('Donation')}
            style={styles.followItem}>
            <Image
              style={{width: 30, height: 26}}
              source={require('../../../Assets/Img/donation.png')}
            />
            <Text style={styles.followSubTitle}>Donation</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => bottomSheet('download')}
            style={styles.followItem}>
            <Feather name="download-cloud" size={20} color={'#6E8DA3'} />
            <Text style={styles.followSubTitle}>Download</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            // onPress={() => bottomSheet('Donation')}
            style={styles.followItem}>
            <Feather name="moon" size={20} color={'#6E8DA3'} />
            <Text style={styles.followSubTitle}>Sleep</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => bottomSheet('share')}
            style={styles.followItem}>
            <Feather name="more-horizontal" size={20} color={'#6E8DA3'} />
            <Text style={styles.followSubTitle}>More</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{flexDirection: 'row', width: '70%', alignItems: 'center'}}>
            <Image
              style={{marginRight: 10}}
              source={require('../../../Assets/Img/doctorphoto.png')}
            />
            <Image
              style={{position: 'absolute', left: 50, top: -2}}
              source={require('../../../Assets/Img/veifytick.png')}
            />
            <View>
              <Text numberOfLines={1} style={[styles.title, {fontSize: 15}]}>
                Dr Antanas Trops
              </Text>
              <Text>
                <Ionicons name="star" color={'gray'} />
                <Text style={[styles.rating, {fontSize: 13}]}>4.5</Text>
                <Text style={styles.rating}>{` . 15K Followers`}</Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
            <Text style={styles.btnText}>Book Consultation</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: FontFamily.interRegular,
            color: 'black',
            marginTop: 15,
          }}>
          A Board Certified Family Doctor with seven years of clinical
          experience, specializing in patient care, case management, family
          medicine, and communication.
        </Text>
        <View style={styles.chipContainer}>
          {['Meditation', 'Sleep']?.map(tag => (
            <TouchableOpacity style={styles.chip} key={tag}>
              <Text style={styles.chipText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text
          numberOfLines={1}
          style={[styles.title, {fontSize: 15, marginTop: 12}]}>
          Review
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1.1, 5, 4].map(item => (
            <View
              style={{
                backgroundColor: '#EFF7FF',
                padding: 20,
                borderRadius: 15,
                marginTop: 10,
                marginLeft: 9,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#243745',
                  paddingBottom: 10,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: FontFamily.interSemiBold,
                      color: 'black',
                    }}>
                    John Due
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: FontFamily.interRegular,
                      color: 'gray',
                    }}>
                    01 July 2023
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    size={18}
                    style={{marginRight: 3}}
                    name="star"
                    color={'gray'}
                  />
                  <Ionicons
                    size={18}
                    style={{marginRight: 3}}
                    name="star"
                    color={'gray'}
                  />
                  <Ionicons
                    size={18}
                    style={{marginRight: 3}}
                    name="star"
                    color={'gray'}
                  />
                  <Ionicons
                    size={18}
                    style={{marginRight: 3}}
                    name="star"
                    color={'gray'}
                  />
                </View>
              </View>
              <Text
                style={{
                  fontFamily: FontFamily.interRegular,
                  fontSize: 14,
                  marginTop: 10,
                  color: 'black',
                }}>
                A review is an evaluation of a publication{'\n'}, product,
                service, or company or a critical{'\n'} take on current affairs
                in literature,
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <ProfileCard showFollower />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={300}
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

            paddingHorizontal: 12,
          },
        }}>
        {bottom == 'Donation' && (
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                height: 80,
                width: 80,
                resizeMode: 'contain',
              }}
              source={require('../../../Assets/Img/logo.png')}
            />
            <Text
              style={{
                fontFamily: FontFamily.interBold,
                fontSize: 14,
                marginTop: 10,
                color: 'black',
              }}>
              Select Amount
            </Text>
            <Dropdown
              style={[
                styles.dropdown,
                isFocus ? {borderColor: 'blue'} : {width: '95%'},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Age' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
            <Button btnText={'Next'} />
          </View>
        )}
        {bottom == 'share' && (
          <>
            <Text
              style={{
                fontFamily: FontFamily.interBold,
                fontSize: 14,
                marginTop: 10,
                color: 'black',
                textAlign: 'center',
                marginBottom: 10,
              }}>
              Share With Your Friends
            </Text>
            <Image
              style={[
                styles.img,
                {width: '100%', height: '50%', borderRadius: 12},
              ]}
              source={require('../../../Assets/Img/DetailsPhoto.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: -30,
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontFamily: FontFamily.interBold,
                  fontSize: 18,
                  color: '#fff',
                }}>
                Relaxtion & Sleep
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: '#fff',
                }}>
                <Ionicons name="star" color={'#fff'} />
                <Text style={styles.rating}>4.5</Text>
                <Text style={styles.rating}>{` . 50 MIN`}</Text>
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                justifyContent: 'space-evenly',
              }}>
              {data2.map(item => (
                <TouchableOpacity
                  style={{
                    padding: 12,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                  }}>
                  <Image
                    style={{height: 25, width: 25, resizeMode: 'contain'}}
                    source={item.image}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
        {bottom == 'download' && (
          <ScrollView>
            {[0, 4, 4, , 5, 5, 5].map(() => (
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderColor: '#D2D2D2',
                }}>
                <Text
                  style={{
                    fontFamily: FontFamily.interRegular,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  Save To Library
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </RBSheet>
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

    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  flagSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(199,194,193)',
    marginLeft: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  flag: {height: 20, width: 20, marginRight: 8},
  countryName: {fontSize: 10, fontFamily: 'Inter-Medium', color: 'black'},
  rating: {
    color: '#fff',
    fontSize: 15,
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: '#424242',
    fontSize: 18,
    marginBottom: 4,
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
    gap: 15,
    alignItems: 'center',
    marginTop: 19,
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
export default Details;
