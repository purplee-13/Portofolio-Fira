"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaCertificate, FaLanguage } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const AboutSection = () => {
  const [tab, setTab] = useState("overview");
  const [isPending, startTransition] = useTransition();
  const { isIndonesian } = useLanguage();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const titleText = isIndonesian ? "Tentang Saya" : "About Me";
  const bioText = isIndonesian ? (
    <>
      Lulusan Sistem Informasi Institut Teknologi Bacharuddin Jusuf Habibie dengan IPK <strong>3,97 / 4,00</strong>. 
      Memiliki pengalaman dalam analisis kebutuhan sistem, pengembangan aplikasi berbasis web, 
      serta penerapan keamanan informasi melalui proyek akademik dan kolaborasi dengan instansi pemerintah. 
      Terbiasa bekerja secara kolaboratif, mampu beradaptasi dengan cepat, serta memiliki kemampuan analitis 
      dan pemecahan masalah yang baik dalam mendukung pengembangan solusi digital.
    </>
  ) : (
    <>
      Information Systems graduate from Bacharuddin Jusuf Habibie Institute of Technology with a GPA of <strong>3.97 / 4.00</strong>. 
      Experienced in system requirements analysis, web application development, 
      and information security implementation through academic projects and collaborations with government agencies. 
      Accustomed to working collaboratively, adaptable, with strong analytical and problem-solving skills to support digital solution development.
    </>
  );

  const tabData = [
    {
      title: isIndonesian ? "Keahlian Utama" : "Key Expertise",
      id: "overview",
      content: (
        <ul className="space-y-2 text-[#ADB7BE]">
          <li className="flex items-start gap-2">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>{isIndonesian ? "Analisis & Perancangan Sistem:" : "System Analysis & Design:"}</strong>{" "}
              {isIndonesian
                ? "Elicitation kebutuhan, penyusunan SRS, pemodelan proses bisnis, use case, dan wireframing dashboard."
                : "Requirements elicitation, SRS specification, business process modeling, use cases, and dashboard wireframing."}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>{isIndonesian ? "Pengembangan Web & Backend:" : "Web & Backend Development:"}</strong>{" "}
              PHP, Laravel, Next.js, JavaScript, HTML, CSS, MySQL, PostgreSQL.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>{isIndonesian ? "Keamanan Informasi:" : "Information Security:"}</strong>{" "}
              Multi-Factor Authentication (MFA), Time-based OTP (TOTP), {isIndonesian ? "Kriptografi Dasar, Konsep Siber." : "Basic Cryptography, Cyber Security."}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>{isIndonesian ? "Pengolahan Data:" : "Data Processing:"}</strong>{" "}
              {isIndonesian ? "Machine Learning Dasar & Data Processing." : "Basic Machine Learning & Data Processing."}
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: isIndonesian ? "Pendidikan" : "Education",
      id: "education",
      content: (
        <div className="space-y-3 text-[#ADB7BE]">
          <div className="border-l-2 border-blue-500 pl-4 py-1">
            <h4 className="text-white font-bold text-lg">Institut Teknologi Bacharuddin Jusuf Habibie</h4>
            <p className="text-blue-400 text-sm font-semibold">
              {isIndonesian ? "S1 Sistem Informasi (2022 – 2026) | IPK 3,97 / 4,00" : "B.S. in Information Systems (2022 – 2026) | GPA 3.97 / 4.00"}
            </p>
            <p className="text-sm mt-1">
              {isIndonesian
                ? "Mempelajari analisis dan perancangan sistem informasi, pengembangan aplikasi berbasis web, manajemen basis data, keamanan informasi, dan manajemen proyek TI."
                : "Studied information systems analysis and design, web-based application development, database management, information security, and IT project management."}
            </p>
            <p className="text-sm mt-1 text-gray-300">
              <strong>{isIndonesian ? "Skripsi:" : "Undergraduate Thesis:"}</strong>{" "}
              {isIndonesian
                ? "Implementasi Multi-Factor Authentication menggunakan Google Authenticator pada Aplikasi Parepare Dalam Genggaman."
                : "Implementation of Multi-Factor Authentication using Google Authenticator on the Parepare Dalam Genggaman Application."}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: isIndonesian ? "Sertifikasi & Bahasa" : "Certifications & Languages",
      id: "certifications",
      content: (
        <div className="space-y-4 text-[#ADB7BE]">
          <div className="flex items-start gap-3 bg-[#18191E] p-3.5 rounded-xl border border-gray-800">
            <FaCertificate className="text-yellow-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-bold">{isIndonesian ? "Operator Komputer Madya" : "Intermediate Computer Operator"}</h4>
              <p className="text-xs text-gray-400">Badan Nasional Sertifikasi Profesi (BNSP) - 2024</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-[#18191E] p-3.5 rounded-xl border border-gray-800">
            <FaLanguage className="text-blue-400 text-xl mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-bold">{isIndonesian ? "Kemampuan Bahasa" : "Languages"}</h4>
              <p className="text-sm">{isIndonesian ? "Bahasa Indonesia (Penutur Asli)" : "Indonesian (Native)"}</p>
              <p className="text-sm">{isIndonesian ? "Bahasa Inggris (TOEFL ITP Score: " : "English (TOEFL ITP Score: "}<strong>590</strong>)</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="text-white py-12" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <Image 
            src="/images/fira2.jpg" 
            alt="About Syafira Fatwa"
            width={500} 
            height={500} 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{titleText}</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed mb-6">
            {bioText}
          </p>
          <div className="flex flex-row justify-start gap-2 flex-wrap border-b border-gray-800 pb-2">
            {tabData.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-6">
            {tabData.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


