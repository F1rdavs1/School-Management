import React from "react";

function CustomModal({ isModal, setIsModal, children }) {
  function handleCloceBtn(e) {
    console.log(e.target.id);
    if (e.target.id == "wrapper") {
      setIsModal(false);
    }
  }
  return (
    <div
      onClick={handleCloceBtn}
      id="wrapper"
      className={`fixed top-0 right-0 z-50 bottom-0 left-0 backdrop-blur-[4px] duration-300 ${
        isModal ? "scale-100" : "scale-0"
      }`}
    >
      <div className="fixed top-0 right-0 bottom-0 left-0 w-[500px] h-[150px] bg-gray-400 m-auto rounded-md">
        {children}
      </div>
    </div>
  );
}

export default CustomModal;
