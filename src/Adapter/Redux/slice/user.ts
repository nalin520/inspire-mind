import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, {payload}) => {
      Object.keys(payload).forEach(key => {
        (state as any)[key] = payload[key];
      });
    },
  },
});

const {update} = UserSlice.actions;

export {update as updateUser};
export default UserSlice.reducer;
