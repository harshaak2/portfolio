import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { Modal, Button } from "flowbite-react";

import { PROJECTS } from "../constants/index.js";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSource) => {
    setSelectedImage(imageSource);
    setShowModal(true);
  };
  return (
    <div className="border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center border-b border-neutral-900 items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 items-center"
            >
              <img
                src={project.image}
                height={200}
                width={200}
                alt="project-image"
                className="mb-6 rounded"
                onClick={() => handleImageClick(project.image)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl w-full lg:w-3/4 py-4"
            >
              <div className="flex gap-4 items-center mb-2">
                <h6 className="font-semibold">{project.title}</h6>
                <div className="flex gap-2">
                  {project.link && <a href={project.link} target="_blank"><FaGithub className="text-xl" /></a>}
                  {project.hosted && (
                    <div className="flex gap-2">
                      <span>|</span>
                      <RiExternalLinkLine className="text-xl" />
                    </div>
                  )}
                </div>
              </div>
              <p className="mb-6 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
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
        {/* {showModal && (
          <Modal
            dismissible
            show={showModal}
            popup
            size={"md"}
            onClose={() => setShowModal(false)}
          >
            <Modal.Header />
            <Modal.Body className="flex flex-col items-center justify-center backdrop-blur-sm py-10 w-1/3 mx-auto">
              <div className="text-center">
                <img src={selectedImage} alt="image" style={{width: '100rem'}}/>
                <div className="flex justify-center gap-4">
                  <Button className="rounded py-2 px-1  w-10 h-10 font-semibold text-neutral-200 bg-neutral-900 font-medium" onClick={() => setShowModal(false)}>
                    {"Close"}
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )} */}
      </div>
    </div>
  );
}
