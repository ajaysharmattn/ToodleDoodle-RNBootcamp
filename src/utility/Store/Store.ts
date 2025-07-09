import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import userReducer from './UserSlice'
import appReducer from './AppSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const combinedReducer = combineReducers({
  userReducer: userReducer,
  appReducer: appReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
