"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import TabButton from "./TabButton";

const experiences = [
  {
    title: "General Treasurer",
    org: "ITH Student Executive Board 2024",
    description:
      "Manage the organization's finances and cash reports Manage budgets and submit activity funds Responsible for administration and financial archives",
    image: "/images/bem.jpg",
  },
  {
    title: "SBPPKM 2024",
    org: "Brawijaya University & Sepuluh Nopember Institute of Technology (ITS)",
    description:
      "Participating in the Comparative Study Program for Improving Student Achievement and Competency (SBPPKM) which aims to broaden horizons in the fields of innovation, organization and developing student potential. This activity includes direct visits to student organizations, campus innovation centers, as well as discussions and sharing experiences with outstanding students at UB and ITS.",
    image: "/images/sbppkm.jpg",
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, 
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-12 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Experience
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#1f2937] rounded-lg p-6 shadow-md text-white"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <Image
              src={exp.image}
              alt={`doc ${exp.title}`}
              width={400}
              height={250}
              className="rounded-md object-cover mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{exp.title}</h2>
            <h3 className="text-2xl font-semibold mb-2">{exp.org}</h3>
            <p className="text-sm text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;