import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Context } from "../../context/Context";

function SignUp() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Sign Up");
  const navigate = useNavigate();

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    const data = {
      newLogin: login,
      newPassword: password,
    };

    window.localStorage.setItem("isRegistered", JSON.stringify(data));

    setButtonText("SIGN UP");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="bg-[#FCFAFA] w-[100%] h-[100vh] pt-[100px]">
      <h1 className="text-center Kumbh Sans font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F]">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmitSignUp}
        autoComplete="off"
        className="w-[512px] text-center mt-[53px] mx-auto px-[132px] pt-[72px] pb-[39px] bg-[#FFFFFF]"
      >
        <h2 className="w-[238px] font-medium text-[16px] leading-[25px] text-[#667085] text-center">
          Create your account
        </h2>
        <Input
          isRequired={true}
          extraStyle={
            "mt-[14px] outline-none border-[1px] rounded-[4px] border-[#A7A7A7]"
          }
          name={"email"}
          placeholder={"Enter your Email"}
          type={"email"}
        />
        <Input
          isRequired={true}
          extraStyle={
            "my-[14px] outline-none border-[1px] rounded-[4px] border-[#A7A7A7]"
          }
          name={"newLogin"}
          placeholder={"Create your Login"}
          type={"text"}
        />
        <Input
          isRequired={true}
          extraStyle={
            "my-[14px] outline-none border-[1px] rounded-[4px] border-[#A7A7A7]"
          }
          name={"newPassword"}
          placeholder={"Create your Password"}
          type={"password"}
        />
        <Button extraStyle={"mb-[14px]"} type={"submit"} title={"Sign Up"} />
      </form>
    </div>
  );
}

export default SignUp;
