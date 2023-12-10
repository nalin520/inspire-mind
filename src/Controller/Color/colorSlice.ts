import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ColorName} from './useColorController';

export type Colors =
  | {
      [key in ColorName]: string;
    }
  | undefined;

const initialState: Colors = undefined;

export const colorsSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    loadAllColors: (
      state,
      action: PayloadAction<{
        [key in ColorName]: string;
      }>,
    ) => {
      state = {...action.payload};
    },
  },
});
