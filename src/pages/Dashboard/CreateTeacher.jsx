import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { NotifiCationIcon } from "../../assets/icon";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Add() {
  const [formData, setFormData] = useState({
    FullName: "",
    subject: "",
    class: "",
    email: "",
    gender: "",
    age: "",
    imgUrl: "",
    about: "",
  });

  const [subjectOptions] = useState([
    {
      id: 1,
      title: "Chemistry",
    },
    {
      id: 2,
      title: "French",
    },
    {
      id: 3,
      title: "Maths",
    },
    {
      id: 4,
      title: "English",
    },
    {
      id: 5,
      title: "Social studies",
    },
    {
      id: 6,
      title: "Home economics",
    },
    {
      id: 7,
      title: "Geography",
    },
    {
      id: 8,
      title: "Physics",
    },
    {
      id: 9,
      title: "Accounting",
    },
    {
      id: 10,
      title: "C.R.s",
    },
    {
      id: 11,
      title: "Politics",
    },
  ]);

  const [teachersList, setTeachersList] = useState(
    JSON.parse(window.localStorage.getItem("teachersList")) || []
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      imgUrl: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const teacherObj = {
      id: teachersList.length
        ? teachersList[teachersList.length - 1].id + 1
        : 1,
      ...formData,
    };
    const updatedTeachersList = [...teachersList, teacherObj];
    setTeachersList(updatedTeachersList);
    window.localStorage.setItem(
      "teachersList",
      JSON.stringify(updatedTeachersList)
    );
    setTimeout(() => {
      window.location.pathname = "./teachers";
    }, 800);
  };

  return (
    <div className="flex w-[100%]">
      <div className="w-[20%]">
        <Navbar />
      </div>
      <form
        onSubmit={handleSubmit}
        className="createTeachers-form w-[80%] h-[100vh] overflow-y-auto"
      >
        <header className="flex justify-end pt-[19px] pr-[69px] mb-[4px]">
          <div className="flex items-center gap-[3px]">
            <NotifiCationIcon />
            <Button
              type={"button"}
              extraStyle={"!w-[120px] bg-[white] text-[black]"}
              title={"Log Out"}
            />
          </div>
        </header>
        <div className="flex items-center justify-between py-[14px] pl-[38px] pr-[99px]">
          <h3 className="font-medium text-[20px] leading-[24.8px] text-[#4F4F4F]">
            Add teacher
          </h3>
          <Button type={"submit"} extraStyle={"!w-[118px]"} title={"Save"} />
        </div>

        <div className="flex gap-[61px] ml-[38px]">
          <div className="w-[407px] space-y-[20px]">
            <label className="flex flex-col">
              <span className="font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]">
                Full Name
              </span>
              <input
                className="outline-none border-[1px] rounded-[4px] py-[13px] pl-[10px] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A]"
                required
                autoComplete="off"
                type="text"
                placeholder="Full Name"
                name="FullName"
                value={formData.FullName}
                onChange={handleInputChange}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]">
                Email address
              </span>
              <input
                className="outline-none border-[1px] rounded-[4px] py-[13px] pl-[10px] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A]"
                required
                autoComplete="off"
                type="email"
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]">
                Subject
              </span>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="subject-select outline-none border-[1px] rounded-[4px] py-[13px] pl-[10px] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A]"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjectOptions.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col">
              <span className="font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]">
                About
              </span>
              <textarea
                name="about"
                rows={10}
                value={formData.about}
                onChange={handleInputChange}
                className="outline-none border-[1px] rounded-[4px] py-[13px] pl-[10px] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A]"
                placeholder="About"
              ></textarea>
            </label>
          </div>
          <div className="w-[407px] space-y-[20px]">
            <label className="flex flex-col">
              <span className="font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]">
                Class
              </span>
              <select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className="outline-none border-[1px] rounded-[4px] py-[13px] pl-[10px] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A]"
              >
                <option value="" disabled>
                  Select a class
                </option>
                <option value="JSS 1">JSS 1</option>
                <option value="JSS 2">JSS 2</option>
                <option value="JSS 3">JSS 3</option>
                <option value="JSS 4">JSS 4</option>
                <option value="JSS 5">JSS 5</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span className="font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]">
                Gender
              </span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="outline-none border-[1px] rounded-[4px] py-[13px] pl-[10px] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A]"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span className="font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]">
                Age
              </span>
              <Input
                extraStyle="focus:shadow-none outline-none border-[1px] rounded-[4px] py-[13px] pl-[10px] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A]"
                placeholder="Age"
                isRequired={true}
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] mb-[5px]">
                Upload Image
              </span>
              <Input
                name="imgUrl"
                type="file"
                extraStyle="hidden change-avatar"
                onChange={handleImageChange}
              />
              {formData.imgUrl && (
                <img
                  className="upload-img"
                  src={formData.imgUrl}
                  alt="Uploaded Image"
                  width={200}
                  height={200}
                />
              )}
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Add;
