import React from "react";

export const Input = ({
  id,
  name,
  label,
  type,
  autoComplete,
  handleChange,
}) => {
  return (
    <div className="py-2 my-2">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={label}
        onChange={handleChange}
      />
    </div>
  );
};
