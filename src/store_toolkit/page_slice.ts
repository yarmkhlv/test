/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: 0,
  reducers: {
    increasePage(state) {
      return state + 1;
    },
  },
});

export default pageSlice.reducer;
export const { increasePage } = pageSlice.actions;
