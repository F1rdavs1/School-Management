import React from "react";

function Header({ title }) {
  return (
    <button className="w-[120px] rounded-[8px] bg-[#509CDB] py-[11.5px] font-semibold text-[14px] leading-[17.36px] text-[#FCFAFA]">
      {title}
    </button>
  );
}

export default Header;
