import React from 'react';
import { assets } from '../assets/assets.js';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="flex flex-col-reverse  md:flex-row min-h-[calc(100vh-64px)] px-2 lg:px-[10vw]  justify-between  items-center overflow-hidden">

      {/* Left Text Container */}
      <div className="w-full lg:w-1/2  ">
        <p className="text-2xl lg:text-4xl font-medium my-4">Hi, I'm</p>
        <h1 className="text-5xl lg:text-7xl font-bold my-4">Sartaj Alam</h1>
        <h2 className="text-3xl lg:text-5xl my-4 text-purple-500">A Full Stack Developer</h2>
        <p className="text-base lg:text-lg my-4 text-gray-500">
          I build responsive full-stack web applications using MongoDB, Express, React, and Node.js.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 my-6 text-2xl">
          <a href="https://www.linkedin.com/in/a1sartaj/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><FaLinkedin /></a>
          <a href="https://github.com/sartaj9806" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><FaGithub /></a>
          <a href="https://www.youtube.com/@A1Sartaj/videos" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><FaYoutube /></a>
          <a href="https://www.instagram.com/a1sartaj/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><FaInstagram /></a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <a href={assets.resume} download className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 font-medium text-base transition">Download Resume</a>
          <a href="#contact" className="border border-purple-500 text-purple-500 px-6 py-2 rounded-md hover:bg-purple-50 transition">Contact Me</a>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="w-full md:w-1/2  flex justify-center md:justify-end mt-10 md:mt-0 ">
        <div className="overflow-hidden w-[350px] h-[350px] rounded-full border-4 border-purple-300 shadow-[0_0_15px_rgba(194,122,255,0.8),0_0_25px_rgba(194,122,255,0.5)] flex items-center justify-center">
          <img src={assets.heroImage} alt="Sartaj" className="w-full h-full mt-4 object-cover rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Home;
