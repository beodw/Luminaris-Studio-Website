import React, { useState, useEffect } from "react";

const FormMultipleSelectLayout = ({
  options,
  selectedAnswer = [],
  onSelect,
  errors,
  hasNextClicked,
}) => {
  const [selectedItems, setSelectedItems] = useState(
    Array.isArray(selectedAnswer) ? selectedAnswer : []
  );
  const [ShowError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(true);
  }, [errors, hasNextClicked]);

  useEffect(() => {
    if (Array.isArray(selectedAnswer)) {
      setSelectedItems(selectedAnswer);
    }
  }, [selectedAnswer]);

  const handleSelect = (option) => {
    setSelectedItems((prev) => {
      const isSelected = prev.includes(option);

      // If the option is already selected, we remove it
      if (isSelected) {
        const updatedItems = prev.filter((item) => item !== option);
        onSelect(updatedItems);
        return updatedItems;
      } else {
        // Otherwise, we add it to the selected items
        const updatedItems = [...prev, option];
        onSelect(updatedItems);
        return updatedItems;
      }
    });
  };

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 justify-evenly items-center font-poppins 
    w-full text-gray-800"
      >
        {options.map((option) => (
          <button
            key={option.id}
            className={`border flex gap-3 py-3 items-center bg-white 
          text-black rounded-md 
          shadow-effect w-full text-center
          ${
            selectedItems.includes(option.name)
              ? "border-blue-500"
              : "border-gray-300"
          }
          `}
            onClick={() => handleSelect(option.name)} // Ensure that clicking "No Platform" triggers handleSelect properly
          >
            <div className="">
              <div className="flex ml-2 w-5 h-5 rounded-md border-2 relative">
                {selectedItems.includes(option.name) && (
                  <div className="w-3 h-3 bg-blue-500 rounded-sm m-auto"></div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center px-4 xl:px-[9px] w-full ">
              <span className="font-normal">{option.name}</span>
            </div>
          </button>
        ))}
      </div>
      {errors.general && ShowError && (
        <p className="text-red-500 w-full  text-sm mt-1 pl-4 -mb-0 ">
          {errors.general}
        </p>
      )}
    </>
  );
};

export default FormMultipleSelectLayout;
