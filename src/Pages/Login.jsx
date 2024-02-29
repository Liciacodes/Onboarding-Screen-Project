import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Login = () => {
  // inbuilt google log in
  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    if (userObject) {
      navigate("/dashboard");
    }
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "112572735124-feholttvs3q52lhd7q4c7lduijpp2b9k.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("googleSignIn"), {
      theme: "dark",
      size: "large",
      width: 350,
      height: 70,
    });
  });

  const [loginDetails, setLoginDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(loginDetails);
  };

  const savedInputs = JSON.parse(localStorage.getItem("inputData"));

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (
    //   savedInputs.email === loginDetails.email &&
    //   savedInputs.password === loginDetails.password
    // ) {
    //   navigate("/dashboard");
    // }
    if (
      savedInputs.email === loginDetails.email &&
      savedInputs.password === loginDetails.password
    ) {
      navigate("/dashboard");
    } else if (
      loginDetails.email !== savedInputs.email &&
      loginDetails.email !== savedInputs.email
    ) {
      setErrorMessage("Invalid User, Please Sign Up");
    } else {
      setErrorMessage("Incorrect Username or Password");
    }
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="w-full sm:rounded-md bg-white sm:mt-2  p-5 sm:w-96 ">
        <div className="w-full  h-[10%] sm:h-[50%]">
          <img
            src="https://blush.design/api/download?shareUri=5a5c5KczFKqWhTmh&c=Bottom_0%7E393f82-0.1%7E393f82-0.2%7E393f82_Hair_0%7Eb58143-0.1%7Eb58143-0.2%7Ee8e1e1_Skin_0%7E57331f-0.1%7Ed4a181-0.2%7Ed4a181_Top_0%7Effa434-0.1%7Eff4133-0.2%7Ea8e5ba&w=800&h=800&fm=png"
            alt="login-logo"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#263b5b]">Login</h1>
        <form className="mt-2">
          <div className="flex items-center">
            <i className="fa-thin fa-at  mr-4 text-[#263b5b]"></i>
            <InputField
              type="email"
              placeholder="Email"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
              onChange={handleChange}
              name="email"
              value={loginDetails.email}
            />
          </div>
          <div className="flex items-center mb-4 ">
            <i className="fa-solid fa-lock mr-4 text-[#263b5b]"></i>
            <InputField
              type="password"
              placeholder="Password"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
              onChange={handleChange}
              name="password"
              value={loginDetails.password}
            />
          </div>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-center font-bold">{errorMessage}</p>
        )}

        <Button
          className="p-2 w-full mt-4 bg-[#1762ef] rounded-lg text-white font-bold"
          onClick={handleSubmit}
        >
          Log In
        </Button>
        <p className="text-center mt-4 text-gray font-semibold">OR</p>
        <div id="googleSignIn" className="mt-2 py-4 "></div>
        <Link to="/signup">
          <p className="text-center mb-4">
            Don't have an account?{" "}
            <span className="text-[#1762ef] ml-2 font-bold cursor-pointer">
              Sign Up
              <Link to="/signup"></Link>
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
