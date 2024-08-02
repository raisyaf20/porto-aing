import React from "react";
import face from "../assets/img/face.png";
import { media } from "../utils/constan";
import LinkedinSVG from "../assets/icons/LinkedinSVG";

const Hero = () => {
  return (
    <section className="pt-24 pb-10 border-b-2 dark:border-slate-800" id="home">
      <div className="container">
        <div className="flex text-center justify-center flex-wrap lg:text-left">
          <div className="self-center px-4 lg:w-1/2">
            <h3 className="text-base capitalize font-semibold lg:text-xl text-purple-500">
              Hello, my name
            </h3>
            <h1 className="text-3xl font-bold text-slate-800 md:text-5xl dark:text-slate-50">
              Muhamad Raisyaf
            </h1>
            <p className="text-base text-slate-900 mb-2 dark:text-slate-100">
              Front-End Developer
            </p>
            <p className="text-slate-500 dark:text-slate-300">
              Teens interested in IT, especially Frontend, with
              JavaScript/CSS/React JS/Bootstrap skills. Able to build
              interactive and dynamic websites, and be able to do consume REST
              API.
            </p>
            <div className="flex gap-2 mt-4 w-full justify-center lg:justify-start">
              {media.map((el, idx) => (
                <a href={el.href} key={el.keyName + idx} target="_blank" className="p-1 w-10 h-10 grid place-items-center bg-purple-500 dark:bg-purple-800/30 rounded-full text-white">
                  {el.icon()}
                </a>
              ))}
            </div>
          </div>
          <div className="self-center  w-full px-4 mt-6 py-3 lg:w-1/3">
            <div className="max-w-sm h-[350px] border-8 shadow-xl dark:shadow-slate-900 border-zinc-100  dark:border-gray-400 relative mx-auto w-full overflow-hidden bg-gradient-to-tr from-primary to-pink-500 radius md:max-w-[390px] md:h-[349] lg:max-w-[350px]">
              <img
                src={face}
                alt="people"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
