import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [burger, setBurger] = useState(false);
  const [theme, setTheme] = useState("light");
  console.log(theme);
  window.onscroll = function () {
    const head = document.querySelector("header");
    const fix = head.offsetTop;
    if (window.pageYOffset > fix) {
      head.classList.add("navbar-sc");
    } else {
      head.classList.remove("navbar-sc");
    }
  };
  const togle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
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
          <div className="self-center py-7 flex justify-center max-w-sm w-full ">
            <div
              className="absolute right-20 top-3 cursor-pointer w-14 py-1.5 rounded-full bg-slate-700 dark:bg-slate-200 lg:static"
              onClick={togle}
            >
              <button
                className={`block ${
                  theme === "dark" ? "translate-x-8" : "translate-x-1"
                } duration-500 translate-x-1 h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-500 `}
              ></button>
            </div>
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
                  }  h-[3px] rounded-full bg-slate-700 dark:bg-slate-100 transition-all duration-300 ease-in-out mb-2`}
                ></span>
                <span className="block w-[33px] h-[3px] rounded-full bg-slate-700 dark:bg-slate-100 transition-all duration-300 ease-in-out mb-2"></span>
                <span
                  className={`block ${
                    burger ? "w-[32px]" : "w-[23px]"
                  } h-[3px] rounded-full bg-slate-700 dark:bg-slate-100 transition-all duration-300 ease-in-out `}
                ></span>
              </div>
            </button>

            <nav
              className={`${
                burger ? "" : "hidden"
              } max-w-[15rem] w-full rounded-lg shadow-md absolute bg-white dark:bg-slate-700 dark:lg:bg-transparent lg:bg-transparent top-16 z-20 right-6 lg:static lg:block lg:shadow-none lg:rounded-none`}
              id="nav"
            >
              <ul className="block p-4 rounded-lg shadow-lg lg:flex lg:rounded-none lg:shadow-none lg:py-0">
                <li className="flex group lg:ml-3">
                  <a
                    href="#"
                    className="text-base group-hover:text-primary lg:text-lg dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="flex group lg:ml-3">
                  <a
                    href="#skill"
                    className="text-base group-hover:text-primary lg:text-lg dark:text-white"
                  >
                    Skill
                  </a>
                </li>
                <li className="flex group lg:ml-3">
                  <a
                    href="#pro"
                    className="text-base group-hover:text-primary lg:text-lg dark:text-white"
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
