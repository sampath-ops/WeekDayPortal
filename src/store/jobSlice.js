// src/features/jobsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  loading: false,
  error: null
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    fetchJobsRequest(state) {
      state.loading = true;
    },
    fetchJobsSuccess(state, action) {
      state.loading = false;
      state.jobs = action.payload;
      state.error = null;
    },
    fetchJobsFailure(state, action) {
      state.loading = false;
      state.jobs = [];
      state.error = action.payload;
    }
  }
});

export const { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure } = jobsSlice.actions;

export default jobsSlice.reducer;
