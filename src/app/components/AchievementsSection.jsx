"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "../context/LanguageContext";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  const { isIndonesian } = useLanguage();

  const achievementsList = [
    {
      metric: "IPK / GPA",
      value: "3.97",
      isFloat: true,
    },
    {
      metric: isIndonesian ? "Proyek TI & Web" : "IT & Web Projects",
      value: "4",
      postfix: "+",
    },
    {
      metric: isIndonesian ? "Publikasi Ilmiah" : "Scientific Publications",
      value: "3",
    },
    {
      metric: isIndonesian ? "Skor TOEFL ITP" : "TOEFL ITP Score",
      value: "590",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-12 xl:px-16">
      <div className="bg-[#18191E] border-[#33353F] border rounded-2xl py-8 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-around gap-6 shadow-xl">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-2 sm:my-0 text-center"
            >
              <h2 className="text-white text-3xl sm:text-4xl font-bold flex flex-row items-center">
                {achievement.prefix}
                {achievement.isFloat ? (
                  <span className="text-white font-extrabold text-3xl sm:text-4xl">3.97</span>
                ) : (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-3xl sm:text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                )}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-sm sm:text-base mt-1 font-medium">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;


