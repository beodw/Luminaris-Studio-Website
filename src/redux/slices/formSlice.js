// import { createSlice } from "@reduxjs/toolkit";
// import questions from "../../utils/Questions";

// const initialState = {
//   currentStep: 1,
//   answers: {},
//   formCompleted: false,
// };

// const formSlice = createSlice({
//   name: "form",
//   initialState,
//   reducers: {
//     nextStep(state) {
//       const currentStep = state.currentStep;
//       const selectedAnswer = state.answers[currentStep];

//       const isTextQuestion = questions[currentStep]?.type === "text";

//       if (isTextQuestion || selectedAnswer) {
//         const selectedOption = questions[currentStep]?.options?.find(
//           (option) => option.name === selectedAnswer
//         );

//         const nextStepId = isTextQuestion
//           ? questions[currentStep]?.next?.[1]
//           : questions[currentStep]?.next?.[selectedOption?.id];

//         if (nextStepId === true) {
//           state.formCompleted = true;
//         } else if (nextStepId) {
//           state.currentStep = nextStepId;
//         } else {
//           console.error("No next step ID found");
//         }
//       }
//     },
//     previousStep(state) {
//       if (state.currentStep > 1) {
//         state.currentStep -= 1;
//       }
//     },
//     setAnswer(state, action) {
//       const { step, answer } = action.payload;
//       state.answers[step] = answer;
//       state.formCompleted = false; // Reset completion flag when answers are updated
//     },
//     resetForm(state) {
//       return initialState; // Reset the form state
//     },
//   },
// });

// export const { nextStep, previousStep, setAnswer, resetForm } =
//   formSlice.actions;
// export default formSlice.reducer;
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

      // Check if the current question type is 'text'
      const isTextQuestion = questions[currentStep]?.type === "text";

      // Handle both text and MCQ types
      if (isTextQuestion || selectedAnswer) {
        const selectedOption = isTextQuestion
          ? null
          : questions[currentStep]?.options?.find(
              (option) => option.name === selectedAnswer
            );

        const nextStepId = isTextQuestion
          ? questions[currentStep]?.next?.[1] // Adjust based on text question logic
          : questions[currentStep]?.next?.[selectedOption?.id];

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

      // Check if there's a previous step for the current question
      const previousStepId = questions[currentStep]?.previous;

      if (previousStepId) {
        state.currentStep = previousStepId;
      } else if (currentStep > 1) {
        state.currentStep -= 1; // Fallback to decrement if no previous step ID is found
      } else {
        console.error("No previous step ID found");
      }
    },
    setAnswer(state, action) {
      const { step, answer } = action.payload;
      if (typeof answer === "object") {
        // If answer is an object, update the state with individual text fields
        state.answers[step] = { ...state.answers[step], ...answer };
      } else {
        // For MCQ and other types, use the existing logic
        state.answers[step] = answer;
      }
      state.formCompleted = false; // Reset completion flag when answers are updated
    },
    resetForm(state) {
      return initialState; // Reset the form state
    },
  },
});

export const { nextStep, previousStep, setAnswer, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
