import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notificationsSlice';

export const store = configureStore({
  reducer: {
    navbar: notificationsReducer
  }
});