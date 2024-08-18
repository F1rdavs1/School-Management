import React from "react";

function Button({ type, title, extraStyle, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-[248px] py-[12px] rounded-md bg-[#2D88D4] font-bold text-[14px] leading-[17.36px] text-[#FFFFFF] ${extraStyle}`}
    >
      {title}
    </button>
  );
}

export default Button;
