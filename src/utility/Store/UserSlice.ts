import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { USER } from '../Constants';

const initialState: Omit<USER, 'password'> = {
  username: '',
  phone: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<{ phone: string; email: string; username: string}>) => {
        const { phone, email, username } = action.payload;
        state.phone = phone;
        state.email = email;
        state.username = username;
    },
    clearUser: state => {
      state.username = '';
      state.phone = '';
      state.email = '';
    },
  },
});

export const { setUserData, clearUser } = userSlice.actions;

export default userSlice.reducer;
