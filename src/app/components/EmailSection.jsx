"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { FaArrowRight, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const EmailSection = () => {
  const { isIndonesian } = useLanguage();
  const whatsappMessage = isIndonesian
    ? "Halo Syafira, saya ingin menghubungi Anda."
    : "Hello Syafira, I would like to get in touch.";
  const whatsappUrl = `https://wa.me/6282188219814?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="my-12 py-16 md:py-24">
      <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#15171d] shadow-2xl shadow-black/20">
        <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 left-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/15 blur-3xl" />

        <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-14">
          <div className="flex flex-col">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              {isIndonesian ? "Kontak" : "Get in touch"}
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {isIndonesian ? "Punya ide menarik?" : "Have an idea in mind?"}
              <span className="mt-1 block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {isIndonesian ? "Mari wujudkan bersama." : "Let's make it happen."}
              </span>
            </h2>

            <p className="mt-5 max-w-lg leading-relaxed text-[#ADB7BE]">
              {isIndonesian
                ? "Saya terbuka untuk kesempatan kerja dan kolaborasi proyek. Ceritakan kebutuhan Anda dan mari mulai percakapan."
                : "I am open to job opportunities and project collaborations. Tell me what you have in mind and let's start a conversation."}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <FaMapMarkerAlt aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-gray-400">
                    {isIndonesian ? "Berlokasi di" : "Based in"}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    {isIndonesian ? "Jakarta Selatan, Indonesia" : "South Jakarta, Indonesia"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  <FaWhatsapp aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-gray-400">
                    {isIndonesian ? "Hubungi langsung" : "Reach me directly"}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    +62 821-8821-9814
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm text-gray-400">
                {isIndonesian ? "Temukan saya" : "Find me"}
              </span>
              <Link
                href="https://github.com/purplee-13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-white/30 hover:bg-white/10"
              >
                <Image src={GithubIcon} alt="" width={24} height={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/syafira-fatwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-white/30 hover:bg-white/10"
              >
                <Image src={LinkedinIcon} alt="" width={24} height={24} />
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-green-400/20 bg-gradient-to-br from-green-950/80 via-[#10241c] to-[#15171d] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full bg-green-400/10 blur-2xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-3xl text-green-400">
                <FaWhatsapp aria-hidden="true" />
              </div>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-green-300">
                WhatsApp
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {isIndonesian ? "Mulai obrolan" : "Start a conversation"}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-300">
                {isIndonesian
                  ? "Klik tombol di bawah untuk mengirim pesan langsung. Saya menantikan kabar dari Anda."
                  : "Click below to send a direct message. I look forward to hearing from you."}
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-10 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-5 py-4 font-semibold text-[#082012] shadow-lg shadow-green-950/30 transition hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" />
              {isIndonesian ? "Hubungi via WhatsApp" : "Message me on WhatsApp"}
              <FaArrowRight className="text-sm" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
