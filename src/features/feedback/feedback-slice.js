import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: {
    type: null, // 'success' or 'error'
    message: '',
    show: false,
  },
  reducers: {
    showFeedback: (state, action) => {
      console.log(state)
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.show = action.payload.show;
    },
    hideFeedback: (state) => {
      state.show = false;
      state.type = null
    },
  },
});

export const { showFeedback, hideFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;