import React from "react";
import { motion } from "framer-motion";

import { EXPERIENCES } from "../constants/index.js";

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Work Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 lg:justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-md text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl lg:w-3/4 w-full"
            >
              <h6 className="mb-2 font-semibold text-lg">
                {experience.role} -{" "}
                <span className="text-md text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
