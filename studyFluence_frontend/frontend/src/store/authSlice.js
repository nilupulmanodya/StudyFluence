import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    singedInAs: '0',
    navigationView: 'home',
    personalInfo : []
  },
  reducers: {
    setSingedInAs: (state, action) => {
      state.singedInAs = action.payload;
    },
    setNavigationView: (state, action) => {
      state.navigationView = action.payload;
    },
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
  },
});

export const { setSingedInAs, setNavigationView, setPersonalInfo } = authSlice.actions;
export default authSlice.reducer;
