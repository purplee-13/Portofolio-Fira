"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { isIndonesian } = useLanguage();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]">
      <div className="container p-8 flex flex-col sm:flex-row justify-between items-center mx-auto px-6 sm:px-12 gap-4 text-center sm:text-left">
        <span className="font-bold text-[#3b82f6] tracking-wider">SYAFIRA FATWA</span>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Syafira Fatwa. {isIndonesian ? "Semua hak dilindungi undang-undang." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

