import React from "react";
import face from "../assets/img/face.png";

const Hero = () => {
  return (
    <main className="mt-24">
      <div className="container">
        <div className="flex text-center justify-center flex-wrap lg:text-left">
          <div className="self-center  px-4 lg:w-1/2">
            <h3 className="text-base capitalize text-primary">Hello, my name</h3>
            <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">Muhamad Raisyaf</h1>
            <p className="text-base text-slate-800 mb-2">Front-End Developer</p>
            <p className="text-slate-600">
              Teens interested in IT, especially Frontend, with JavaScript/CSS/React JS/Bootstrap skills. Able to build
              interactive and dynamic websites, and be able to do consume REST API.
            </p>
          </div>
          <div className="self-center  w-full px-4 mt-6 py-3  lg:w-1/3">
            <div className="max-w-[18rem] px-5 mx-auto w-full bg-gradient-to-tr from-primary to-pink-500 border-4 border-slate-900 rounded-t-full md:max-w-[19rem] ">
              <img src={face} alt="people" className=" w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
