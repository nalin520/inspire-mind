import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getDefaultThemeName(colorScheme: any) {
  try {
    const themeType = await AsyncStorage.getItem('theme');
    const defaultTheme = colorScheme ?? 'light';

    if (!themeType) {
      return defaultTheme;
    }

    if (themeType === 'auto') {
      return defaultTheme;
    } else if (themeType === 'dark') {
      return 'dark';
    }
  } catch (error) {}

  return 'light';
}
