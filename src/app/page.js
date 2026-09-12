"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import PublicationsSection from "./components/PublicationsSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <PublicationsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
}

