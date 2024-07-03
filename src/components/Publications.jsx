import React from "react";
import { motion } from "framer-motion";

import { PUBLICATIONS } from "../constants/index.js";

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Publications
      </motion.h2>
      <div>
        {PUBLICATIONS.map((publication, index) => (
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
              <p className="mb-2 text-md font-semibold text-neutral-400">{publication.conference}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl lg:w-3/4 w-full"
            >
              <h6 className="mb-2 font-semibold text-lg italic">
                {publication.title}
              </h6>
              <p className="mb-4 text-neutral-400">{publication.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
