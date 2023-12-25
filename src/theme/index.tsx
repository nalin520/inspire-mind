import React, {useEffect, useState} from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import type {StatusBarStyle} from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  useTheme,
} from 'react-native-paper';
import {darkThemeColor, lightThemeColor} from './config';

const lightTheme = {
  ...DefaultTheme,
  colors: lightThemeColor.colors,
} as const;
const darkTheme = {
  ...DefaultTheme,
  colors: darkThemeColor.colors,
} as const;
const STYLES = ['dark-content', 'light-content'] as const;

export type AppTheme = typeof darkTheme;

export const useAppTheme = () => useTheme<AppTheme>();

export default function ThemeProvider({children}: any) {
  const colorScheme = useColorScheme();
  const [activeTheme, setActiveTheme] = useState(colorScheme ?? 'light');
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );

  useEffect(() => {
    // async function checkTheme() {
    //   const themeType = await getDefaultThemeName(colorScheme);
    //   setActiveTheme(themeType);
    // }

    // checkTheme();
    if (colorScheme) {
      setActiveTheme(colorScheme);
      setStatusBarStyle(
        colorScheme === 'dark' ? 'light-content' : 'dark-content',
      );
    }
  }, [colorScheme]);

  const paperTheme = activeTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar
        animated={true}
        backgroundColor={paperTheme.colors.background}
        barStyle={statusBarStyle}
      />
      {children}
    </PaperProvider>
  );
}
