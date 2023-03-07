/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { Participant } from 'helpers/interfaces';

const participantsSlice = createSlice({
  name: 'participants',
  initialState: [] as Participant[],
  reducers: {
    getParticipants(state, action) {
      return [...state, ...action.payload];
    },
    addUserToParticipants(state, action) {
      return [...state, action.payload];
    },
    removeUserFromParticipants(state, action) {
      return state.filter((member) => member !== action.payload);
    },
  },
});

export default participantsSlice.reducer;
export const {
  getParticipants,
  addUserToParticipants,
  removeUserFromParticipants,
} = participantsSlice.actions;
