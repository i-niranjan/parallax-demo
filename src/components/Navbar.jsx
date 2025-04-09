import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "motion/react";
import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <nav className="fixed backdrop-blur-sm  border-gray-500   top-0 left-0 w-full z-50 ">
      <div className=" flex flex-wrap w-full mx-auto max-w-screen-xl ">
        <div className="flex w-full p-2 sm:p-3 md:p-2 ">
          <div className="flex w-[70%] gap-10 items-center">
            <div className="text-white font-bold  p-2 rounded-lg ">
              <NavLink to="/" end>
                Beyond Earth
              </NavLink>
            </div>
            <ul className="flex gap-4 text-sm text-white">
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" end>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/scroll" end>
                  Scroll
                </NavLink>
              </li>
              <li>
                <NavLink end>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[30%] flex justify-end gap-4 flex-wrap">
            <button className="  rounded-lg text-white border px-4">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
