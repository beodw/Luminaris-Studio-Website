import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, previousStep, setAnswer } from "../redux/slices/formSlice";
import FormOptions from "./FormOptions";
import questions from "../assets/data/Questions";

const FormCard = ({ setIsSubmitted }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.form.currentStep);
  const answers = useSelector((state) => state.form.answers);
  const formCompleted = useSelector((state) => state.form.formCompleted);

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleBack = () => {
    dispatch(previousStep());
  };

  const handleSelect = (answer) => {
    dispatch(setAnswer({ step: currentStep, answer }));
  };

  const currentQuestion = questions[currentStep] || {};

  return (
    <div className="space-y-5 rounded-md overflow-hidden shadow-2xl mt-9">
      <div className="flex flex-col items-center justify-center w-[900px] mt-3">
        <h1 className="text-[1rem] text-center font-poppins font-normal px-4 leading-[-3px]">
          {currentQuestion.question}
        </h1>
        {currentQuestion.question && (
          <FormOptions
            type={currentQuestion.type || null}
            options={currentQuestion.options}
            selectedAnswer={answers[currentStep]}
            onSelect={handleSelect}
          />
        )}
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full bg-blue-700 mb-5 gap-2 sm:gap-5">
        <button
          className={`px-4 py-3 rounded min-w-[200px] text-[#d4d4d4] cursor-pointer ${
            currentStep === 1 && "opacity-0 cursor-default"
          }`}
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </button>

        <button
          className="text-white hover:text-[#cdcdcd] px-4 py-3 rounded-br-lg rounded-bl-lg min-w-[200px] flex items-center justify-center gap-3 cursor-pointer"
          onClick={formCompleted ? handleSubmit : handleNext}
          disabled={!answers[currentStep] && !formCompleted}
        >
          {formCompleted ? "Submit" : "Next"}
          {!formCompleted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"npm s
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default FormCard;
