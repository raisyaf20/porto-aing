import React, { useEffect } from "react";

const Navigation = () => {
  const hndleClick = (e) => {
    const nav = document.getElementById("nav");
    const btn = e.target;
    btn.classList.toggle("togle");
    nav.classList.toggle("hidden");
    alert("pencet");
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center relative">
          <div className="self-center">
            <a href="#" className="px-4 text-primary text-xl font-bold lg:text-3xl">
              Navigasi Vite
            </a>
          </div>
          <div className="self-center py-6">
            <button className="py-4 absolute top-0 right-4 lg:hidden" onClick={hndleClick}>
              <span className="block w-[30px] h-[2px] bg-slate-700 transition-all duration-300 ease-in-out mb-2"></span>
              <span className="block w-[30px] h-[2px] bg-slate-700 transition-all duration-300 ease-in-out mb-2"></span>
              <span className="block w-[30px] h-[2px] bg-slate-700 transition-all duration-300 ease-in-out "></span>
            </button>
            <nav
              className="hidden max-w-[13rem] w-full absolute bg-white lg:bg-transparent top-full z-20 right-6 lg:static lg:block"
              id="nav"
            >
              <ul className="block p-4 rounded-lg shadow-lg lg:flex lg:rounded-none lg:shadow-none lg:py-0">
                <li className="flex group lg:ml-3 lg:text-lg">
                  <a href="#" className="text-base group-hover:text-primary lg:text-md">
                    Home
                  </a>
                </li>
                <li className="flex group lg:ml-3 lg:text-lg">
                  <a href="#skill" className="text-base group-hover:text-primary lg:text-md">
                    Skill
                  </a>
                </li>
                <li className="flex group lg:ml-3 lg:text-lg">
                  <a href="#pro" className="text-base group-hover:text-primary lg:text-md">
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
