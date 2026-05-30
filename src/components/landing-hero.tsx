import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Rudra Shukla
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Software Engineer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I'm a <span className="font-semibold text-accent">Software Engineer</span> passionate about building <span className="font-semibold text-accent">scalable, robust, and impactful</span> solutions. I love software engineering and crafting elegant code that makes a real difference. I focus on clean architecture, performance optimization, and exceptional user experiences using modern technologies.
              </div>
            </FadeUp>
            <FadeUp key="coding-profiles" duration={0.6} delay={0.4}>
              <div className="mr-0 mt-8 flex flex-col items-start gap-4">
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-300">
                  Competitive Programming
                </span>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://leetcode.com/u/rudrashukla0711/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline underline-offset-4"
                  >
                    LeetCode
                  </Link>
                  <span className="text-zinc-400">•</span>
                  <Link
                    href="https://codeforces.com/profile/rudrashukla0711"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline underline-offset-4"
                  >
                    CodeForces
                  </Link>
                  <span className="text-zinc-400">•</span>
                  <Link
                    href="https://www.codechef.com/users/shuklarudra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline underline-offset-4"
                  >
                    CodeChef
                  </Link>
                </div>
              </div>
            </FadeUp>


          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
