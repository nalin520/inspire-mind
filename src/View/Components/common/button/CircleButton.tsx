import React, {useEffect, useRef} from 'react';
import {Svg, Circle, G} from 'react-native-svg';
import {useAppTheme} from '../../../../theme';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  percentage: number;
  size?: number;
  iconSize?: number;
  onPress: any;
};
function CircleButton({percentage, onPress, size = 128, iconSize = 20}: Props) {
  const {colors} = useAppTheme();
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<Circle>(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({strokeDashoffset});
      }
    });
    return () => progressAnimation.removeAllListeners();
  }, []);

  return (
    <View style={styles.root}>
      <Svg width={size} height={size} fill="transparent">
        <G rotation="-90" origin={center}>
          <Circle
            stroke="transparent"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={colors.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: colors.primary}]}
        activeOpacity={0.6}
        onPress={onPress}>
        <AntDesign color="#fff" name="arrowright" size={iconSize} />
      </TouchableOpacity>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    borderRadius: 100,
    padding: 16,
  },
});

export default CircleButton;
