import { configureStore } from '@reduxjs/toolkit';

import { interviewApi } from '../api/interviewApi';

const store = configureStore({
  reducer: {
    [interviewApi.reducerPath]: interviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(interviewApi.middleware),
});

export default store;
