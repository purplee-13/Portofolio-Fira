"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("id");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang");
    if (savedLang && (savedLang === "id" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const toggleLanguage = () => {
    const newLang = language === "id" ? "en" : "id";
    changeLanguage(newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        toggleLanguage,
        isIndonesian: language === "id",
        isEnglish: language === "en",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
