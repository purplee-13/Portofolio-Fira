"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-[#1e2029] border border-gray-700/80 rounded-full p-1 shadow-inner">
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={`flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
          language === "id"
            ? "bg-blue-600 text-white shadow-md scale-105"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
        aria-label="Bahasa Indonesia"
      >
        <span>🇮🇩</span>
        <span>ID</span>
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-blue-600 text-white shadow-md scale-105"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
        aria-label="English"
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
