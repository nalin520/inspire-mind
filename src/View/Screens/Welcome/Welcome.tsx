import React, {useEffect, useState} from 'react';
import {Pressable, Text} from 'react-native';
import {hp} from '../../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {lngKey} from '../../../Adapter/i18next/lngKey';
import {BlankSpacer} from '../../Components/BlankSpacer';
import {NativeText} from '../../Components/NativeText';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_NAME} from '../../../Constant/storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppTheme} from '../../../theme';

export const Welcome = ({navigation}: any) => {
  const [hasAuth, setHasAuth] = useState<boolean>(false);
  const {t} = useTranslation();
  const {colors} = useAppTheme();

  useEffect(() => {
    async function checkAuth() {
      try {
        const value = await AsyncStorage.getItem(TOKEN_NAME);
        if (value) {
          setHasAuth(true);
        }
      } catch (error) {}
    }

    checkAuth();
  }, []);

  const handleSkip = () => {
    if (!hasAuth) {
      navigation.replace('privetStack', {
        screen: 'home',
      });
    } else {
      navigation.replace('publicStack', {
        screen: 'signUp',
      });
    }
  };

  return (
    <View style={[styles.root, {backgroundColor: colors.background}]}>
      <View style={styles.container}>
        <BlankSpacer height={hp(20)} />
        <Text style={[styles.brandNameText, {color: colors.onBackground}]}>
          {t(lngKey.BrandName)}
        </Text>
        <Text style={styles.Slogan}>{t(lngKey.Slogan)}</Text>
        <BlankSpacer height={hp(16)} />
        <NativeText
          text={lngKey.Quote}
          style={[styles.Quote, {color: colors.onBackground}]}
        />
        <NativeText text={lngKey.QuoteBy} style={styles.QuoteBy} />
      </View>
      <Pressable onPress={handleSkip} style={styles.SkipBtn}>
        <Text style={styles.Skip}>{t(lngKey.Skip)}</Text>
        <MaterialIcons
          name="keyboard-double-arrow-right"
          size={20}
          color="#9c9c9c"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },
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
    color: '#9c9c9c',
  },
  Quote: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
  QuoteBy: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center',
    color: '#9c9c9c',
    fontStyle: 'italic',
  },
  SkipBtn: {
    marginTop: 'auto',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Skip: {
    color: '#9c9c9c',
    paddingVertical: 10,
    paddingHorizontal: 4,
    fontSize: 18,
  },
});
