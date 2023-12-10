import {hp} from '../../../Adapter/ReactNativeResponsiveScreen/Responsive';
import {lngKey} from '../../../Adapter/i18next/lngKey';
import {Background} from '../../Components/Background';
import {BlankSpacer} from '../../Components/BlankSpacer';
import {NativeText} from '../../Components/NativeText';
import React from 'react';

export const Welcome = () => {
  return (
    <Background>
      <BlankSpacer height={hp(8)} />
      <NativeText text={lngKey.BrandName} />
      <NativeText text={lngKey.Slogan} />
      <NativeText text={lngKey.Quote} />
      <NativeText text={lngKey.QuoteBy} />
      <NativeText text={lngKey.Skip} />
    </Background>
  );
};
