import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { NotifiCationIcon } from "../../assets/icon";
import Button from "../../components/Button";
import { Link, Outlet } from "react-router-dom";
import Koala from "../../assets/images/koala.png";
import CustomModal from "../../components/CustomModal";
import "../../App.css";

function Teachers() {
  const [teachersList, setTeachersList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const storedTeachersList =
      JSON.parse(window.localStorage.getItem("teachersList")) || [];
    setTeachersList(storedTeachersList);
    setSearchResults(storedTeachersList);
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const searching = e.target.searching.value.toLowerCase();
    const filterResult = teachersList.filter(
      (teacher) =>
        teacher.FullName.toLowerCase().includes(searching) ||
        teacher.email.toLowerCase().includes(searching)
    );
    setSearchResults(filterResult);
    e.target.reset();
  };
  const SignOut = () => {
    localStorage.clear();
    location.pathname = "/";
    location.reload();
  };

  return (
    <div className="flex w-[100%]">
      <div className="w-[20%]">
        <Navbar />
      </div>
      <div className="w-[80%] h-[100vh] overflow-y-auto">
        <header className="flex justify-end pr-[69px] pt-[19px]  mb-[4px]">
          <div className="flex items-center gap-[10px]">
            <button>
              <NotifiCationIcon />
            </button>
            <button
              onClick={() => setOpenModal(true)}
              className="w-[120px] mr-[30px] text-black rounded-md font-semibold text-[14px] leading-[17.36px] hover:bg-[red] hover:text-[white] py-[13px] duration-300 hover:border-y-transparent focus:bg-purple-950 focus:text-[white]"
            >
              Log Out
            </button>
          </div>
        </header>
        <nav className="flex items-center justify-between py-[14px] pl-[38px] pr-[99px]">
          <h3 className="font-medium text-[20px] leading-[24.8px] text-[#4F4F4F]">
            Teachers
          </h3>
          <Link to={"/teachers/create-teacher"}>
            <Button extraStyle={"!w-[118px]"} title={"Add Teachers"} />
          </Link>
        </nav>
        <form onSubmit={handleSubmitForm} className="pr-[99px] pl-[38px]">
          <input
            className="serch-input w-full pl-[16px] rounded-[8px] bg-[#E0E0E0] outline-none py-[16px] focus:shadow-md focus:duration-300"
            autoComplete="off"
            required
            name="searching"
            placeholder="Search for a teacher by name or email"
            type="text"
          />
        </form>
        <div className="render-teachers  mt-[30px]  ml-[38px] mr-[99px] rounded-md pt-[14px] pb-[85px]">
          {searchResults.length > 0 ? (
            <table className="w-[100%]">
              <thead>
                <tr>
                  <th className="text-left p-4 font-bold text-[12px] leading-[14.88px] text-[#4F4F4F]">
                    Name
                  </th>
                  <th className="text-left p-4 font-bold text-[12px] leading-[14.88px] text-[#4F4F4F]">
                    Subject
                  </th>
                  <th className="text-left p-4 font-bold text-[12px] leading-[14.88px] text-[#4F4F4F]">
                    Class
                  </th>
                  <th className="text-left p-4 font-bold text-[12px] leading-[14.88px] text-[#4F4F4F]">
                    Email Address
                  </th>
                  <th className="text-left p-4 font-bold text-[12px] leading-[14.88px] text-[#4F4F4F]">
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((item, index) => (
                  <tr className="even:bg-[#F4FAFF]" key={index}>
                    <td className="p-4 font-medium text-[12px] leading-[14.88px] text-[#4F4F4F]">
                      {item.FullName}
                    </td>
                    <td className="p-4 font-medium text-[12px] leading-[14.88px] text-[#4F4F4F]">
                      {item.subject}
                    </td>
                    <td className="p-4 font-medium text-[12px] leading-[14.88px] text-[#4F4F4F]">
                      {item.class}
                    </td>
                    <td className="p-4 font-medium text-[12px] leading-[14.88px] text-[#4F4F4F]">
                      {item.email}
                    </td>
                    <td className="p-4 font-medium text-[12px] leading-[14.88px] text-[#4F4F4F]">
                      {item.gender}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>
              <img
                className="mx-auto"
                src={Koala}
                alt="Koala"
                width={340}
                height={225}
              />
              <h2 className="text-center font-semibold text-[28px] leading-[34.73px] text-[#4F4F4F] mt-[9px] mb-[4px]">
                No Teachers at this time
              </h2>
              <p className="text-center font-medium text-[14px] leading-[17.36px] text-[#4F4F4F]">
                Teachers will appear here after they enroll in your school.
              </p>
            </div>
          )}
        </div>
        <Outlet />
      </div>
      <CustomModal isModal={openModal} setIsModal={setOpenModal}>
        <h2 className="font-bold text-center text-[35px] text-[crimson]">
          Chimoqchimisiz?
        </h2>
        <div className="flex justify-center gap-10 mt-[20px]">
          <Button
            onClick={() => setOpenModal(false)}
            extraStyle={"!w-[180px] bg-[gray] hover:bg-[green] duration-300"}
            title={"Bekor qilish"}
          />
          <Button
            onClick={SignOut}
            extraStyle={"!w-[180px] bg-[gray] hover:bg-[red] duration-300"}
            title={"Tasdiqlash"}
          />
        </div>
      </CustomModal>
    </div>
  );
}

export default Teachers;
