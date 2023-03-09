import { configureStore, combineReducers } from '@reduxjs/toolkit';

import participantsSlice from './participants_slice';
import userSlice from './user_slice';
import pageSlice from './page_slice';
import modalActiveSlice from './modal_active_slice';
import showListSlice from './show_list';

const rootReducer = combineReducers({
  user: userSlice,
  participants: participantsSlice,
  page: pageSlice,
  modalActive: modalActiveSlice,
  showList: showListSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
