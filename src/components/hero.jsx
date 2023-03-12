import React from "react";
import face from "../assets/img/face.png";

const Hero = () => {
  return (
    <main className="mt-24">
      <div className="container">
        <div className="flex text-center justify-center flex-wrap lg:text-left">
          <div className="self-center px-4 lg:w-1/2">
            <h3 className="text-base capitalize lg:text-lg text-primary">
              Hello, my name
            </h3>
            <h1 className="text-3xl font-bold text-slate-800 md:text-5xl">
              Muhamad Raisyaf
            </h1>
            <p className="text-base text-slate-900 mb-2">Front-End Developer</p>
            <p className="text-slate-500">
              Teens interested in IT, especially Frontend, with
              JavaScript/CSS/React JS/Bootstrap skills. Able to build
              interactive and dynamic websites, and be able to do consume REST
              API.
            </p>
          </div>
          <div className="self-center  w-full px-4 mt-6 py-3 lg:w-1/3">
            <div className="max-w-sm h-[320px] border-8 shadow-xl border-zinc-200 relative mx-auto w-full overflow-hidden bg-gradient-to-tr from-primary to-pink-500 radius md:max-w-[390px] md:h-[349] lg:max-w-[490px] lg:h-[426px] ">
              <img
                src={face}
                alt="people"
                className="absolute scale-95 -top-20 shadow-md right-5 lg:-top-14 lg:right-11 lg:scale-110 w-[19rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
