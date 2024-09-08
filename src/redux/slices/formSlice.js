import { createSlice } from "@reduxjs/toolkit";
import questions from "../../assets/data/Questions";

const initialState = {
  currentStep: 1,
  answers: {},
  formCompleted: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep(state) {
      const currentStep = state.currentStep;
      const selectedAnswer = state.answers[currentStep];

      const isTextQuestion = questions[currentStep]?.type === "text";
      const isMultipleSelectQuestion =
        questions[currentStep]?.type === "MultipleSelect";

      if (isTextQuestion || selectedAnswer) {
        const selectedOption = isTextQuestion
          ? null
          : questions[currentStep]?.options?.find(
              (option) => option.name === selectedAnswer
            );

        const nextStepId = isTextQuestion
          ? questions[currentStep]?.next?.[1]
          : questions[currentStep]?.next?.[selectedOption?.id];

        if (nextStepId === true) {
          state.formCompleted = true;
        } else if (nextStepId) {
          state.currentStep = nextStepId;
        } else {
          console.error("No next step ID found");
        }
      }

      if (isMultipleSelectQuestion || selectedAnswer) {
        const selectedOption = isTextQuestion
          ? null
          : questions[currentStep]?.options?.find(
              (option) => option.name === selectedAnswer
            );

        const nextStepId = isMultipleSelectQuestion
          ? questions[currentStep]?.next?.[1]
          : questions[currentStep]?.next?.[selectedOption?.id];
        console.log(nextStepId);
        console.log(selectedOption);

        if (nextStepId === true) {
          state.formCompleted = true;
        } else if (nextStepId) {
          state.currentStep = nextStepId;
        } else {
          console.error("No next step ID found");
        }
      }
    },
    previousStep(state) {
      const currentStep = state.currentStep;
      const previousStepId = questions[currentStep]?.previous;

      if (previousStepId) {
        state.currentStep = previousStepId;
      } else if (currentStep > 1) {
        state.currentStep -= 1;
      } else {
        console.error("No previous step ID found");
      }
    },
    setAnswer(state, action) {
      const { step, answer } = action.payload;
      console.log(`Setting answer for step ${step}:`, answer);

      if (typeof answer === "object") {
        state.answers[step] = { ...state.answers[step], ...answer };
      } else {
        state.answers[step] = answer;
      }
      state.formCompleted = false;
    },

    resetForm(state) {
      return initialState;
    },
  },
});

export const { nextStep, previousStep, setAnswer, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
