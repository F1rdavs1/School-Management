import React from "react";
import Navbar from "../../components/Navbar";

function Billing() {
  return (
    <div className="flex w-[100%]">
      <div className="w-[20%]">
        <Navbar />
      </div>
      <div className="w-[80%]">
        <h2 className="font-bold text-[22px] m-[20px]">Billing page</h2>
      </div>
    </div>
  );
}

export default Billing;
