import {useEffect, useState} from 'react';
import {THEMES, useThemeController} from '../Theme/useThemeController';
import {light} from './light';
import {ColorName} from './colorName';
import {dark} from './dark';

export let getColor = (colorName: ColorName) =>
  console.log(
    `Please register useColorController in app.ts file.\nThis color is ${colorName}`,
  );

export const useColorController = () => {
  const theme = useThemeController();
  const [colors, setColors] = useState(light);

  useEffect(() => {
    //register getCurrentColor registered
    getColor = getCurrentColor;
    if (theme.getCurrentTheme() === THEMES.dark) {
      setColors(dark);
    } else {
      setColors(light);
    }
  }, [theme.getCurrentTheme()]);

  const getCurrentColor = (colorName: ColorName) => {
    return colors[colorName];
  };
};
