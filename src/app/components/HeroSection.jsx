"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { isIndonesian } = useLanguage();

  const greeting = isIndonesian ? "Halo, Saya" : "Hello, I'm";
  const badgeText = isIndonesian
    ? "Fresh Graduate - S1 Sistem Informasi (IPK 3,97/4,00)"
    : "Fresh Graduate - B.S. in Information Systems (GPA 3.97/4.00)";
  const bioText = isIndonesian
    ? "Lulusan Sistem Informasi Institut Teknologi Bacharuddin Jusuf Habibie dengan IPK 3,97/4,00. Berpengalaman dalam analisis kebutuhan sistem, pengembangan aplikasi web full stack, serta penerapan keamanan informasi (MFA & TOTP) pada proyek instansi pemerintah."
    : "Information Systems graduate from Bacharuddin Jusuf Habibie Institute of Technology with a GPA of 3.97/4.00. Experienced in system requirement analysis, full-stack web development, and information security implementation (MFA & TOTP) for government agency projects.";
  const btnContact = isIndonesian ? "Hubungi Saya" : "Contact Me";
  const btnExp = isIndonesian ? "Lihat Pengalaman" : "View Experience";

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <FaGraduationCap className="text-base" /> {badgeText}
          </div>
          
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              {greeting}{" "}
            </span>
            <br />
            <TypeAnimation
              key={isIndonesian ? "id-anim" : "en-anim"}
              sequence={[
                "Syafira Fatwa",
                1200,
                "System Analyst",
                1200,
                "Full Stack Programmer",
                1200,
                "Web Developer",
                1200,
                "Information Security",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl leading-relaxed">
            {bioText}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            <Link
              href="#contact"
              className="px-6 py-3.5 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-blue-500/25 transition-all text-center"
            >
              {btnContact}
            </Link>
            <a
              href="#experience"
              className="px-6 py-3.5 w-full sm:w-fit rounded-full bg-[#18191E] border border-gray-700 hover:border-gray-500 text-white font-medium transition-all text-center"
            >
              {btnExp}
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 p-2 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] relative overflow-hidden border border-blue-500/30 shadow-2xl">
            <Image
              src="/images/fira.png"
              alt="Syafira Fatwa"
              className="rounded-full object-cover object-top w-full h-full"
              width={400}
              height={400}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
