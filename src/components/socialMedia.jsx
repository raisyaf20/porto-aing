import React from "react";
import { contactMe } from "./contens/data";
const SocialMedia = () => {
  return (
    <>
      <section className="mt-14">
        <div className="container mx-auto ">
          <div className="flex flex-wrap border px-5 border-slate-200 shadow-md justify-center md:p-8 lg:rounded-full rounded-md">
            {contactMe.map((e, i) => (
              <div className="flex w-full group p-2 mb-5 lg:mb-0 gap-3 lg:justify-center items-center lg:w-1/3 relative">
                <div key={i} className="w-9 md:w-10 lg:w-11">
                  <img
                    src={e.img}
                    alt="alte"
                    className="w-full transition-all duration-200 group-hover:-rotate-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-700">
                    {e.title}
                  </h3>
                  <p className="text-slate-700 text-base md:text-md">
                    {e.desc}
                  </p>
                </div>
                <span
                  className={`hidden absolute lg:block w-[2px] h-24 bg-gray-600 -right-3 ${
                    i === 2 ? "scale-0" : "hidden"
                  }`}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
