import {useColorController} from '../../Controller/Color/useColorController';
import LinearGradient from 'react-native-linear-gradient';
import React, {PropsWithChildren} from 'react';
import {ColorName} from '../../Controller/Color/ColorName';
import {hp, wp} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';

export const Background: React.FC<PropsWithChildren> = prop => {
  const {getColor} = useColorController();
  return (
    <LinearGradient
      colors={[
        getColor(ColorName.primary_001) as string,
        getColor(ColorName.primary_002) as string,
      ]}
      style={{marginHorizontal: hp(5), marginRight: wp(5)}}>
      {prop.children}
    </LinearGradient>
  );
};
