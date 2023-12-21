import {View, StyleSheet} from 'react-native';
import React from 'react';
import {images} from '../../Utils/images';
import {Image} from 'react-native';
import {BlankSpacer} from './BlankSpacer';
import {NativeText} from './NativeText';
import {useColorController} from '../../Controller/Color/useColorController';
import {wp, hp, fs} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {ColorName} from '../../Controller/Color/ColorName';
import {FlatList} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Recommedation = ({text, playIcon, bookmarkEnable, bokmarkDisable}) => {
  const {getColor} = useColorController();
  const data = [
    {
      id: '1',
      rating: '4.9 | 10 day Course',
      day: '10 day Course',
      title: 'The Science of overcoming insomnia',
      image: images.Other1,
    },
    {
      id: '2',
      title: 'Event 2',
      image: images.Other2,
    },
    // Add more items as needed
  ];
  const renderItem = ({item}) => (
    <View style={{padding: 12}}>
      <View>
        <Image
          source={item.image}
          style={{width: wp(85), height: hp(25), borderRadius: wp(2)}}
        />
        {playIcon && (
          <View
            style={[styles.playIconContainer, {left: wp(1), bottom: wp(1)}]}>
            <MaterialCommunityIcons
              name="play-outline"
              size={20}
              color="#fff"
            />
          </View>
        )}
        <View style={[styles.playIconContainer, {top: wp(1)}]}>
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={20}
            color="#fff"
          />
        </View>
        {!bokmarkDisable && (
          <View style={styles.bookmarkIconContainer}>
            <View style={styles.bookMark}>
              <Ionicons name="bookmark-outline" size={18} color={'black'} />
            </View>
          </View>
        )}
        {/* <View
          style={{
            position: 'absolute',
            right: wp(2),
            top: wp(2),
            width: wp(8),
            height: wp(8),
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={images.Back} style={{width: wp(3), height: wp(3)}} />
            <Image
              source={images.BookmarkWhite}
              style={{
                width: wp(8),
                height: wp(8),
                position: 'absolute',
                zIndex: -1,
              }}
            />
          </View>
        </View> */}

        {/* <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: -hp(2),
            backgroundColor: getColor(ColorName.secondary_001),
            width: wp(10),
            height: wp(10),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: wp(10),
            padding: wp(1),
          }}>
          <View
            style={{
              borderWidth: wp(0.3),
              padding: wp(0.3),
              borderColor: getColor(ColorName.secondary_002),
              width: wp(8),
              height: wp(8),
              borderRadius: wp(8),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={images.Save}
              style={{
                width: wp(3),
                height: wp(4),
                resizeMode: 'stretch',
                borderWidth: wp(0.2),
              }}
            />
          </View>
        </View> */}
      </View>
      <BlankSpacer height={hp(2)} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <NativeText
            text={item.rating}
            style={{color: getColor(ColorName.secondary_002), fontSize: fs(3)}}
          />
          <BlankSpacer height={hp(1)} />
          <NativeText text={item.title} style={styles.recomMainTitle} />
        </View>
        {bookmarkEnable && (
          <View style={styles.bookMark}>
            <Ionicons name="bookmark-outline" size={18} color={'black'} />
          </View>
        )}
      </View>

      <BlankSpacer height={hp(1)} />
      <View style={{flexDirection: 'row'}}>
        <NativeText text="Yoga" style={styles.recomTag} />
        <BlankSpacer width={wp(2)} />
        <NativeText text="Meditation" style={styles.recomTag} />
      </View>
    </View>
  );
  return (
    <View>
      <NativeText text={text} style={styles.recomTitle} />
      <BlankSpacer height={hp(2)} />
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  recomTitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: '#000',
  },
  recomMainTitle: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  recomTag: {
    fontSize: fs(3),
    color: '#000',
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    backgroundColor: '#D8E6F3',
  },
  playIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',

    right: wp(1),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bookmarkIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 20,
    position: 'absolute',
    bottom: wp(-6),
    right: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bookMark: {
    // width: 32,
    // height: 32,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
});
export default Recommedation;
