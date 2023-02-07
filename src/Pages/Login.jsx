import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 rounded-md bg-white mt-8  p-4">
        <div className="w-full h-[70%]">
          <img
            src="https://blush.design/api/download?shareUri=5a5c5KczFKqWhTmh&c=Bottom_0%7E393f82-0.1%7E393f82-0.2%7E393f82_Hair_0%7Eb58143-0.1%7Eb58143-0.2%7Ee8e1e1_Skin_0%7E57331f-0.1%7Ed4a181-0.2%7Ed4a181_Top_0%7Effa434-0.1%7Eff4133-0.2%7Ea8e5ba&w=800&h=800&fm=png"
            alt="login-logo"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#263b5b]">Login</h1>

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
            <i className="fa-solid fa-lock mr-4 text-[#263b5b]"></i>
            <InputField
              type="password"
              placeholder="Password"
              className="w-[98%] py-4 border-b outline-none placeholder:text-[#263b5b]"
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
          <p className="ml-8 font-bold text-[#263b5b]"> Log In with Google</p>
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
