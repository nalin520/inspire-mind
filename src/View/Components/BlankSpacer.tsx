import React from 'react';
import {ColorValue, View} from 'react-native';

type BlankSpacerProp = {
  width?: number;
  height?: number;
  backgroundColor?: ColorValue;
};
export const BlankSpacer: React.FC<BlankSpacerProp> = prop => {
  return <View style={prop} />;
};
