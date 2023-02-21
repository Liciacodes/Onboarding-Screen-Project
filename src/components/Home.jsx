import React from "react";
import Button from "./Button";

export const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-full sm:w-96  sm:rounded-md bg-white sm:mt-2 p-4">
        <div className="flex justify-between mb-8 items-center">
          <i class="fa-solid fa-bars text-[#263b5b] text-2xl"></i>
          <img src="profile.jpg" alt="" className="rounded-full w-10 h-10" />
        </div>

        <p className="text-center text-2xl text-[#263b5b] font-bold">
          New Collection <br /> with{" "}
          <span className="text-[#1762ef] font-bold">15% </span>
          discount
        </p>

        <div className="mt-8 relative">
          <img
            src="https://media.istockphoto.com/id/1063212632/photo/beautiful-mixes-race-woman-holding-shopping-bags-and-smiling.jpg?s=612x612&w=0&k=20&c=BglEfZGByZgOD2Err7wENGRRzwjQ0bKi1q87u3krN3g="
            alt=""
            srcset=""
            className="rounded-lg"
          />
          <Button className="absolute right-20 left-20  bottom-[-24px] px-8 py-4 mt-4 bg-[#1762ef] rounded-full text-white font-bol">
            Shop Now
          </Button>
        </div>
        <h1 className="mt-12 font-bold text-2xl mb-4 text-[#263b5b]">
          Top sales
        </h1>
        <div className="flex gap-4 mb-4 sm:mb-2">
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/948337254/photo/handsome-woman-in-white-blank-t-shirt-studio-model.jpg?s=612x612&w=0&k=20&c=uyt0ou1kQfQy69gZXtMTilEcOM1PNSypoMn7xhbMKFk="
              alt=""
              srcset=""
              className="rounded-lg shadow-2xl"
            />
            <i className="fa-solid fa-heart absolute top-2 right-2"></i>
          </div>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1134003334/photo/young-woman-walking-on-street.jpg?s=612x612&w=0&k=20&c=5kRJCmzZl3CS1q7cBJrY6pBO1o_FRJnVV66C4GsztDU="
              alt=""
              srcset=""
              className="rounded-lg shadow-2xl"
            />
            <i className="fa-solid fa-heart absolute top-2 right-2"></i>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <i className="fa-solid fa-house text-xl text-[#263b5b] "></i>
          <i className="fa-solid fa-pencil text-xl text-[#263b5b]"></i>
          <i className="fa-solid fa-bag-shopping text-xl text-[#263b5b]"></i>
          <i className="fa-solid fa-magnifying-glass text-xl text-[#263b5b]"></i>
        </div>
      </div>
    </div>
  );
};
