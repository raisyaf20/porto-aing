import React from "react";
import { portfolio } from "./contens/data";
import Skill from "./skil";

const Project = () => {
  return (
    <section className="bg-slate-100 mt-14 p-7 dark:bg-slate-700" id="pro">
      <div className="container">
        <div className="w-full px-4 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h4 className="font-bold text-2xl text-slate-700 mb-2 uppercase dark:text-white">
              Project
            </h4>
            <p className="font-medium text-medium text-slate-500 dark:text-slate-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              nam veritatis eos quas quaerat, hic doloribus veniam inventore
              eaque eum.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center mx-auto xl:w-10/12">
          {portfolio.map((e, i) => {
            return (
              <div className="mb-12 p-4 md:w-1/2" key={i}>
                <div className="rounded-md shadow-md mb-3 overflow-hidden">
                  <img src={e.img} alt="website food" className="w-full" />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-1 dark:text-slate-100">
                  {e.namePro}
                </h3>
                <p className="font-medium text-base text-slate-500 mb-3 dark:text-slate-200">
                  {e.description}
                </p>
                <a
                  href={e.git}
                  target="_blank"
                  className="py-2 px-6 bg-primary rounded-lg hover:bg-sky-600"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Skill />
    </section>
  );
};

export default Project;
