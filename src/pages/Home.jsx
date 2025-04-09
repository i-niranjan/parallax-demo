import React, { useRef } from "react";

import Navbar from "../components/Navbar";
import { div } from "motion/react-client";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import ReactLenis from "lenis/react";

const SECTION_HEIGHT = 1500;
export default function Home() {
  return (
    <>
      <section className="bg-zinc-950">
        <ReactLenis root options={{ lerp: 0.05 }}>
          <Navbar />

          <Hero />
          <div className="h-screen" />
        </ReactLenis>
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
      <ParallaxImages />
      <div className=" absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};
const CenterImage = () => {
  const { scrollY } = useScroll(); //We used motions built in hook to calculate y axis scroll pixels

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(  ${clip1}% ${clip1}%,   ${clip2}% ${clip1}%,  ${clip2}% ${clip2}%, ${clip1}% ${clip2}%  )`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full "
      style={{
        opacity,
        backgroundSize,
        // clipPath: " polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)",

        clipPath,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className=" mx-auto max-w-5xl px-4 pt-[200px] ">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={"w-1/3"}
        start={-200}
        end={200}
      />
      <ParallaxImg
        src="https://plus.unsplash.com/premium_photo-1722018576685-45a415a4ff67?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={" mx-auto w-2/3"}
        start={200}
        end={-250}
      />
      <ParallaxImg
        src="https://plus.unsplash.com/premium_photo-1722018576685-45a415a4ff67?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={"ml-auto  w-1/3"}
        start={-200}
        end={200}
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  // const x = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest)
  // );
  return (
    <motion.img
      style={{ opacity, transform }}
      ref={ref}
      src={src}
      alt={alt}
      className={className}
    />
  );
};
