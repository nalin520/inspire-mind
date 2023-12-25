import React from 'react';
import Slider from '@react-native-community/slider';
import {Image, View, StyleSheet, ImageSourcePropType} from 'react-native';
import {useAppTheme} from '../../../theme';

const mood1 = require('../../../Assets/Icon/mood-1.png');
const mood2 = require('../../../Assets/Icon/mood-2.png');
const mood3 = require('../../../Assets/Icon/mood-3.png');
const mood4 = require('../../../Assets/Icon/mood-4.png');
const mood5 = require('../../../Assets/Icon/mood-5.png');
const mood1a = require('../../../Assets/Icon/mood-1-a.png');
const mood2a = require('../../../Assets/Icon/mood-2-a.png');
const mood3a = require('../../../Assets/Icon/mood-3-a.png');
const mood4a = require('../../../Assets/Icon/mood-4-a.png');
const mood5a = require('../../../Assets/Icon/mood-5-a.png');

type IMoodSlider = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};
interface ISliderStepImg {
  active: boolean;
  img: ImageSourcePropType;
  imgActive: ImageSourcePropType;
}

function SliderStepImg({active, img, imgActive}: ISliderStepImg) {
  const {colors} = useAppTheme();

  return (
    <View
      style={active && [styles.iconWrapper, {backgroundColor: colors.primary}]}>
      <Image source={active ? imgActive : img} style={styles.icon} />
    </View>
  );
}

export default function MoodSlider({value, setValue}: IMoodSlider) {
  const {colors} = useAppTheme();

  return (
    <View>
      <Slider
        style={styles.slider}
        step={25}
        value={value}
        onValueChange={setValue}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.muted}
        thumbTintColor={colors.primary}
      />
      <View style={styles.iconContainer}>
        <SliderStepImg active={value === 0} img={mood1} imgActive={mood1a} />
        <SliderStepImg active={value === 25} img={mood2} imgActive={mood2a} />
        <SliderStepImg active={value === 50} img={mood3} imgActive={mood3a} />
        <SliderStepImg active={value === 75} img={mood4} imgActive={mood4a} />
        <SliderStepImg active={value === 100} img={mood5} imgActive={mood5a} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
    borderWidth: 3,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  iconWrapper: {
    padding: 6,
    borderRadius: 30,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
