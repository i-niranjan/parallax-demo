import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "motion/react";
import { NavLink } from "react-router";
export default function Navbar() {
  const controls = useAnimation();
  //   const [lastScrollY, setLastScrollY] = useState(0);
  let lastY = window.scrollY;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastY) {
        controls.start({ y: 0 });
      } else if (currentScrollY > lastY) {
        controls.start({
          y: "-100%",
        });
      }
      lastY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.nav
      animate={controls}
      initial={{ y: 0, transition: { duration: 0.3, ease: "easeOut" } }}
      className="fixed bg-white shadow-md top-0 left-0 w-full z-50 "
    >
      <div className=" flex flex-wrap w-full mx-auto max-w-screen-xl ">
        <div className="flex w-full p-2 sm:p-3 md:p-4 border-b">
          <div className="flex w-[70%] gap-10 items-center">
            <div className="font-bold border-2 bg-blue-900 p-2 rounded-lg text-white">
              <NavLink to="/" end>
                RANDOM
              </NavLink>
            </div>
            <ul className="flex gap-4">
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
            <button className="bg-blue-400 sm:px-2 md:p-2 md:px-6  rounded-lg">
              Call Us
            </button>
            <button className="bg-blue-400 sm:px-2 md:p-2 md:px-6 rounded-lg ">
              Follow Me
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
