import {hp} from '../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {TextSizeType} from './TextSizeType';

export const useTextSizeController = () => {
  const textSize = (size: TextSizeType) => {
    return hp(size);
  };

  return {textSize};
};
