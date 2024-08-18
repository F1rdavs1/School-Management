import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Context } from "../../context/Context";

function SignIn() {
  const { setToken } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmitLogIn = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };

    const isRegistered = JSON.parse(
      window.localStorage.getItem("isRegistered")
    );

    if (isRegistered) {
      if (
        data.login.trim().toLowerCase() ===
          isRegistered.newLogin.toLowerCase() &&
        data.password.trim().toLowerCase() ===
          isRegistered.newPassword.toLowerCase()
      ) {
        window.localStorage.setItem("loginedUser", JSON.stringify(data));
        setToken(data);
        setTimeout(() => {
          navigate("/");
        }, 800);
      } else {
        alert("Login yoki parol noto'g'ri");
      }
    } else {
      if (
        data.login.trim().toLowerCase() === "firdavs" &&
        data.password === "123"
      ) {
        window.localStorage.setItem("loginedUser", JSON.stringify(data));
        setToken(data);
        setTimeout(() => {
          navigate("/");
        }, 800);
      } else {
        alert("Login yoki parol noto'g'ri");
      }
    }
  };

  return (
    <div className="bg-[#FCFAFA] w-[100%] h-[100vh] pt-[100px]">
      <h1 className="text-center Kumbh Sans font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F]">
        Welcome, Log into your account
      </h1>
      <form
        onSubmit={handleSubmitLogIn}
        autoComplete="off"
        className="w-[512px] text-center mt-[53px] mx-auto px-[132px] pt-[72px] pb-[39px] bg-[#FFFFFF]"
      >
        <h2 className="w-[238px] font-medium text-[16px] leading-[25px] text-[#667085] text-center">
          It is our great pleasure to have you on board!
        </h2>
        <Input
          isRequired={true}
          extraStyle={
            "mt-[14px] outline-none border-[1px] rounded-[4px] border-[#A7A7A7]"
          }
          name={"login"}
          placeholder={"Enter your Login"}
          type={"text"}
        />
        <Input
          isRequired={true}
          extraStyle={
            "my-[14px] outline-none border-[1px] rounded-[4px] border-[#A7A7A7]"
          }
          name={"password"}
          placeholder={"Enter Password"}
          type={"password"}
        />
        <Button extraStyle={"mb-[14px]"} type={"submit"} title={"Login"} />
        <Link
          className="font-bold text-[12px] leading-[24px] text-[#2D88D4]"
          to={"/sign-up"}
        >
          Sign up
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
