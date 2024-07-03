import React from "react";
import { motion } from "framer-motion";

import { RESPONSIBILITIES } from "../constants/index.js";

export default function Responsibilities() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl mb-20 mt-5"
      >
        Responsibilities
      </motion.h2>
      <div>
        {RESPONSIBILITIES.map((responsibility, index) => (
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
              <p className="mb-2 text-ds text-neutral-400">{responsibility.year}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl lg:w-3/4 w-full"
            >
              <h6 className="mb-2 font-semibold text-lg">
                {responsibility.role} -{" "}
                <span className="text-purple-100">
                  {responsibility.department}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{responsibility.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
