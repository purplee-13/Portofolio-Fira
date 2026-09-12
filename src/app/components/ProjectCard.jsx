import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, role, period, description, gitUrl, tech }) => {
  return (
    <div className="bg-[#18191E] rounded-2xl border border-gray-800 hover:border-blue-500/40 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-lg group">
      <div
        className="h-48 sm:h-56 relative overflow-hidden bg-slate-800"
        style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#121212] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75 transition-all duration-300">
          {gitUrl && gitUrl !== "#" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 border-2 relative rounded-full border-white/60 hover:border-white group/link flex items-center justify-center transition-all bg-black/40"
            >
              <CodeBracketIcon className="h-6 w-6 text-white" />
            </Link>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {role || "System Analyst"}
            </span>
            <span className="text-xs text-gray-400 font-medium">{period}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-[#ADB7BE] text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-800/80">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-[#202229] text-gray-300 border border-gray-700/50"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

