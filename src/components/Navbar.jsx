import React from "react";
import DashboardLogo from "../assets/images/dashbord-logo.png";
import {
  BillingIcon,
  DashboardIcon,
  StudentsIcon,
  SettingsIcon,
  ExamsIcon,
  FeaturesIcon,
} from "../assets/icon";
import NavbarItem from "./NavbarItem";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarList = [
    {
      id: 1,
      title: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      title: "Teachers",
      path: "/teachers",
      icon: <DashboardIcon />,
    },
    {
      id: 3,
      title: "Students",
      path: "/students",
      icon: <StudentsIcon />,
    },
    {
      id: 4,
      title: "Billing",
      path: "/billing",
      icon: <BillingIcon />,
    },
    {
      id: 5,
      title: "Settings and profile",
      path: "/settings-profile",
      icon: <SettingsIcon />,
    },
    {
      id: 6,
      title: "Exams",
      path: "/exams",
      icon: <ExamsIcon />,
    },
  ];
  return (
    <nav className="h-screen overflow-y-auto bg-[#152259] pt-[26px] ">
      <label>
        <input className="hidden" type="file" />
        <img
          className="mx-auto"
          src={DashboardLogo}
          alt="DashboardLogo"
          width={65}
          height={65}
        />
        <h3 className="text-center mt-[22px] mb-[16px] pb-[40px] font-semibold text-[14px] leading-[17.36px] text-[#FFFFFF] border-b-[1px] border-[#BDBDBD]">
          Udemy Inter. school
        </h3>
        <ul className="w-[192px] mx-auto">
          {navbarList.map((item) => (
            <NavbarItem item={item} key={item.id} />
          ))}
          <NavLink to={'/features'} className={"flex hover:bg-[#509CDB] rounded-[4px] duration-300 items-center py-[12px] pl-[16px] pr-[19px] mt-[100px]"}>
            <FeaturesIcon />
            <span className="ml-[16px] mr-[26px] font-semibold text-[14px] leading-[17.36px] text-[white]">
              Features
            </span>
            <button className="py-[1px] w-[41px] rounded-[8px] bg-[#B9D7F1] font-semibold text-[10px] leading-[12.4px] text-[#000000]">
              NEW
            </button>
          </NavLink>
        </ul>
      </label>
    </nav>
  );
}

export default Navbar;
