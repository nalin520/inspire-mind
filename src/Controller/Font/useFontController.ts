import {useState} from 'react';
import {Inter} from './Inter';
import {FontType} from './FontType';

export const useFontController = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fonts, setFonts] = useState(Inter);
  const getFont = (fontType: FontType) => {
    return fonts[fontType];
  };
  return {
    getFont,
  };
};
