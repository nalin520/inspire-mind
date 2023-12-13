// import React from 'react';
// import {useTranslation} from 'react-i18next';
// import {Text, TextProps} from 'react-native';
// import {useFontController} from '../../Controller/Font/useFontController';
// import {FontType} from '../../Controller/Font/FontType';
// interface NativeTextProp extends TextProps {
//   text: string;
// }

// export const NativeText: React.FC<NativeTextProp> = prop => {
//   const {t} = useTranslation();
//   const font = useFontController();
//   return (
//     <Text {...prop} style={{fontFamily: font.getFont(FontType.regular)}}>
//       {t(prop.text)}
//     </Text>
//   );
// };
// NativeText.js
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TextProps} from 'react-native';
import {useFontController} from '../../Controller/Font/useFontController';
import {FontType} from '../../Controller/Font/FontType';
import {useColorController} from '../../Controller/Color/useColorController';
import {ColorName} from '../../Controller/Color/ColorName';

interface NativeTextProp extends TextProps {
  text: string;
}

export const NativeText: React.FC<NativeTextProp> = props => {
  const {t} = useTranslation();
  const font = useFontController();
  const {getColor} = useColorController();
  return (
    <Text
      style={{
        fontFamily: font.getFont(FontType.regular),
        color: getColor(ColorName.secondary_001),
      }}
      {...props}>
      {t(props.text)}
    </Text>
  );
};
