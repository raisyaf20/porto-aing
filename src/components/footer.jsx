import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 pt-24">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full  px-4 mb-12 text-slate-300 font-medium lg:w-1/3">
            <h2 className="font-bold mb-5 text-white text-4xl">Rei</h2>
            <h3 className="font-bold text-2xl mb-2">Contact Me</h3>
            <p>raisyafmuhamad@gmail.com</p>
            <p>Ciputat, Tanggerang Selatan</p>
            <p>Banten</p>
          </div>
          <div className="w-full px-4 mb-12 lg:w-1/3 text-slate-300">
            <h3 className="font-semibold text-white mb-5">Category</h3>
            <ul>
              <li>Coming Soon</li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 lg:w-1/3 text-slate-300">
            <h3 className="font-semibold text-white mb-5">Pages</h3>
            <ul>
              <li>
                <a href="#home" className="text-base hover:text-primary">
                  {" "}
                  Home
                </a>
              </li>
              <li>
                <a href="#home" className="text-base hover:text-primary">
                  {" "}
                  Project
                </a>
              </li>
              <li>
                <a href="#home" className="text-base hover:text-primary">
                  {" "}
                  Skill
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full border-t border-slate-700 py-5">
          <p className="text-center text-slate-400 font-medium text-sm ">Copyright@rei</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
