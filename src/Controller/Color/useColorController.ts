import {useEffect, useState} from 'react';
import {THEMES, useThemeController} from '../Theme/useThemeController';
import {useSelector} from 'react-redux';
import {RootState} from '../../Adapter/Redux/Store';
import {colorsSlice} from './colorSlice';

export enum ColorName {
  primary_001 = 'primary_001',
  primary_002 = 'primary_002',

  secondary_001 = 'secondary_001',
  secondary_002 = 'secondary_002',

  danger_001 = 'danger_001',
  danger_002 = 'danger_002',
}

const COLOR_COMBINATION = [
  ['COLOR_NAME', THEMES.light, THEMES.dark],
  [ColorName.primary_001, '#000000', '#887744'],
  [ColorName.primary_001, '#f54842', '#885569'],
];

export const useColorController = () => {
  const colors = useSelector((state: RootState) => state.color);
  const colorsAction = colorsSlice.actions;
  const theme = useThemeController();

  useEffect(() => {
    if (theme.getCurrentTheme() === THEMES.dark) {
    }
  }, [theme.getCurrentTheme()]);

  const getColor = (colorName: ColorName) => {
    return colors[colorName];
  };
};
