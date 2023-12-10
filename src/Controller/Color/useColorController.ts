import {useEffect, useState} from 'react';
import {light} from './light';
import {dark} from './dark';
import {
  THEMES,
  useThemeController,
} from '../Theme/useThemeController';
import {ColorName} from './ColorName';
import {ColorValue} from 'react-native';

export const useColorController = () => {
  const [colors, setColors] = useState(light);
  const theme = useThemeController();
  useEffect(() => {
    if (theme.getCurrentTheme() === THEMES.dark) {
      setColors(dark);
    } else {
      setColors(light);
    }
  }, [theme.getCurrentTheme()]);

  const getColor = (colorName: ColorName) => {
    if (colors[colorName]) {
      return colors[colorName] as ColorValue;
    } else {
      return undefined;
    }
  };

  return {getColor};
};
