import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useAppTheme} from '../../../theme';

interface ISliderProgressBar {
  progress: number;
}

export default function SliderProgressBar({progress}: ISliderProgressBar) {
  const {colors} = useAppTheme();

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<View>(null);
  const progressRef2 = useRef<View>(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(progress);
  }, [progress]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      if (progressRef?.current) {
        progressRef.current.setNativeProps({width: `${value.value + 4}%`});
      }
      if (progressRef2?.current) {
        progressRef2.current.setNativeProps({left: `${value.value}%`});
      }
    });

    return () => progressAnimation.removeAllListeners();
  }, []);

  return (
    <View style={styles.root}>
      <View style={[styles.slider, {backgroundColor: colors.progress}]} />
      <Animated.View
        ref={progressRef}
        style={[styles.sliderProgress, {backgroundColor: colors.primary}]}
      />
      <Animated.View
        ref={progressRef2}
        style={[styles.thumb, {backgroundColor: colors.primary}]}
      />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  root: {
    position: 'relative',
    height: 32,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  slider: {
    width: '100%',
    height: 8,
    borderRadius: 30,
  },
  sliderProgress: {
    position: 'absolute',
    width: '100%',
    height: 8,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  thumb: {
    height: 18,
    width: 18,
    borderRadius: 18,
    position: 'absolute',
  },
});
