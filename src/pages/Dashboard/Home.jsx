import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  AddIcon,
  BillingIcon2,
  NotifiCationIcon,
  StudentsIcon2,
  SupportIcon,
  TopIcon,
} from "../../assets/icon";
import Button from "../../components/Button";
import CustomModal from "../../components/CustomModal";

function Home() {
  const [openModal, setOpenModal] = useState(false);

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
        <div className="flex justify-between pt-[34px] pb-[21px] px-[124px] bg-[#FCFAFA]">
          <div>
            <h2 className="font-medium text-[16px] leading-[19.84px] text-[#424242]">
              Learn how to launch faster
            </h2>
            <h2 className="font-medium text-[16px] leading-[19.84px] text-[#424242]">
              watch our webinar for tips from our experts and get a limited time
              offer.
            </h2>
          </div>
          <div className="flex items-center gap-[48px]">
            <button>
              <NotifiCationIcon />
            </button>
            <button
              onClick={() => setOpenModal(true)}
              className="w-[120px]  text-black rounded-md font-semibold text-[14px] leading-[17.36px] hover:bg-[red] hover:text-[white] py-[13px] duration-300 hover:border-y-transparent focus:bg-purple-950 focus:text-[white]"
            >
              Log Out
            </button>
          </div>
        </div>
        <h1 className="ml-[124px] mt-[53px] mb-[23px] font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F]">
          Welcome to your dashboard, Udemy school
        </h1>
        <h2 className="font-semibold ml-[228px] mb-[6px] text-[24px] leading-[29.77px] text-[#4F4F4F]">
          Uyo/school/@teachable.com
        </h2>

        <div className="ml-[124px] flex items-end gap-[13px]">
          <div className="pt-[68px] pl-[90px] pr-[119px]">
            <div className="flex items-start gap-[20px] mb-[51px]">
              <AddIcon />
              <div className="w-[464px]">
                <h3 className="font-medium mb-[16px] text-[24px] leading-[29.77px] text-[#4F4F4F]">
                  Add other admins
                </h3>
                <p className=" font-normal text-[14px] leading-[18.63px] text-[#4F4F4F]">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
                <p className=" font-normal text-[14px] leading-[18.63px] text-[#4F4F4F]">
                  {" "}
                  When you give them a pricing plan, they’ll appear on your
                  site!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[20px] mb-[37px]">
              <BillingIcon2 />
              <div className="w-[464px]">
                <h3 className="font-medium mb-[16px] text-[24px] leading-[29.77px] text-[#4F4F4F]">
                  Add classes
                </h3>
                <p className="font-normal text-[14px] leading-[18.63px] text-[#4F4F4F]">
                  Create rich course content and coaching products for your
                  students.
                </p>
                <p className="font-normal text-[14px] leading-[18.63px] text-[#4F4F4F]">
                  {" "}
                  When you give them a pricing plan, they’ll appear on your
                  site!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[20px] ">
              <StudentsIcon2 />
              <div className="w-[464px] mb-[68px]">
                <h3 className="font-medium mb-[16px] text-[24px] leading-[29.77px] text-[#4F4F4F]">
                  Add students
                </h3>
                <p className="font-normal text-[14px] leading-[18.63px] text-[#4F4F4F]">
                  Create rich course content and coaching products for your
                  students.
                </p>
                <p className=" font-normal text-[14px] leading-[18.63px] text-[#4F4F4F]">
                  {" "}
                  When you give them a pricing plan, they’ll appear on your
                  site!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-[40px] gap-[39px] py-[22px] px-[24px] w-[181px] bg-[#152259] rounded-[30px]">
            <a
              className="flex items-center gap-[8px] font-semibold text-[14px] leading-[17.36px]  text-[#FCFAFA]"
              href="#"
            >
              <SupportIcon />
              Support
            </a>
            <button>
              <TopIcon />
            </button>
          </div>
        </div>
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

export default Home;
