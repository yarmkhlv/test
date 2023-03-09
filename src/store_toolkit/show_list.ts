/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const showListSlice = createSlice({
  name: 'showList',
  initialState: false,
  reducers: {
    changeShowList() {
      return true;
    },
  },
});

export default showListSlice.reducer;
export const { changeShowList } = showListSlice.actions;
