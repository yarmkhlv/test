import { configureStore, combineReducers } from '@reduxjs/toolkit';

import participantsSlice from './participants_slice';
import userSlice from './user_slice';
import pageSlice from './page_slice';

const rootReducer = combineReducers({
  user: userSlice,
  participants: participantsSlice,
  page: pageSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
