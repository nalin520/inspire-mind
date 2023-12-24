import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
