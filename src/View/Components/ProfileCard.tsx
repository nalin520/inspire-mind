import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Color, FontFamily, FontSize} from '../../styles/globalStyle';

interface IProfileCard {
  showFollower?: boolean;
}

const ProfileCard = ({showFollower}: IProfileCard) => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View>
          <Image
            style={styles.profilePicture}
            resizeMode="cover"
            source={{
              uri: 'https://d3ky75hx70n383.cloudfront.net/public/consultant/profile/64db706f9667556ee0b2661e.png',
            }}
          />
        </View>
        <View>
          <Text style={styles.userName}>John Due</Text>
          <View style={styles.chipContainer}>
            <Text style={styles.chip}>MEDITATION</Text>
            <Text style={styles.chip}>SLEEP</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn, styles.btnBlack]}>
          <Text style={styles.btnText}>Book consultant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
          <Text style={styles.btnText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {showFollower && (
        <View style={styles.followContainer}>
          <View style={styles.followItem}>
            <Text style={styles.followTitle}>20</Text>
            <Text style={styles.followSubTitle}>Consultation</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.followItem}>
            <Text style={styles.followTitle}>150</Text>
            <Text style={styles.followSubTitle}>Courses</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.followItem}>
            <Text style={styles.followTitle}>1.2K</Text>
            <Text style={styles.followSubTitle}>Followers</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  headerContainer: {
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  profilePicture: {
    borderRadius: 19,
    width: 109,
    height: 109,
  },
  userName: {
    lineHeight: 22,
    fontSize: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: '500',
    marginBottom: 6,
  },
  chipContainer: {
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: Color.colorAliceblue,
    padding: 4,
    fontSize: 10,
    textTransform: 'capitalize',
    color: 'black',
    borderRadius: 4,
    fontWeight: '500',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 22,
    paddingRight: 22,
    borderRadius: 11,
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
    fontSize: FontSize.size_mini,
    textTransform: 'uppercase',
  },
  followContainer: {
    marginTop: 24,
    flexDirection: 'row',
  },
  followItem: {
    flex: 1,
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
    color: '#9c9c9c',
    fontFamily: FontFamily.interBold,
    fontWeight: '600',
    fontSize: 14,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#6e6e6e',
  },
});

export default ProfileCard;
