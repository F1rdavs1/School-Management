import React from "react";
import { NavLink } from "react-router-dom";

function NavbarItem({ item }) {
  return (
    <li>
      <NavLink
        className={
          "flex items-center gap-[16px] py-[8px] pl-[16px] mb-[8px] rounded-[4px] hover:bg-[#509CDB] duration-300"
        }
        to={item.path}
      >
        {item.icon}
        <span className="font-semibold text-[14px] leading-[17.36px] text-[white]">
          {item.title}
        </span>
      </NavLink>
    </li>
  );
}

export default NavbarItem;
