import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    singedInAs: '0',
    navigationView: 'home',
  },
  reducers: {
    setSingedInAs: (state, action) => {
      state.singedInAs = action.payload;
    },
    setNavigationView: (state, action) => {
      state.navigationView = action.payload;
    },
  },
});

export const { setSingedInAs, setNavigationView } = authSlice.actions;
export default authSlice.reducer;
