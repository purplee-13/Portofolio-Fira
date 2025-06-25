"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
          <ul className="list-disc pl-2">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Adaptability</li>
            <li>Creative Thinking</li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Hard Skills</h3>
          <ul className="list-disc pl-2">
            <li>HTML, CSS, JS, PHP</li>
            <li>Cisco Packet Tracer</li>
            <li>Framework Laravel</li>
            <li>XAMPP</li>
            <li>Figma</li>
            <li>Cryptool</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bacharuddin Jusuf Habibie Institute of Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>KOMDIGI - Intermediate Computer Operator</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/fira2.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a student of the Information Systems Study Program at the Bacharuddin Jusuf Habibie Institute of Technology. 
            Has an interest in Information Systems Development, Cyber Security, and Digital Business. 
            Active in student organizations as a BEM administrator, and has experience in several agency and MSME website projects. 
            I am committed to continuing to develop in the field of information technology and am ready to contribute to a 
            professional team in the digital industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
