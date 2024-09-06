import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import FormCard from "./FormCard";

const Form = ({ handleClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // If the form is submitted, render the ThankYou component
  if (isSubmitted) {
    navigate("/packages");
  }

  return (
    <div className="flex flex-col  min-h-[550px] items-center my-2 -mt-2 sm:p-5 md:p-3 xl:p-1 rounded overflow-x-hidden z-50">
      <div className="flex flex-col items-center mb-[12px]">
        <h2 className="text-[26px] border-t border-black pt-[30px] max-w-[676px] mx-auto  mt-[30px] font-poppins font-extrabold">
          <span>DO YOU WANT TO</span>{" "}
          <span className="text-purple-700">BUILD SOME SOFTWARE</span>
          <span>?</span>
        </h2>
        <p className="text-[14px] -mt-4 mx-auto font-poppins ">
          Human made software in weeks not months, for a fraction of the cost.
        </p>
      </div>
      <FormCard setIsSubmitted={setIsSubmitted} />
    </div>
  );
};

export default Form;
