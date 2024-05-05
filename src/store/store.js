// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from "./jobSlice"
import jobFilterReducer from './JobFilterSlice';

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    jobFilter: jobFilterReducer 
  }
});
