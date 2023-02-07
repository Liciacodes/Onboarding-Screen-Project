import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

export const SignUp = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 rounded-md bg-white mt-6 p-4">
        <i className="fa-solid fa-arrow-left text-[#263b5b]"></i>
        <div className="w-96 h-80">
          <img
            src="https://blush.design/api/download?shareUri=uRtBLBBfXhpLVuHy&c=Bottom_0%7E2b44ff_Hair_0%7E181658_Skin_0%7E915b3c_Top_0%7Eff4133&w=800&h=800&fm=png"
            alt="signin-logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#263b5b]">Sign Up</h1>

        <form className="mt-4">
          <div className="flex items-center">
            <i className="fa-thin fa-at  mr-4 text-[#263b5b]"></i>
            <InputField
              type="email"
              placeholder="Email"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
            />
          </div>
          <div className="flex items-center mb-4 ">
            <i className="fa-solid fa-user mr-4 text-[#263b5b]"></i>
            <InputField
              type="text"
              placeholder="Username"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
            />
          </div>
          <div className="flex items-center mb-4 ">
            <i className="fa-solid fa-lock mr-4 text-[#263b5b]"></i>
            <InputField
              type="text"
              placeholder="Password"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
            />
          </div>
        </form>
        <Button className="p-2 w-full mt-4 bg-[#1762ef] rounded-lg text-white font-bold">
          Continue
        </Button>

        <p className="text-center mt-6 text-[#263b5b] font-bold">
          Joined us before?{" "}
          <span className="text-[#1762ef] ml-2 font-bold cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};
