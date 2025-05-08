import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 px-4 lg:px-[10vw] py-8 mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Name or Logo */}
        <div className="text-white font-bold text-xl">Sartaj Alam</div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-purple-500 transition">Home</a>
          <a href="#about" className="hover:text-purple-500 transition">About</a>
          <a href="#skills" className="hover:text-purple-500 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://www.linkedin.com/in/a1sartaj/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><FaLinkedin /></a>
          <a href="https://github.com/sartaj9806" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><FaGithub /></a>
          <a href="https://www.youtube.com/@A1Sartaj/videos" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><FaYoutube /></a>
          <a href="https://www.instagram.com/a1sartaj/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><FaInstagram /></a>
        </div> 
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-6 text-gray-600">
        © {new Date().getFullYear()} Sartaj Alam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
