import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type NativeImageProp = {
  size: number;
  onPress?: () => void;
  source: any;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};

export const NativeImage: React.FC<NativeImageProp> = prop => {
  return prop.onPress ? (
    <TouchableOpacity
      onPress={prop.onPress}
      style={[{width: prop.size, height: prop.size}, prop.style]}>
      <Image
        source={prop.source}
        resizeMode="stretch"
        style={[{width: '100%', height: '100%'}, prop.imageStyle]}
      />
    </TouchableOpacity>
  ) : (
    <View style={[{width: prop.size, height: prop.size}, prop.style]}>
      <Image
        source={prop.source}
        resizeMode="stretch"
        style={[{width: '100%', height: '100%'}, prop.imageStyle]}
      />
    </View>
  );
};
