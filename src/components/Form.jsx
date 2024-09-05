import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, previousStep, setAnswer } from "../redux/slices/formSlice";
import FormOptions from "./FormOptions";
import OfferCards from "../page/OfferCards";
import "@fontsource/poppins";
import HandShake from "../assets/images/handshake.png";
import Rocket from "../assets/images/rocket.png";
import Scale from "../assets/images/scale.png";
import { useNavigate } from "react-router-dom";

const questions = {
  1: {
    question: "What best describes your business?",
    options: [
      { name: "I want to sell my business", img: HandShake, id: 1 },
      { name: "I want to start my business", img: Scale, id: 2 },
      { name: "I want to scale my business", img: Rocket, id: 3 },
    ],
    next: {
      1: 2,
      2: 3,
      3: 4,
    },
  },
  //   2: {
  //     question: "Where is your business based?",
  //     options: [
  //       { name: "USA", id: 1 },
  //       { name: "Canada", id: 2 },
  //       { name: "Other", id: 3 },
  //     ],
  //     next: {
  //       1: 3,
  //       2: 3,
  //       3: 3,
  //     },
  //   },
  //   3: {
  //     question: "What type of business do you have?",
  //     options: [
  //       { name: "Retail", id: 1 },
  //       { name: "Service", id: 2 },
  //       { name: "Manufacturing", id: 3 },
  //     ],
  //     next: {
  //       1: 4,
  //       2: 4,
  //       3: 4,
  //     },
  //   },
  //   4: {
  //     question: "Additional details based on your previous answers.",
  //     options: [
  //       { name: "Detail 1", id: 1 },
  //       { name: "Detail 2", id: 2 },
  //     ],
  //     next: {
  //       1: null,
  //       2: null,
  //     },
  //   },
};

const Form = ({ handleClose }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.form.currentStep);
  const answers = useSelector((state) => state.form.answers);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    const selectedAnswer = answers[currentStep];

    if (selectedAnswer) {
      const selectedOption = questions[currentStep].options.find(
        (option) => option.name === selectedAnswer
      );

      if (selectedOption) {
        const nextStepId =
          questions[currentStep]?.next?.[selectedOption.id] || null;

        if (nextStepId) {
          dispatch(nextStep());
        } else {
          console.error("No next step defined for the selected answer.");
        }
      } else {
        console.error("No matching option found for the selected answer.");
      }
    } else {
      console.error("No answer selected.");
    }
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

  // If the form is submitted, render the ThankYou component
  if (isSubmitted) {
    navigate("/packages");
  }

  return (
    <div className="flex flex-col  min-h-[550px] items-center my-2 -mt-2 sm:p-5 md:p-3 xl:p-1 rounded overflow-x-hidden z-50">
      <h2 className="text-[26px] border-t border-black pt-[30px] max-w-[676px] mx-auto mb-[12px] mt-[30px] font-poppins font-extrabold">
        <span>DO YOU WANT TO</span>{" "}
        <span className="text-purple-700">SCALE YOUR BUSINESS</span>
        <span>?</span>
      </h2>
      <div className="space-y-5 rounded-md overflow-hidden shadow-2xl mt-9">
        <div className="  flex flex-col items-center justify-center w-[900px] mt-3">
          <h1 className="text-[1rem]  text-center font-poppins font-normal ">
            {currentQuestion.question}
          </h1>
          {currentQuestion.question && (
            <FormOptions
              options={currentQuestion.options}
              selectedAnswer={answers[currentStep]}
              onSelect={handleSelect}
            />
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full bg-blue-700 mb-5 gap-2 sm:gap-5">
          <button
            className={`px-4 py-3 rounded min-w-[200px]  cursor-pointer ${
              currentStep === 1 && "opacity-0 cursor-default"
            }`}
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </button>

          <button
            className=" text-white hover:text-[#cdcdcd] px-4 py-3 rounded-br-lg rounded-bl-lg  min-w-[200px] flex items-center justify-center gap-3 cursor-pointer"
            onClick={currentStep === 1 ? handleSubmit : handleNext}
            disabled={!answers[currentStep]}
          >
            {currentStep === 4 ? "Submit" : "Next"}
            {currentStep !== 4 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
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
    </div>
  );
};

export default Form;
