import React from "react";
import { skill } from "../utils/constan";

const Skill = () => {
  return (
    <section className="mx-auto pt-10 mb-3 p-5" id="skill">
      <div className="container">
        <h1 className="text-center text-2xl uppercase text-slate-700 font-bold md:text-3xl mb-5 dark:text-white">
          SKillS
        </h1>
        <div className="px-4 grid text-center grid-cols-2 gap-3 justify-center md:grid-cols-4">
          {skill.map((el, i) => {
            return (
              <div className=" flex items-center justify-center" key={i}>
                <div className="p-2 w-24 group cursor-pointer">
                  <img
                    src={el.tech}
                    alt={el.name}
                    className="w-full grayscale opacity-60 h-auto group-hover:grayscale-0 group-hover:opacity-100 duration-200"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skill);
