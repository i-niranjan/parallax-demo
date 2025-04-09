import React from "react";
import Navbar from "../components/Navbar";
import { div } from "motion/react-client";
import { motion, useScroll, useTransform } from "motion/react";

const SECTION_HEIGHT = 1500;
export default function Home() {
  return (
    <>
      <section className="bg-zinc-950">
        <Navbar />

        <Hero />

        <div className="h-screen" />
      </section>
    </>
  );
}

const Hero = () => {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <CenterImage />
    </div>
  );
};
const CenterImage = () => {
  const { scrollY } = useScroll(); //We used motions built in hook to calculate y axis scroll pixels
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  return (
    <motion.div
      className="sticky top-0 h-screen w-full "
      style={{
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  );
};
