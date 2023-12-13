import {hp, wp} from '../../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {lngKey} from '../../../Adapter/i18next/lngKey';
import {Background} from '../../Components/Background';
import {BlankSpacer} from '../../Components/BlankSpacer';
import {NativeText} from '../../Components/NativeText';
import React from 'react';
import {View, StyleSheet} from 'react-native';
export const Welcome = () => {
  return (
    <>
      <Background>
        <View style={styles.container}>
          <BlankSpacer height={hp(20)} />
          <NativeText text={lngKey.BrandName} style={styles.brandNameText} />
          <NativeText text={lngKey.Slogan} style={styles.Slogan} />
          <BlankSpacer height={hp(20)} />
          <NativeText text={lngKey.Quote} style={styles.Quote} />
          <NativeText text={lngKey.QuoteBy} style={styles.QuoteBy} />
        </View>
      </Background>
      <NativeText text={lngKey.Skip} style={styles.Skip} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  brandNameText: {
    lineHeight: 41,
    fontWeight: 'bold',
    fontSize: 25,
  },
  Slogan: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 19,
  },
  Quote: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    textAlign: 'center',
  },
  QuoteBy: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center',
  },
  Skip: {
    position: 'absolute',
    bottom: hp(3),
    right: wp(4),
  },
});
