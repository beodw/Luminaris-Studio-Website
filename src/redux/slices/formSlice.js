import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  answers: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep(state) {
      state.currentStep = state.currentStep + 1;
    },
    previousStep(state) {
      if (state.currentStep > 1) {
        state.currentStep = state.currentStep - 1;
      }
    },
    setAnswer(state, action) {
      const { step, answer } = action.payload;
      state.answers[step] = answer;  // Use step as key
    },
    clearAnswers(state) {
      state.answers = {};
    },
  },
});

export const { nextStep, previousStep, setAnswer, clearAnswers } = formSlice.actions;
export default formSlice.reducer;
