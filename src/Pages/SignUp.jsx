import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

export const SignUp = () => {
  const getFormData = () => {
    const storedValues = localStorage.getItem("inputData");

    if (!storedValues)
      return {
        email: "",
        username: "",
        password: "",
      };
    return JSON.parse(storedValues);
  };
  const [formInputs, setFormInputs] = useState(getFormData());

  const handleChange = (e) => {
    setFormInputs((previousInput) => ({
      ...previousInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("inputData", JSON.stringify(formInputs));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 rounded-md bg-white mt-6 p-4">
        <Link to="/">
          <i className="fa-solid fa-arrow-left text-[#263b5b]"></i>
        </Link>
        <div className="w-96 h-80">
          <img
            src="https://blush.design/api/download?shareUri=uRtBLBBfXhpLVuHy&c=Bottom_0%7E2b44ff_Hair_0%7E181658_Skin_0%7E915b3c_Top_0%7Eff4133&w=800&h=800&fm=png"
            alt="signin-logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#263b5b]">Create an account</h1>

        <form className="mt-4">
          <div className="flex items-center">
            <i className="fa-thin fa-at  mr-4 text-[#263b5b]"></i>
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
              value={formInputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-4 ">
            <i className="fa-solid fa-user mr-4 text-[#263b5b]"></i>
            <InputField
              type="text"
              name="username"
              placeholder="Username"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
              value={formInputs.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-4 ">
            <i className="fa-solid fa-lock mr-4 text-[#263b5b]"></i>
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
              value={formInputs.password}
              onChange={handleChange}
            />
          </div>
        </form>
        <Link to="/">
          <Button
            className="p-2 w-full mt-4 bg-[#1762ef] rounded-lg text-white font-bold"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Link>

        <p className="text-center mt-6 text-[#263b5b] font-bold">
          Joined us before?{" "}
          <Link to="/">
            <span className="text-[#1762ef] ml-2 font-bold cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
