import React from "react";

function Input({ type, placeholder, name, extraStyle, isRequired }) {
  return (
    <input
      className={`w-full py-[13px] pl-[13px] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] focus:shadow-md focus:duration-300 ${extraStyle}`}
      type={type}
      placeholder={placeholder}
      name={name}
      required={isRequired}
    />
  );
}

export default Input;
