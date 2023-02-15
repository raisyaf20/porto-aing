import React from "react";
import face from "../assets/img/face.png";

const Hero = () => {
  return (
    <main className="mt-24">
      <div className="container">
        <div className="flex text-center justify-center flex-wrap lg:text-left">
          <div className="self-center  px-4 lg:w-1/2">
            <h3 className="text-md capitalize text-primary">Hello, my name</h3>
            <h1 className="text-3xl font-bold text-slate-800 md:text-5xl">Rei</h1>
            <p className="text-base text-slate-600 mb-2">Front-End Developer</p>
            <p className="text-slate-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae deleniti alias est inventore autem ipsum
              dolore et odio.
            </p>
          </div>
          <div className="self-center  w-full px-4 mt-6 py-3  lg:w-1/3">
            <div className="max-w-[9rem] mx-auto w-full bg-gradient-to-tr from-primary to-pink-500 border-4 border-slate-900 rounded-t-full md:max-w-[19rem] lg:max-w-sm">
              <img src={face} alt="people" className="pt-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
