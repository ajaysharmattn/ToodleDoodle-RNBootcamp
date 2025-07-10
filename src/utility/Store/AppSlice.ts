import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TODO, USER } from '../Constants';
import { verifyValidEmail, verifyValidPassword } from '../UtilityFunctions';
import { Alert } from 'react-native';

export interface AppState {
  currentUserPhone: string; // Unique identifier for the user, will be set as user's phone number
  isLoggedIn: boolean;
  todos: TODO[];
  users: USER[];
}

const initialState: AppState = {
  currentUserPhone: '',
  isLoggedIn: false,
  todos: [],
  users: [],
};

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<{ currenUserPhone: string }>) => {
      const { currenUserPhone } = action.payload;
      state.currentUserPhone = currenUserPhone;
      state.isLoggedIn = true;
    },
    addNewUser: (state, action: PayloadAction<USER>) => {
      state.users.push(action.payload);
    },
    updateUserDetail: (
      state,
      action: PayloadAction<{
        option: keyof Omit<USER, 'phone'>;
        data: string;
      }>,
    ) => {
      switch (action.payload.option) {
        case 'username':
          if (action.payload.data !== '') {
            state.users = state.users.map(user =>
              user.phone === state.currentUserPhone
                ? { ...user, username: action.payload.data }
                : user,
            );
          }
          break;
        case 'email':
          if (verifyValidEmail(action.payload.data)) {
            state.users = state.users.map(user =>
              user.phone === state.currentUserPhone
                ? { ...user, email: action.payload.data }
                : user,
            );
          }
          break;
        case 'password':
          if (verifyValidPassword(action.payload.data)) {
            state.users = state.users.map(user =>
              user.phone === state.currentUserPhone
                ? { ...user, password: action.payload.data }
                : user,
            );
          }
          break;
        default:
          Alert.alert(
            'Invalid Option',
            'Please select a valid option to update.',
          );
          return;
      }
    },
    removeAuthState: state => {
      state.currentUserPhone = '';
      state.isLoggedIn = false;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      if (state.isLoggedIn && action.payload) {
        const userTodos = state.todos.find(
          todo => todo[state.currentUserPhone],
        );
        if (userTodos) {
          userTodos[state.currentUserPhone].push(action.payload);
        } else {
          state.todos.push({ [state.currentUserPhone]: [action.payload] });
        }
      }
    },
  },
});

export const { setAuthState, addNewUser, updateUserDetail, removeAuthState, addTodo } =
  appSlice.actions;

export default appSlice.reducer;
