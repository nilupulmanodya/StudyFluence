import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    singedInAs: '0',
  },
  reducers: {
    setSingedInAs: (state, action) => {
      state.singedInAs = action.payload;
    },
  },
});

export const { setSingedInAs } = authSlice.actions;
export default authSlice.reducer;
