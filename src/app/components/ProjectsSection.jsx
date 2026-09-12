"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isIndonesian } = useLanguage();

  const projectsData = [
    {
      id: 1,
      title: "Website Parepare Dalam Genggaman (PDG)",
      role: "System Analyst & Full Stack Programmer",
      period: isIndonesian ? "2025 – Sekarang" : "2025 – Present",
      description: isIndonesian
        ? "Pengembangan aplikasi layanan publik. Mengimplementasikan Multi-Factor Authentication (MFA) dengan metode TOTP untuk meningkatkan keamanan autentikasi pengguna serta mengembangkan fitur backend berbasis Next.js dan PostgreSQL."
        : "Public service application development. Implemented Multi-Factor Authentication (MFA) using TOTP to enhance authentication security and developed backend features using Next.js and PostgreSQL.",
      image: "/images/projects/sobatdagang.png",
      tag: ["All", "System Analyst", "Full Stack"],
      gitUrl: "#",
      previewUrl: "#",
      tech: ["Next.js", "PostgreSQL", "MFA / TOTP", "System Analysis"]
    },
    {
      id: 2,
      title: isIndonesian ? "SOBAT DAGANG – Dinas Perdagangan Kota Parepare" : "SOBAT DAGANG – Parepare City Department of Trade",
      role: "System Analyst & Full Stack Programmer",
      period: "3/2025 – 6/2025",
      description: isIndonesian
        ? "Melakukan elicitation kebutuhan stakeholder, menyusun spesifikasi SRS, serta mengembangkan modul pengelolaan data UMKM, direktori UMKM, dan pendaftaran UMKM sertifikasi halal beserta fitur CRUD & basis data."
        : "Conducted stakeholder requirements elicitation, drafted SRS documents, and developed MSME management modules, MSME directory, halal certification registration, and CRUD database features.",
      image: "/images/projects/sobatdagang.png",
      tag: ["All", "System Analyst", "Full Stack"],
      gitUrl: "https://sobat-dagang.pareparekota.go.id/",
      previewUrl: "#",
      tech: ["PHP", "Laravel", "MySQL", "System Analysis", "CRUD"]
    },
    {
      id: 3,
      title: "Dashboard Internal Monitoring System - STO Telkom Parepare",
      role: "System Analyst & Full Stack Programmer",
      period: "10/2025 – 11/2025",
      description: isIndonesian
        ? "Mengumpulkan & menganalisis kebutuhan pengguna, menyusun dokumen System Requirement Specification (SRS), merancang alur proses bisnis & use case, serta membuat wireframe & dashboard visualisasi data operasional."
        : "Collected & analyzed user requirements, drafted System Requirement Specification (SRS) documents, designed business process flows & use cases, and created wireframes & operational data visualization dashboard.",
      image: "/images/projects/hrshopku.png",
      tag: ["All", "System Analyst", "UI/UX"],
      gitUrl: "#",
      previewUrl: "#",
      tech: ["SRS", "Wireframing", "Dashboard Design", "Use Case Modeling"]
    },
    {
      id: 4,
      title: isIndonesian ? "Sistem Manajemen Kelurahan (SIMAK)" : "Sub-District Management System (SIMAK)",
      role: "System Analyst",
      period: "6/2025 – 7/2025",
      description: isIndonesian
        ? "Observasi & analisis proses administrasi 22 kelurahan di Parepare, menyusun dokumen kebutuhan fungsional & nonfungsional, pemodelan proses bisnis, serta mendesain antarmuka sistem menggunakan Figma."
        : "Observed & analyzed administrative processes across 22 sub-districts in Parepare, drafted functional & non-functional requirement documents, modeled business processes, and designed UI using Figma.",
      image: "/images/projects/SIMAK.png",
      tag: ["All", "System Analyst", "UI/UX"],
      gitUrl: "#",
      previewUrl: "#",
      tech: ["Figma", "UI/UX", "Business Process Modeling", "System Analysis"]
    },
  ];

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
    <section id="projects" className="py-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        {isIndonesian ? "Pengalaman Proyek" : "Project Experience"}
      </h2>
      <p className="text-center text-[#ADB7BE] mb-8 max-w-xl mx-auto">
        {isIndonesian
          ? "Proyek-proyek analisis sistem dan pengembangan aplikasi web yang pernah saya selesaikan"
          : "System analysis and web application development projects I have completed"}
      </p>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-4 flex-wrap">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="System Analyst"
          isSelected={tag === "System Analyst"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-10 mt-6">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              role={project.role}
              period={project.period}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;


