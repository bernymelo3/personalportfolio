"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-3 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[4px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Bernardo Melo Tech Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
              Tech Innovator
            </span>
            <span className="text-white"> In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-700">
              Software, Blockchain & Cybersecurity
            </span>
          </span>

        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a dedicated Computer Science enthusiast, deeply immersed in Cybersecurity,
          Blockchain, and Software Development. Discover my diverse projects and skills
          that reflect a journey of continuous learning and innovation in technology.

        </motion.p>
        <motion.a
          href="#profile-content"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>


        {/* Download CV Button 
        <motion.a
          variants={slideInFromLeft(1.2)} // Adjust the timing if you want a staggered animation
          href="/CV.pdf" // The path to your CV file in the public directory
          download // This attribute will prompt the file to be downloaded
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download CV
        </motion.a>
        */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div >
  );
};

export default HeroContent;
