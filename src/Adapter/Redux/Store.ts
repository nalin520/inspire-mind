import {configureStore} from '@reduxjs/toolkit';

import {colorsSlice} from '../../Controller/Color/colorSlice';
import {themeSlice} from '../../Controller/ThemeController/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    color: colorsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
