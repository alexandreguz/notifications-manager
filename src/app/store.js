import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './NavBarSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
