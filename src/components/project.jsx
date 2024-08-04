import React from "react";
import { portfolio } from "../utils/constan";

const Project = () => {
  return (
    <section className="pt-14" id="pro">
      <div className="container">
        <div className="w-full px-4 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <span className="font-semibold text-lg text-purple-500 mb-2">
              Portfolio
            </span>
            <h4 className="font-bold text-2xl text-slate-700 mb-2 uppercase dark:text-white">
              Project
            </h4>
            <p className="font-medium text-medium text-slate-500 dark:text-slate-50">
              Highlights that this section is a comprehensive display of all projects.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center mx-auto xl:w-10/12 dark:text-white gap-2">
          {portfolio.map((e, i) => {
            return (
              <a
                key={i}
                href={e.git}
                target="_blank"
                className="block py-2 px-6 border hover:bg-gray-100 dark:border-purple-500/20 rounded-lg hover:dark:bg-purple-900/10 max-w-sm w-full"
              >
                <h3 className="text-xl">{e.namePro}</h3>
                <p className="dark:text-slate-400 text-base font-extralight my-1">{e.description}</p>
                <div className="flex flex-wrap gap-2 my-2">
                  {e.tools.map((e, idx) => (
                    <div className="bg-purple-800/10 p-1.5 rounded-sm text-white" key={idx}>
                      <span className="text-purple-500 font-semibold">{e}</span>
                    </div>
                  ))}
                </div>
                <div className="mx-auto max-w-sm w-full mt-4">
                  <img src={e.img} alt={e.namePro} className="w-full h-auto rounded-lg" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Project);
