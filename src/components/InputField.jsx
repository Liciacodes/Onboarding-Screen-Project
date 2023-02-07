import React from "react";

const InputField = ({
  name,
  type,
  value,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

export default InputField;
