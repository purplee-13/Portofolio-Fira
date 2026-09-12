"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiJavascript, 
  SiPython, 
  SiMysql, 
  SiPhp, 
  SiLaravel, 
  SiReact, 
  SiNextdotjs, 
  SiPostgresql, 
  SiGit, 
  SiGithub, 
  SiFigma 
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { 
  FaCss3Alt,
  FaShieldAlt, 
  FaKey, 
  FaUserShield, 
  FaBrain, 
  FaUsers, 
  FaComments, 
  FaHandshake, 
  FaClock, 
  FaLightbulb, 
  FaSyncAlt 
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";

const SkillsSection = () => {
  const { isIndonesian } = useLanguage();

  const skillCategories = [
    {
      category: "Programming",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      category: "Framework/Tools",
      skills: [
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      ],
    },
    {
      category: "Software",
      skills: [
        { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
        { name: "MySQL Workbench", icon: SiMysql, color: "#00758F" },
        { name: "CrypTool", icon: FaKey, color: "#EAB308" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      ],
    },
    {
      category: isIndonesian ? "Keamanan Informasi" : "Information Security",
      skills: [
        { name: "MFA (Multi-Factor Auth)", icon: FaShieldAlt, color: "#3B82F6" },
        { name: "TOTP (Google Auth)", icon: FaKey, color: "#10B981" },
        { name: isIndonesian ? "Kriptografi Dasar" : "Basic Cryptography", icon: FaKey, color: "#F59E0B" },
        { name: isIndonesian ? "Keamanan Siber" : "Cyber Security", icon: FaUserShield, color: "#8B5CF6" },
      ],
    },
    {
      category: isIndonesian ? "Pengolahan Data" : "Data Processing",
      skills: [
        { name: isIndonesian ? "Machine Learning Dasar" : "Basic Machine Learning", icon: FaBrain, color: "#EC4899" },
        { name: "Data Processing", icon: FaBrain, color: "#6366F1" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: isIndonesian ? "Kepemimpinan" : "Leadership", icon: FaUsers, color: "#60A5FA" },
        { name: isIndonesian ? "Komunikasi" : "Communication", icon: FaComments, color: "#34D399" },
        { name: isIndonesian ? "Kerja Sama Tim" : "Teamwork", icon: FaHandshake, color: "#FBBF24" },
        { name: isIndonesian ? "Manajemen Waktu" : "Time Management", icon: FaClock, color: "#F472B6" },
        { name: "Problem Solving", icon: FaLightbulb, color: "#F59E0B" },
        { name: "Analytical Thinking", icon: FaBrain, color: "#A78BFA" },
        { name: isIndonesian ? "Adaptabilitas" : "Adaptability", icon: FaSyncAlt, color: "#38BDF8" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 my-8">
      {/* Header matching image title style */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#3b82f6] tracking-tight mb-3">
          Skill and Tools
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg">
          {isIndonesian
            ? "Keahlian teknis, pengolahan data, perangkat lunak, dan soft skills"
            : "Technical expertise, data processing, software tools, and soft skills"}
        </p>
      </div>

      {/* Rows Container */}
      <div className="flex flex-col gap-8 max-w-5xl mx-auto px-2">
        {skillCategories.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6"
          >
            {/* Left Category Pill */}
            <div className="w-full md:w-56 flex-shrink-0 flex items-center justify-center">
              <div className="w-full py-3.5 px-6 rounded-full bg-slate-100 dark:bg-[#eef2f6] text-gray-800 text-center font-bold text-base sm:text-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
                {item.category}
              </div>
            </div>

            {/* Connecting Dot Line */}
            <div className="hidden md:flex items-center flex-shrink-0 gap-1.5 px-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500/70"></div>
              <div className="w-12 border-b-2 border-dashed border-blue-400/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500/70"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50"></div>
            </div>

            {/* Right Container holding icons */}
            <div className="flex-1 w-full rounded-3xl md:rounded-full bg-[#18191E] border border-gray-800 p-3.5 sm:p-4 sm:px-6 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 shadow-inner">
              {item.skills.map((skill, sIdx) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#202229] border border-gray-700/60 hover:border-blue-500/50 hover:bg-[#282a36] transition-all duration-200 group cursor-default"
                  >
                    <IconComponent
                      className="text-lg sm:text-xl transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-gray-200 text-xs sm:text-sm font-medium group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

