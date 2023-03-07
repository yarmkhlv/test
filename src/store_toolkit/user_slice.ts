/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { Participant } from 'helpers/interfaces';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: null,
    email: null,
    address: null,
    id: '322solo',
  } as Participant,
  reducers: {
    updateUsername(state, action) {
      state.username = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { updateUsername, updateEmail, updateAddress } = userSlice.actions;
