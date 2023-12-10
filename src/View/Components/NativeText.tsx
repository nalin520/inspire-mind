import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TextProps} from 'react-native';
interface NativeTextProp extends TextProps {
  text: string;
}
export const NativeText: React.FC<NativeTextProp> = prop => {
  const {t} = useTranslation();
  return <Text {...prop}>{t(prop.text)}</Text>;
};
