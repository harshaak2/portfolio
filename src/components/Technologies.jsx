import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import cIcon from "../assets/techs/c3.svg";
import cppIcon from "../assets/techs/cpp.svg";
import pythonIcon from "../assets/techs/python.svg";
import javaIcon from "../assets/techs/java.svg";
import htmlIcon from "../assets/techs/html2.svg";
import cssIcon from "../assets/techs/css2.svg";
import javascriptIcon from "../assets/techs/javascript.svg";
import typescriptIcon from "../assets/techs/typescript.svg";
import mysqlIcon from "../assets/techs/mysql.svg";
import postgresqlIcon from "../assets/techs/postgresql.svg";
import dockerIcon from "../assets/techs/docker.svg";
import redisIcon from "../assets/techs/redis.svg";

import profilePicture from "../assets/DSC9265.JPG";

export default function Technologies() {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={cIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={cppIcon} className="text-xl w-16 h-16" alt="C" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={pythonIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={javaIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.95)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={htmlIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={cssIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={javascriptIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={typescriptIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={mysqlIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        {/* <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={postgresqlIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div> */}
        <motion.div
          variants={iconVariants(1.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={redisIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div>
        {/* <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={dockerIcon} className="text-5xl w-16 h-16" alt="C" />
        </motion.div> */}
      </motion.div>
    </div>
  );
}
