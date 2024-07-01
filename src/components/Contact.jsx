import React from "react";
import { motion } from "framer-motion";

import { CONTACT } from "../constants/index.js";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-6 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter flex flex-col items-center text-neutral-300">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href="mailto:sriharsha.k21@iiits.in"
          className="underline cursor-pointer my-2"
        >
          {CONTACT.email}
        </a>
        <a 
          href="https://drive.google.com/file/d/1FOK1U3xz5BMaEyZL30VPresIG8uj3_EZ/view?usp=sharing"
          className="underline cursor-pointer my-2"
          target="_blank"
        >
          Link to my Resume
        </a>
      </div>
    </div>
  );
}
