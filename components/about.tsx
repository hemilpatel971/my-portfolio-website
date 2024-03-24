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
      <p>
          Through my tenure in data science, I've mastered the art of uncovering insights, 
          manipulating data, building models, and leveraging machine learning for predictive analytics.
      </p>
      <p>
          However, I've discovered a growing interest in the broader challenges of software engineering. 
          I'm eager to expand my skills and apply my problem-solving abilities to build robust, scalable 
          systems that support modern technology. Whether it's crafting effective solutions or optimizing performance, 
          I'm prepared to delve into the intricacies that software engineering presents.
      </p>
      <p>
          I actively seek to embrace cutting-edge tools, frameworks, and principles to expand my 
          skill set and deepen my understanding of the ever-evolving tech landscape. 
          I am currently expanding my expertise in scaling web apps and system design.
      </p>

    </motion.section>
  );
}
