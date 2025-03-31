import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice'
import feedbackReducer from './feedback/feedback-slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    feedback: feedbackReducer
  },
});

export default store;