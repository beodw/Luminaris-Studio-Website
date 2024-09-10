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
      const question = questions[currentStep];

      const isTextQuestion = question?.type === "text";
      const isMultipleSelectQuestion = question?.type === "MultipleSelect";

      if (isTextQuestion && typeof selectedAnswer === "string") {
        if (selectedAnswer.trim() !== "") {
          const nextStepId = question?.next?.[1] || state.currentStep + 1;
          state.currentStep = nextStepId;
        } else {
          console.error("Text input is required to proceed");
        }
      } else if (isMultipleSelectQuestion && Array.isArray(selectedAnswer)) {
        if (selectedAnswer.length > 0) {
          const nextStepId = question?.next?.[1] || state.currentStep + 1;
          state.currentStep = nextStepId;
        } else {
          console.error("At least one option should be selected");
        }
      } else if (selectedAnswer) {
        const selectedOption = question.options?.find(
          (option) => option.name === selectedAnswer
        );
        let nextStepId = question?.next?.[selectedOption?.id];
        if (question.type === "text") {
          nextStepId = question?.next?.[1];
        }

        if (nextStepId === true) {
          state.formCompleted = true;
        } else if (nextStepId) {
          console.log(state.currentStep, nextStep);
          console.log(question?.next?.[1]);

          state.currentStep = nextStepId;
        } else {
          console.log(question?.next?.[1]);
          console.error("No next step ID found");
        }
      } else {
        console.error("Answer is required to proceed");
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

      // Ensure MultipleSelect answers are stored as arrays
      if (Array.isArray(answer)) {
        state.answers[step] = [...answer];
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
