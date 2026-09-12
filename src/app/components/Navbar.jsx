"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isIndonesian } = useLanguage();

  const navLinks = [
    {
      title: isIndonesian ? "Tentang" : "About",
      path: "#about",
    },
    {
      title: "Skills & Tools",
      path: "#skills",
    },
    {
      title: isIndonesian ? "Proyek" : "Projects",
      path: "#projects",
    },
    {
      title: isIndonesian ? "Organisasi" : "Experience",
      path: "#experience",
    },
    {
      title: isIndonesian ? "Publikasi" : "Publications",
      path: "#publications",
    },
    {
      title: isIndonesian ? "Kontak" : "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212]/95 backdrop-blur-md">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-xl md:text-3xl text-white font-bold tracking-wider hover:text-blue-400 transition-colors"
        >
          SYAFIRA FATWA
        </Link>
        
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="menu hidden md:flex items-center gap-6" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

