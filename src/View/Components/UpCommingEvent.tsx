import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NativeText} from './NativeText';
import {images} from '../../Utils/images';
import {wp, fs, hp} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {BlankSpacer} from './BlankSpacer';
import {FlatList} from 'react-native-gesture-handler';
import {NativeImage} from './NativeImage';

const UpCommingEvent = () => {
  const [upcomingConsultation, setUpCommingConsultation] = useState<
    {dt: string; name: string; time: string; image: any}[]
  >([
    {
      dt: '29 July',
      name: 'Natasha Romanoff',
      time: '9:30 AM',
      image: images.Doctor1,
    },
    {
      dt: '29 July',
      name: 'Ishtiaq Khavy',
      time: '9:30 AM',
      image: images.Doctor2,
    },
  ]);
  return (
    <View>
      <NativeText text="Upcoming Consultation" style={styles.upComingTitle} />
      <BlankSpacer height={hp(2)} />
      <FlatList
        data={upcomingConsultation}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EFF7FF',
              width: wp(90),
              borderRadius: wp(4),
              marginBottom: hp(2),
              paddingHorizontal: wp(5),
              paddingVertical: wp(2),
            }}>
            <View
              style={{
                width: wp(20),
                height: wp(18),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <NativeImage
                source={images.CalenderWhite}
                size={wp(20)}
                style={{position: 'absolute'}}
              />
              <NativeText text={item.dt} style={styles.eventdate} />
            </View>
            <BlankSpacer width={wp(2)} />
            <View style={{}}>
              <BlankSpacer height={hp(1)} />
              <NativeText text={item.name} style={styles.upcomingName} />
              <BlankSpacer height={hp(1)} />
              <View style={{flexDirection: 'row'}}>
                <NativeText text={item.time} style={styles.upcomingTime} />
                <BlankSpacer width={wp(2)} />
                <NativeText text={'JOIN'} style={styles.join} />
              </View>
            </View>
            <BlankSpacer width={wp(2)} />
            <NativeImage
              source={item.image}
              size={wp(18)}
              imageStyle={{borderRadius: wp(2)}}
            />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  upComingTitle: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#000',
  },
  upcomingName: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    color: '#000',
  },
  upcomingTime: {
    backgroundColor: '#D8E6F3',
    width: wp(20),
    textAlign: 'center',
    borderRadius: wp(1),
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 13,
    color: '#000',
  },
  join: {
    textAlign: 'center',
    backgroundColor: '#2A2EEC',
    // fontSize: fs(3),
    fontSize: 12,
    width: wp(15),
    borderRadius: wp(1),
    color: '#fff',
    fontWeight: '600',
    lineHeight: 12,
  },
  eventdate: {
    fontSize: fs(5),
    width: wp(10),
    textAlign: 'center',
    color: '#000',
    lineHeight: 15,
    fontWeight: '600',
  },
});
export default UpCommingEvent;
