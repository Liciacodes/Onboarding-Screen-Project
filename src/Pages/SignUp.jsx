import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

export const SignUp = () => {
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((previousInput) => ({
      ...previousInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formInputs));
  };

  const setToLocalStorage = () => {
    localStorage.setItem("inputData", JSON.stringify(formInputs));
    alert("Account created succefully!");
    navigate("/");
  };
  //Validate function
  const validate = (formInputs) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formInputs.username) {
      errors.username = "Username is required!";
    }
    if (!formInputs.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(formInputs.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!formInputs.password) {
      errors.password = "Password is required!";
    } else if (formInputs.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (formInputs.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (Object.keys(errors).length === 0) {
      setToLocalStorage();
    }

    return errors;
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" w-full sm:w-96 sm:rounded-md bg-white sm:mt-2 p-5 ">
        <Link to="/">
          <i className="fa-solid fa-arrow-left text-[#263b5b]"></i>
        </Link>
        <div className="w-full h-72 sm:mt-4 ">
          <img
            src="https://blush.design/api/download?shareUri=uRtBLBBfXhpLVuHy&c=Bottom_0%7E2b44ff_Hair_0%7E181658_Skin_0%7E915b3c_Top_0%7Eff4133&w=800&h=800&fm=png"
            alt="signin-logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#263b5b]">Create an account</h1>

        <form className="mt-0">
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
          <p className="text-red-500 ml-4">{formErrors.email}</p>
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
          <p className="text-red-500 ml-4">{formErrors.username}</p>
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
          <p className="text-red-500 ml-4">{formErrors.password}</p>
        </form>

        <Button
          className="p-2 w-full mt-4 bg-[#1762ef] rounded-lg text-white font-bold"
          onClick={handleSubmit}
        >
          {/* <ToastContainer /> */}
          Continue
        </Button>

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
