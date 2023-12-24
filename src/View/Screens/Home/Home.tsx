import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Background} from '../../Components/Background';
import {BlankSpacer} from '../../Components/BlankSpacer';
import {
  hp,
  wp,
  fs,
} from '../../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {NativeText} from '../../Components/NativeText';
import {NativeImage} from '../../Components/NativeImage';
import {images} from '../../../Utils/images';
import {useColorController} from '../../../Controller/Color/useColorController';
import {ColorName} from '../../../Controller/Color/ColorName';
import HomeCard from '../../Components/HomeCard';
import {ScrollView} from 'react-native-gesture-handler';
import UpCommingEvent from '../../Components/UpCommingEvent';
import UpComingEvent from '../../Components/UpComing';
import Recommedation from '../../Components/Recommedation';
import RecommendedTracks from '../../Components/RecommendedTracks';
import HomeRecommendedTracks from '../../Components/HomeRecommendedTracks';

// import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
const Home = ({navigation}) => {
  const {getColor} = useColorController();
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          justifyContent: 'space-between',
        }}>
        <View>
          <NativeText text="Good Afternoon" style={styles.welcomeHead} />
          <NativeText text="Hi, John Due" style={styles.welcomeSubHead} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <NativeImage
            source={images.BelWhite}
            size={wp(13)}
            style={{
              padding: wp(2),
              borderRadius: wp(10),
              backgroundColor: getColor(ColorName.secondary_001),
            }}
          />
          <BlankSpacer width={wp(2)} />
          <NativeImage
            source={images.ProfileWhite}
            size={wp(12)}
            style={{
              padding: wp(2),
              borderRadius: wp(10),
              backgroundColor: getColor(ColorName.secondary_001),
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
      }}>
      <ScrollView>
        <BlankSpacer height={hp(2)} />
        {renderHeader()}
        <BlankSpacer height={hp(5)} />
        <HomeCard navigation={navigation} />
        <BlankSpacer height={hp(5)} />
        <UpCommingEvent />
        <BlankSpacer height={hp(5)} />
        <UpComingEvent />
        <BlankSpacer height={hp(5)} />
        <NativeText
          text="TAKE CARE OF YOUR BODY, IT'S THE ONLY PLACE YOU HAVE TO LIVE"
          style={styles.CTA}
        />
        <BlankSpacer height={hp(5)} />
        <Recommedation text={'Recommended Courses For You'} />
        <BlankSpacer height={hp(2)} />
        <NativeText text="Recommended Consultant" style={styles.recomTitle} />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {[0, 1, 2, 3].map(() => (
            <RecommendedTracks />
          ))}
        </ScrollView>

        <Recommedation
          bokmarkDisable
          bookmarkEnable
          playIcon
          text={'Recommended Tracks'}
        />
        <Recommedation playIcon text={'Recommended Video'} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  welcomeHead: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
  },
  welcomeSubHead: {
    fontSize: 15,
    fontWeight: '500',
    color: '#9C9C9C',
  },
  EventTitle: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
  recomTitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: '#000',
    marginBottom: wp(5),
  },
  EventTypeActive: {
    fontSize: fs(4),
    backgroundColor: '#2A2EEC',
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.5),
    borderRadius: wp(2),
    color: '#fff',
  },
  EventType: {
    fontSize: fs(4),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.5),
    borderRadius: wp(2),
    color: '#9C9C9C',
    borderColor: '#9C9C9C',
    borderWidth: 1,
  },
  CTA: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 12,
    color: '#fff',
    borderRadius: wp(2),
    paddingHorizontal: wp(5),
    paddingVertical: wp(5),
    backgroundColor: '#2A2EEC',
    width: wp(90),
    textAlign: 'center',
  },
});
export default Home;
