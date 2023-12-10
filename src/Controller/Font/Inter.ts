import {FontType} from './FontType';
export const Inter: {[key in FontType]: string} = {
  [FontType.light]: 'Inter-Light',
  [FontType.medium]: 'Inter-Medium',
  [FontType.regular]: 'Inter-Regular',
  [FontType.semiBold]: 'Inter-SemiBold',
  [FontType.bold]: 'Inter-Bold',
};
