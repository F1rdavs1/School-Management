import React from "react";
import Navbar from "../../components/Navbar";

function SettingsProfile() {
  return (
    <div className="flex w-[100%]">
      <div className="w-[20%]">
        <Navbar />
      </div>
      <div className="w-[80%]">
        <h2 className="font-bold text-[22px] m-[20px]">
          Settings and profile page
        </h2>
      </div>
    </div>
  );
}

export default SettingsProfile;
