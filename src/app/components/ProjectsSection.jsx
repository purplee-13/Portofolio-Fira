"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SOBAT DAGANG - Information System of the Trade Office of Parepare City",
    description: "This project is a digital platform developed to assist the Parepare City Department of Trade in recording micro, small, and medium enterprises (MSMEs), providing a business directory, and offering online letter submission services. This website facilitates the public in accessing information about local industries and improves the efficiency of services in the fields of trade, industry, and metrology.",
    image: "/images/projects/sobatdagang.png",
    tag: ["All", "Web"],
    gitUrl: "https://sobat-dagang.pareparekota.go.id/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-Commerce HRShopku Baju Bodo",
    description: "This e-commerce platform is specifically designed to assist the MSME HRShopku Baju Bodo in marketing traditional products typical of South Sulawesi online. This website provides a digital product catalog, online ordering features, and a transaction management system that makes it easier for customers to shop and supports the digitalization of local businesses.",
    image: "/images/projects/hrshopku.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Information System and Services of BEM ITH 2024",
    description: "This website is developed to provide information about the management structure, affiliated student organizations, and work programs of BEM ITH 2024. In addition, there are features of digital service channels such as aspiration forms, organizational administration services, and publication of campus activities to support transparency and services of student organizations.",
    image: "/images/projects/BEM.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "UI/UX Design for Hotel Booking Website",
    description: "This project is about designing the user interface and user experience (UI/UX) for a web-based hotel booking website. The design focuses on a modern appearance, easy-to-understand navigation, efficient booking features, and user-friendly detailed hotel information to enhance user comfort in making online reservations.",
    image: "/images/projects/UIUX.png",
    tag: ["All", "UI/UX"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
