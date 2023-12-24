import {configureStore} from '@reduxjs/toolkit';
import theme from '../../Controller/Theme/themeSlice';
import UserReduce from './slice/user';

export const store = configureStore({
  reducer: {
    theme,
    user: UserReduce,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
