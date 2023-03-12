import React, { useState } from "react";

const Navigation = () => {
  const [burger, setBurger] = useState(false);
  console.log(burger);

  window.onscroll = function () {
    const head = document.querySelector("header");
    const fix = head.offsetTop;
    if (window.pageYOffset > fix) {
      head.classList.add("navbar-sc");
    } else {
      head.classList.remove("navbar-sc");
    }
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center relative">
          <div className="self-center">
            <a
              href="/#"
              className=" text-primary text-2xl font-bold lg:text-3xl"
            >
              Portfolio
            </a>
          </div>
          <div className="self-center py-7">
            <button
              className={`${
                burger ? "toggle" : ""
              } py-4 absolute top-0 right-4 lg:hidden`}
              onClick={() => setBurger(!burger)}
            >
              <div className="flex flex-col items-center ">
                <span
                  className={`block ${
                    burger ? "w-[32px]" : "w-[23px]"
                  }  h-[3px] rounded-full bg-slate-700 transition-all duration-300 ease-in-out mb-2`}
                ></span>
                <span className="block w-[33px] h-[3px] rounded-full bg-slate-700 transition-all duration-300 ease-in-out mb-2"></span>
                <span
                  className={`block ${
                    burger ? "w-[32px]" : "w-[23px]"
                  } h-[3px] rounded-full bg-slate-700 transition-all duration-300 ease-in-out `}
                ></span>
              </div>
            </button>
            <nav
              className={`${
                burger ? "" : "hidden"
              } max-w-[15rem] w-full rounded-lg shadow-md absolute bg-white lg:bg-transparent top-16 z-20 right-6 lg:static lg:block lg:shadow-none lg:rounded-none`}
              id="nav"
            >
              <ul className="block p-4 rounded-lg shadow-lg lg:flex lg:rounded-none lg:shadow-none lg:py-0">
                <li className="flex group lg:ml-3 lg:text-lg">
                  <a
                    href="#"
                    className="text-base group-hover:text-primary lg:text-lg"
                  >
                    Home
                  </a>
                </li>
                <li className="flex group lg:ml-3 lg:text-lg">
                  <a
                    href="#skill"
                    className="text-base group-hover:text-primary lg:text-lg"
                  >
                    Skill
                  </a>
                </li>
                <li className="flex group lg:ml-3 lg:text-lg">
                  <a
                    href="#pro"
                    className="text-base group-hover:text-primary lg:text-lg"
                  >
                    Project
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
