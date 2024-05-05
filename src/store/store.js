// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from "./jobSlice"

export default configureStore({
  reducer: {
    jobs: jobsReducer
  }
});
