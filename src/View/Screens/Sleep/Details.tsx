//import liraries
import React, {Component} from 'react';
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
// create a component
const Details = () => {
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
              <Text style={styles.rating}>{` . 50 MIN`}</Text>
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
          <TouchableOpacity style={styles.followItem}>
            <Image
              style={{width: 30, height: 26}}
              source={require('../../../Assets/Img/donation.png')}
            />
            <Text style={styles.followSubTitle}>Donation</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.followItem}>
            <Feather name="download-cloud" size={20} color={'#6E8DA3'} />
            <Text style={styles.followSubTitle}>Download</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.followItem}>
            <Feather name="moon" size={20} color={'#6E8DA3'} />
            <Text style={styles.followSubTitle}>Sleep</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.followItem}>
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

        <View
          style={{
            backgroundColor: '#EFF7FF',
            padding: 20,
            borderRadius: 15,
            marginTop: 10,
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
            A review is an evaluation of a publication, product, service, or
            company or a critical take on current affairs in literature,
          </Text>
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
    color: '#9c9c9c',
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
});

//make this component available to the app
export default Details;
