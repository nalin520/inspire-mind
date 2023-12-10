import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {THEMES} from './useThemeController';

export interface Theme {
  defaultTheme: THEMES;
}

const initialState: Theme = {
  defaultTheme: THEMES.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEMES>) => {
      state.defaultTheme = action.payload;
    },
  },
});
export default themeSlice.reducer;
