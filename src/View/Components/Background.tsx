import {useColorController} from '../../Controller/Color/useColorController';
import LinearGradient from 'react-native-linear-gradient';
import React, {PropsWithChildren} from 'react';
import {ColorName} from '../../Controller/Color/ColorName';
import {hp, wp} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {View} from 'react-native';

export const Background: React.FC<PropsWithChildren> = prop => {
  const {getColor} = useColorController();
  return (
    // <LinearGradient
    //   colors={[
    //     getColor(ColorName.primary_001) as string,
    //     getColor(ColorName.primary_002) as string,
    //   ]}
    //   style={{
    //     width: wp(100),
    //     height: hp(100),
    //     alignItems: 'center',
    //     backgroundColor: 'red',
    //   }}>

    //   <View style={{width: wp(90), height: hp(90)}}>{prop.children}</View>
    // </LinearGradient>
    <View style={{width: wp(100), height: hp(100),backgroundColor:getColor(ColorName.primary_001), alignItems:'center'}}>
      <View style={{width: wp(90), height: hp(90)}}>{prop.children}</View>
    </View>
  );
};
