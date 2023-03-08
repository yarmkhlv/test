import { createSlice } from '@reduxjs/toolkit';

const metaMaskExtends = window.ethereum;

const modalActiveSlice = createSlice({
  name: 'modalActive',
  initialState: !metaMaskExtends,
  reducers: {
    changeModalActive(state) {
      return !state;
    },
  },
});

export default modalActiveSlice.reducer;
export const { changeModalActive } = modalActiveSlice.actions;
