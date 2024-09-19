import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { nextStep, previousStep, setAnswer } from "../redux/slices/formSlice";
import FormOptions from "./FormOptions";
import questions from "../assets/data/Questions";

const FormCard = ({ setIsSubmitted }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.form.currentStep);
  const answers = useSelector((state) => state.form.answers);
  const formCompleted = useSelector((state) => state.form.formCompleted);

  const [errors, setErrors] = useState({});
  const [containerHeight, setContainerHeight] = useState("auto");
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [hasNextClicked, setHasNextClicked] = useState(false);

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phone) =>
    /^(\+?\d{1,4}[\s-]?)?(\(?\d{2,4}\)?[\s-]?)?\d{2,4}[\s-]?\d{4,10}$/.test(
      phone
    );

  const ConfigureValueType = (option) => {
    let value = answers[currentStep] || "";
    if (
      option.type === "tel" ||
      option.type === "email" ||
      option.type === "textarea"
    ) {
      return (value = answers[currentStep]?.[option.id] || "");
    }
    if (option.type === "file") {
      return (value = answers[currentStep] || []);
    }
    return value;
  };

  const HandleQuestionError = (option, value, tempErrors, isValid) => {
    switch (option.type) {
      case "email":
        if (!validateEmail(value)) {
          tempErrors.general = "Invalid email address.";
          isValid = false;
        }
        break;

      case "tel":
        if (!validatePhoneNumber(value)) {
          tempErrors.general = "Invalid phone number.";
          isValid = false;
        }
        break;

      case "Mcq":
        if (hasNextClicked && value === "") {
          tempErrors.general = "Please select an option.";
          isValid = false;
        }
        break;

      case "textarea":
        if (hasNextClicked && value === "") {
          tempErrors.general = "This field is required.";
          isValid = false;
        }
        break;

      case "file":
        if (hasNextClicked && (value.length === 0 || value === "")) {
          tempErrors.general = "Please upload a file.";
          isValid = false;
        }
        break;

      default:
        // Required check for any type
        if (option.required && !value && hasNextClicked) {
          tempErrors.general = "This field is required.";
          isValid = false;
        }
        break;
    }

    return isValid;
  };

  const validateForm = () => {
    const currentQuestion = questions[currentStep];
    let isValid = true;
    let tempErrors = {};

    if (!currentQuestion) return true;

    if (currentQuestion.type === "MultipleSelect") {
      const value = answers[currentStep] || [];
      if (value.length === 0) {
        isValid = false;
        tempErrors.general = "Please select at least one option.";
      }
    } else if (currentQuestion.type === "SingleSelect") {
      const value = answers[currentStep] || "";

      if (currentQuestion.required && value === "" && hasNextClicked === true) {
        isValid = false;
        tempErrors.general = "Please select an option.";
      }
    } else {
      currentQuestion.options.forEach((option) => {
        let value = ConfigureValueType(option);
        HandleQuestionError(option, value, tempErrors, isValid);
      });
    }

    setErrors(tempErrors);
    setIsNextButtonDisabled(!isValid); // Update button disabled state
    return isValid;
  };
  useEffect(() => {
    // Re-validate form whenever the answer changes
    validateForm();
  }, [answers, hasNextClicked, currentStep]);

  useEffect(() => {
    if (contentRef.current && currentStep !== 1) {
      setContainerHeight(`${contentRef.current.scrollHeight + 30}px`);
    }
  }, [currentStep]);

  const handleSelect = (selectedItems) => {
    if (currentQuestion.type === "text") {
      const currentAnswer = answers[currentStep] || {};
      dispatch(
        setAnswer({
          step: currentStep,
          answer: { ...currentAnswer, ...selectedItems }, // Merge new input with existing values
        })
      );
    } else {
      // Set the answer before validating the form
      dispatch(setAnswer({ step: currentStep, answer: selectedItems }));
    }
    // Validate after setting the answer
    validateForm();
    setHasNextClicked(true);
  };

  // const handleNext = () => {
  //   setHasNextClicked(true);
  //   const isValid = validateForm(); // Ensure validation runs first
  //   if (isValid) {
  //     if (formCompleted) {
  //       handleSubmit(); // Submit form if on the last step
  //     } else {
  //       dispatch(nextStep()); // Move to the next step if not the last step
  //     }
  //     setHasNextClicked(false);
  //   }
  // };

  const handleNext = () => {
    setHasNextClicked(true);
    validateForm();
    if (!isNextButtonDisabled && hasNextClicked) {
      dispatch(nextStep());
      setHasNextClicked(false);
    }
  };

  const handleSubmit = async () => {
    try {
      // Ensure last question is answered
      const lastQuestionAnswer = answers["22"] || answers["23"];

      if (!lastQuestionAnswer) {
        validateForm();
        setErrors({
          general: "Please answer the last question before submitting.",
        });
        return; // Prevent submission if not answered
      }

      // Check if the user answered "Yes" to question ID 22
      const Route1shouldStoreData = answers["22"] === "Yes";
      const Route2shouldStoreData = answers["23"] === "Yes";

      if (Route1shouldStoreData || Route2shouldStoreData) {
        // Send the data to the API only if the user agreed to store their data
        const response = await fetch(
          "https://3ye1yixzfj.execute-api.eu-west-1.amazonaws.com/dev/form/store",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ answers }.answers),
          }
        );

        if (!response.ok) {
          throw new Error("Submission failed");
        }
      }

      // Set submission as successful regardless of the API call
      setIsSubmitted(true);
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const handleBack = () => {
    dispatch(previousStep());
    setHasNextClicked(true); // Reset hasNextClicked when going back
  };

  const currentQuestion = questions[currentStep] || {};

  return (
    <div className="space-y-3 rounded-md overflow-hidden shadow-2xl mt-9">
      <div
        className="questions-container flex flex-col items-center min-h-[40px] justify-center w-full md:w-[900px] mt-3"
        style={{ height: containerHeight }}
        ref={containerRef}
      >
        <TransitionGroup>
          <CSSTransition
            key={currentStep}
            timeout={300}
            classNames="fade"
            className="w-full md:w-[900px] "
            onEnter={() => setContainerHeight("auto")}
            onExit={() => setContainerHeight("auto")}
          >
            <div ref={contentRef}>
              <h1
                className={`text-[1rem] text-center font-poppins font-normal px-4 leading-[-3px] ${
                  errors.general && hasNextClicked && "text-red-600"
                }`}
              >
                {currentQuestion.question}
              </h1>
              {currentQuestion.question && (
                <FormOptions
                  type={currentQuestion.type || null}
                  options={currentQuestion.options}
                  selectedAnswer={answers[currentStep]}
                  onSelect={handleSelect}
                  setIsNextButtonDisabled={setIsNextButtonDisabled}
                  isNextButtonDisabled={isNextButtonDisabled}
                  hasNextClicked={hasNextClicked}
                  errors={errors}
                />
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="flex flex-row justify-between w-full bg-blue-700 mb-5 gap-2 sm:gap-5">
        <button
          className={`px-4 py-3 rounded min-w-[200px] text-[#d4d4d4] ${
            currentStep === 1 ? "opacity-0 cursor-default" : "cursor-pointer"
          }`}
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </button>

        <button
          className={`text-white hover:text-[#cdcdcd] px-4 py-3 rounded-br-lg rounded-bl-lg min-w-[200px] flex items-center justify-center gap-3 ${
            isNextButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={
            formCompleted || currentStep === 23 || currentStep === 22
              ? handleSubmit
              : handleNext
          }
          // disabled={isNextButtonDisabled}
        >
          {formCompleted || currentStep === 23 || currentStep === 22
            ? "Submit"
            : "Next"}
        </button>
      </div>
    </div>
  );
};

export default FormCard;
