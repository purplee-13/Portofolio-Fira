"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const PublicationsSection = () => {
  const { isIndonesian } = useLanguage();

  const publications = [
    {
      id: 1,
      title: "Integrasi layanan fintech dalam platform e-commerce: Studi kasus penggunaan paylater pada generasi Z",
      journal: "JEBI (Jurnal Ekonomi dan Bisnis Islam)",
      volume: "Vol. 10 No. 1",
      year: "2025",
      type: isIndonesian ? "Jurnal Ilmiah Nasional" : "National Scientific Journal",
      link: "#"
    },
    {
      id: 2,
      title: "Penerapan Smart Contract Untuk Pengelolaan Aset Di Institut Teknologi Bacharuddin Jusuf Habibie",
      journal: "JISSI (Jurnal Informasi dan Sistem Informasi)",
      volume: "Volume 2024",
      year: "2024",
      type: isIndonesian ? "Jurnal Sistem Informasi" : "Information Systems Journal",
      link: "#"
    },
    {
      id: 3,
      title: "Pemanfaatan Google Workspace sebagai Sarana Produktivitas dan Kolaborasi dalam Mendukung Pembelajaran Aktif, Inovatif, dan Kreatif di SMAN 3 Parepare",
      journal: "ABDIMAS (Jurnal Pengabdian Masyarakat)",
      volume: "Volume 2023",
      year: "2023",
      type: isIndonesian ? "Pengabdian Masyarakat" : "Community Service Paper",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="py-12 my-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white mb-3">
          {isIndonesian ? "Publikasi Ilmiah" : "Scientific Publications"}
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg max-w-xl mx-auto">
          {isIndonesian
            ? "Karya ilmiah dan hasil riset akademik yang telah dipublikasikan"
            : "Academic research papers and publications"}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#18191E] border border-gray-800 hover:border-blue-500/40 rounded-2xl p-6 shadow-lg flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {pub.type}
                </span>
                <span className="text-xs text-gray-400 font-bold bg-gray-800/80 px-2.5 py-0.5 rounded">
                  {pub.year}
                </span>
              </div>

              <div className="mb-4">
                <FaQuoteLeft className="text-blue-500/40 text-xl mb-2" />
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {pub.title}
                </h3>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span className="font-semibold text-gray-300">{pub.journal}</span>
              <span>{pub.volume}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;

