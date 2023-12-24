import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Adapter/ReactNavigation/ScreenParamList';
import {ScreenNames} from '../../Adapter/ReactNavigation/ScreenNames';
import {images} from '../../Utils/images';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {hp, wp} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {useColorController} from '../../Controller/Color/useColorController';
// import {ColorName} from '../../Controller/Color/colorName';
import {NativeImage} from './NativeImage';
import {BlankSpacer} from './BlankSpacer';
import {NativeText} from './NativeText';
type props = NativeStackScreenProps<RootStackParamList, ScreenNames.Home>;
type Options = {
  title: string;
  image: any;
  onPress: () => void;
};
const HomeCard = ({navigation}: props) => {
  const {getColor} = useColorController();
  const [selectedOption, setSelectedOption] = useState<number>(4);
  const [options, setOptions] = useState<Options[]>([
    {
      title: 'Timer',
      image: images.TimerWhite,
      onPress: () => navigation.navigate(ScreenNames.timer),
    },
    {
      title: 'Yoga',
      image: images.YogaWhite,
      onPress: () => console.log('Yoga'),
    },
    {
      title: 'Sleep',
      image: images.SleepWhite,
      onPress: () => console.log('Yoga'),
    },
    {
      title: 'Meditation',
      image: images.MeditationWhite,
      onPress: () => console.log('Yoga'),
    },
    {
      title: 'Consultation',
      image: images.ConsaltationWhite,
      onPress: () => console.log('Yoga'),
    },
    {
      title: 'More',
      image: images.MoreWhite,
      onPress: () => console.log('Yoga'),
    },
  ]);
  return (
    <FlatList
      data={options}
      horizontal={false}
      numColumns={3}
      contentContainerStyle={{alignItems: 'center'}}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            item.onPress();
            setSelectedOption(index);
          }}
          style={{
            width: wp(27),
            borderRadius: wp(5),
            alignItems: 'center',
            backgroundColor: getColor(
              selectedOption === index ? '#2A2EEC' : '#2A2EEC',
            ),
            paddingHorizontal: wp(1),
            paddingVertical: hp(2),
            margin: wp(2),
            justifyContent: 'center',
          }}>
          <NativeImage source={item.image} size={wp(10)} />
          <BlankSpacer height={hp(0.5)} />
          <NativeText text={item.title} style={styles.cardTitle} />
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardTitle: {
    color: '#000',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
  },
});
export default HomeCard;
