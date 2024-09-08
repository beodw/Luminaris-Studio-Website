import React from "react";
import { useState } from "react";

const FormTextLayout = ({ options, selectedAnswer, onSelect, errors }) => {
  const [shakingFields, setShakingFields] = useState({});

  const handleChange = (id, value, type) => {
    onSelect({ [id]: value });
    setShakingFields({ ...shakingFields, [id]: false }); // Reset shake effect on input change
  };

  const handleInvalidInput = (id) => {
    setShakingFields({ ...shakingFields, [id]: true }); // Trigger shake effect
    setTimeout(() => {
      setShakingFields({ ...shakingFields, [id]: false }); // Stop shaking after 0.5 seconds
    }, 500);
  };

  return (
    <div className="flex flex-wrap gap-4 px-4 py-3 justify-evenly items-center font-poppins w-full text-gray-800">
      {options.map((option) => (
        <div
          key={option.id}
          className={`w-full flex flex-col gap-4 justify-center items-center px-4`}
        >
          {option.type === "textarea" ? (
            <textarea
              rows={8}
              className={`h-28 w-full border p-2 pb-3 rounded-sm focus:ring-[#000] focus:outline-none ${
                errors[option.id] ? "border-red-500" : "border-[#4b4b4b9d]"
              } ${
                shakingFields[option.id] ? "animate-shake border-red-500" : ""
              }`} // Add shake effect and border-red when errors exist
              value={selectedAnswer?.[option.id] || ""}
              onChange={(e) => handleChange(option.id, e.target.value, "text")}
              required
              onBlur={() => errors[option.id] && handleInvalidInput(option.id)} // Trigger shake on invalid input
            />
          ) : (
            <input
              type={option.type}
              placeholder={option.name}
              className={`h-10 w-full border p-2 rounded-md focus:ring-[#000] focus:outline-none ${
                errors[option.id] ? "border-red-500" : "border-[#44444493]"
              } ${
                shakingFields[option.id] ? "animate-shake border-red-500" : ""
              }`} // Add shake effect and border-red when errors exist
              value={selectedAnswer?.[option.id] || ""}
              onChange={(e) =>
                handleChange(option.id, e.target.value, option.type)
              }
              required
              onBlur={() => errors[option.id] && handleInvalidInput(option.id)} // Trigger shake on invalid input
            />
          )}
          {errors[option.id] && (
            <p className="text-red-500 w-full text-sm -mt-3 -mb-2">
              {errors[option.id]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormTextLayout;
