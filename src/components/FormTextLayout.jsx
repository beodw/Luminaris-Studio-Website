import React from "react";

const FormTextLayout = ({ options, selectedAnswer, onSelect }) => {
  const handleChange = (id, value) => {
    onSelect({ [id]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 px-4 justify-evenly items-center font-poppins w-full text-gray-800">
      {options.map((option) => (
        <div
          key={option.id}
          className="w-full flex gap-4 justify-center items-center px-4"
        >
          {option.type === "textarea" ? (
            <textarea
              rows={8}
              className="h-28 w-full border border-[#4b4b4b9d] rounded-sm p-2"
              value={selectedAnswer?.[option.id] || ""}
              onChange={(e) => handleChange(option.id, e.target.value)}
            />
          ) : (
            <input
              type="text"
              className="h-10 w-full border p-2"
              value={selectedAnswer?.[option.id] || ""}
              onChange={(e) => handleChange(option.id, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormTextLayout;
