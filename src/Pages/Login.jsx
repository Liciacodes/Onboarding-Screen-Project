import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-96 h-[500px] rounded-md bg-white  p-4">
        <h1 className="text-4xl bold">Login</h1>

        <form className="mt-4">
          <div className="flex items-center">
            <i className="fa-thin fa-at  mr-4"></i>
            <InputField
              type="email"
              placeholder="Email"
              className="w-[98%] py-4 border-b outline-none"
            />
          </div>
          <div className="flex items-center mb-4 ">
            <i className="fa-solid fa-lock mr-4"></i>
            <InputField
              type="password"
              placeholder="Password"
              className="w-[98%] py-4 border-b outline-none"
            />
          </div>
        </form>
        <p className="text-right text-[#1762ef] font-bold">Forgot password?</p>
        <Button className="p-2 w-full mt-4 bg-[#1762ef] rounded-lg text-white font-bold">
          Log In
        </Button>
        <p className="text-center mt-4 text-gray">OR</p>
        <Button
          className="flex p-2
          w-full
          mt-4
          bg-gray-200
          rounded-lg
          text-black"
        >
          <img
            className="ml-8"
            width={30}
            height={30}
            alt="Google sign-in"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          />
          <p className="ml-8 font-bold"> Log In with Google</p>
        </Button>
        <p className="text-center mt-6">
          Don't have an account?{" "}
          <span className="text-[#1762ef] ml-2 font-bold cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
