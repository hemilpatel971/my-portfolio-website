"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
          Through my tenure in data science, I've mastered the art of uncovering insights, manipulating data, 
          and building machine learning models for predictive analytics.
      </p>
      <p className="mb-3">
          However, I've discovered a growing interest in the broader challenges of software engineering. 
          Eager to expand skills in crafting robust, scalable systems supporting modern technology, and delving into software engineering intricacies.
      </p>
      <p>
          I actively seek to embrace cutting-edge tools, frameworks, and principles to expand my 
          skill set and deepen my understanding of the ever-evolving tech landscape. 
          Currently expanding my expertise in scaling web apps and system design.
      </p>

    </motion.section>
  );
}
