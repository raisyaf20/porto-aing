import React, { useState, useEffect } from "react";
import { menu } from "../utils/constan";
import { ThemeContext } from "../context/ThemeContext";

const Navigation = () => {
  const [burger, setBurger] = useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  window.onscroll = function () {
    const head = document.querySelector("header");
    const fix = head.offsetTop;
    if (window.pageYOffset > fix) {
      head.classList.add("navbar-sc");
    } else {
      head.classList.remove("navbar-sc");
    }
  };
  const togle = React.useCallback(() => {
    toggleTheme()
  }, [theme]);

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center relative">
          <div className="self-center">
            <a
              href="/"
              className=" text-purple-600 text-2xl font-bold lg:text-3xl"
            >
              Portfolio
            </a>
          </div>
          <div className="self-center py-3 flex justify-end gap-5 lg:gap-0 items-center max-w-sm w-full ">
            <div
              className=" cursor-pointer w-16 h-[34px] rounded-full bg-slate-700 dark:bg-slate-200 lg:static"
              onClick={togle}
            >
              <button
                role="button"
                aria-label="Toggle Dark Mode"
                className={`block ${theme === "dark" ? "translate-x-9" : "translate-x-1"
                  } duration-500 translate-x-1 h-6 w-6 mt-[5px] rounded-full bg-slate-200 dark:bg-slate-500 `}
              ></button>
            </div>
            <button
              aria-label="Toggle Menu"
              className={`${burger ? "toggle" : ""
                } py-4 lg:hidden`}
              onClick={() => setBurger(!burger)}
            >
              <div className="flex flex-col items-center ">
                <span
                  className={`block ${burger ? "w-[32px]" : "w-[23px]"
                    }  h-[3px] rounded-full bg-slate-700 dark:bg-slate-100 transition-all duration-300 ease-in-out mb-2`}
                ></span>
                <span className="block w-[33px] h-[3px] rounded-full bg-slate-700 dark:bg-slate-100 transition-all duration-300 ease-in-out mb-2"></span>
                <span
                  className={`block ${burger ? "w-[32px]" : "w-[23px]"
                    } h-[3px] rounded-full bg-slate-700 dark:bg-slate-100 transition-all duration-300 ease-in-out `}
                ></span>
              </div>
            </button>

            <nav
              className={`${burger ? "" : "hidden"
                } max-w-[15rem] w-full rounded-lg transition-all duration-1000 shadow-md absolute bg-white dark:bg-slate-800 dark:lg:bg-transparent lg:bg-transparent top-16 z-20 right-6 lg:static lg:block lg:shadow-none lg:rounded-none`}
              id="nav"
            >
              <div className="p-4 rounded-lg shadow-lg lg:flex lg:rounded-none lg:shadow-none lg:py-0">
                {menu.map((e, i) => (
                  <a className="flex mb-1 group lg:ml-3 hover:bg-slate-200 hover:dark:bg-slate-800 p-1 rounded-sm" key={i} href={`${e.href}`}>
                    <span className="flex-1 text-base group-hover:dark:text-blue-400 lg:text-lg dark:text-white">{e.title}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navigation);
