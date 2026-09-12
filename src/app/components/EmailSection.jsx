"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isIndonesian } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      alert(isIndonesian ? "Gagal mengirim email. Silakan coba lagi." : "Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">
          {isIndonesian ? "Mari Terhubung" : "Let's Connect"}
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md leading-relaxed">
          {isIndonesian
            ? "Saya terbuka untuk kesempatan kerja, kolaborasi proyek analisis sistem, pengembangan web full stack, dan keamanan informasi. Silakan hubungi saya melalui email atau LinkedIn!"
            : "I am open to job opportunities, system analysis collaborations, full-stack web development, and information security projects. Feel free to contact me via email or LinkedIn!"}
        </p>
        <div className="space-y-3 mb-6 text-sm text-gray-300">
          <p className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">Email:</span> firafatwa@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">{isIndonesian ? "Telepon:" : "Phone:"}</span> +62 82188219814
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">{isIndonesian ? "Lokasi:" : "Location:"}</span> Pinrang, Sulawesi Selatan, Indonesia
          </p>
        </div>
        <div className="socials flex flex-row gap-4 items-center">
          <Link 
            href="https://github.com/purplee-13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src={GithubIcon} alt="Github Icon" width={32} height={32} />
          </Link>
          <Link 
            href="https://linkedin.com/in/syafira-fatwa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={32} height={32} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            {isIndonesian ? "Pesan berhasil dikirim!" : "Email sent successfully!"}
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                {isIndonesian ? "Email Anda" : "Your Email"}
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                {isIndonesian ? "Subjek" : "Subject"}
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={isIndonesian ? "Pesan atau Tawaran Proyek" : "Greetings or Project Inquiry"}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                {isIndonesian ? "Pesan" : "Message"}
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={isIndonesian ? "Halo Syafira..." : "Hello Syafira..."}
              />
            </div>
            <button
              type="submit" disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors shadow-lg"
            >
              {loading
                ? isIndonesian ? "Mengirim..." : "Sending..."
                : isIndonesian ? "Kirim Pesan" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

