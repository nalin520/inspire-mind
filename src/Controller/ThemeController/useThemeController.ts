import {useSelector} from 'react-redux';
import {RootState} from '../../Adapter/Redux/Store';
import {themeSlice} from './themeSlice';

export enum THEMES {
  light = 'light',
  dark = 'dark',
}
export const useThemeController = () => {
  const themeAction = themeSlice.actions;
  const currentTheme = useSelector(
    (state: RootState) => state.theme.defaultTheme,
  );
  const getCurrentTheme = () => {
    return currentTheme;
  };
  const changeCurrentTheme = (updatedTheme: THEMES) => {
    themeAction.setTheme(updatedTheme);
  };
  return {
    getCurrentTheme,
    changeCurrentTheme,
  };
};
