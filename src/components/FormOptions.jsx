import React from "react";
import FormOptionLayout from "./FormOptionLayout";
import FormTextLayout from "./FormTextLayout";

const FormOptions = ({ type, options, selectedAnswer, onSelect }) => {
  if (type === "Mcq") {
    return (
      <FormOptionLayout
        options={options}
        selectedAnswer={selectedAnswer}
        onSelect={onSelect}
      />
    );
  }
  if (type === "text") {
    return (
      <FormTextLayout
        options={options}
        selectedAnswer={selectedAnswer}
        onSelect={onSelect}
      />
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 justify-evenly items-center font-poppins text-gray-800 w-full">
      {options.map((option) => (
        <button
          key={option.id}
          className={`border flex flex-col items-center bg-white text-black rounded-md ${
            selectedAnswer === option.name
              ? "border-blue-500 bg-[#e4e4e4d4]"
              : "border-gray-300"
          } shadow-effect w-full text-center`}
          onClick={() => onSelect(option.name)}
        >
          <div className="w-full">
            <div
              className={`flex mt-2 ml-2 w-5 h-5 rounded-full border-2 relative ${
                selectedAnswer === option.name
                  ? "bg-blue-500 border-blue-500"
                  : ""
              }`}
            >
              {selectedAnswer === option.name && (
                <div className="w-3 h-3 bg-white rounded-full m-auto"></div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center px-4 xl:px-[9px] pb-4 ">
            {option.img && (
              <img src={option.img} alt="" className="w-16 h-auto" />
            )}
            <span className="font-normal">{option.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default FormOptions;
