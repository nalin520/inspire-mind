import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const hp = heightPercentageToDP;
export const wp = widthPercentageToDP;
export const fs = (size: number) => widthPercentageToDP(size);