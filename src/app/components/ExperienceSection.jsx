"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ExperienceSection = () => {
  const { isIndonesian } = useLanguage();

  const experiences = [
    {
      title: isIndonesian ? "Sekretaris" : "Secretary",
      org: isIndonesian
        ? "SATGAS PPKS (Pencegahan & Penanganan Kekerasan Seksual) ITH"
        : "SATGAS PPKS (Sexual Violence Prevention Task Force) ITH",
      period: "2022 – 2025",
      bullets: isIndonesian
        ? [
            "Mengelola administrasi organisasi secara menyeluruh.",
            "Menyusun surat-menyurat resmi dan dokumentasi kegiatan instansi.",
          ]
        : [
            "Managed organizational administration comprehensively.",
            "Drafted official correspondence and documented institutional activities.",
          ],
    },
    {
      title: isIndonesian ? "Bendahara Umum" : "General Treasurer",
      org: isIndonesian ? "Badan Eksekutif Mahasiswa (BEM) ITH" : "ITH Student Executive Board (BEM)",
      period: "2024",
      bullets: isIndonesian
        ? [
            "Mengelola anggaran dan alokasi dana organisasi mahasiswa.",
            "Menyusun laporan keuangan periodik dan transparansi kas.",
            "Mengoordinasikan administrasi keuangan pada seluruh kegiatan organisasi.",
          ]
        : [
            "Managed budgets and financial allocations for student organizations.",
            "Prepared periodic financial reports and ensured cash flow transparency.",
            "Coordinated financial administration across all organizational events.",
          ],
    },
    {
      title: isIndonesian ? "Peserta SBPPKM 2024" : "SBPPKM 2024 Participant",
      org: "Universitas Brawijaya & Institut Teknologi Sepuluh Nopember (ITS)",
      period: "2024",
      bullets: isIndonesian
        ? [
            "Mengikuti Studi Banding Peningkatan Prestasi dan Kompetensi Mahasiswa (SBPPKM) untuk memperluas wawasan inovasi, keorganisasian, dan pengembangan potensi mahasiswa.",
            "Melakukan kunjungan ke pusat inovasi kampus dan berdiskusi dengan mahasiswa berprestasi di UB dan ITS.",
          ]
        : [
            "Participated in the Student Achievement & Competency Enhancement Comparative Study Program (SBPPKM) to broaden innovation, organization, and potential development.",
            "Visited campus innovation centers and engaged in discussions with outstanding students at UB and ITS.",
          ],
    },
  ];

  return (
    <section id="experience" className="my-12 py-12">
      <h2 className="text-4xl font-bold text-white mb-3 text-center">
        {isIndonesian ? "Pengalaman Organisasi" : "Organizational Experience"}
      </h2>
      <p className="text-[#ADB7BE] text-center mb-10 max-w-lg mx-auto">
        {isIndonesian
          ? "Jejak kepemimpinan dan kontribusi aktif dalam organisasi kemahasiswaan"
          : "Leadership journey and active contributions in student organizations"}
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#18191E] border border-gray-800 hover:border-blue-500/40 rounded-2xl p-6 shadow-lg text-white flex flex-col justify-between transition-all"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <div>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {exp.title}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1 font-medium">
                  <FaCalendarAlt className="text-xs text-blue-400" /> {exp.period}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {exp.org}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
