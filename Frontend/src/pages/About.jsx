import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <section id="about" className="px-4 lg:px-[10vw] py-[68px] bg-zinc-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-500">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src={assets.heroImage}
            alt="Sartaj Alam"
            className="w-[180px] h-[220px] object-cover rounded-lg border-4 border-purple-400 shadow-lg"
          />
        </div>

        {/* Personal Info and Bio */}
        <div className="text-gray-300">
          <h3 className="text-2xl font-semibold mb-2 text-purple-400">Sartaj Alam</h3>
          <p className="mb-4">Full Stack Developer (MERN Stack)</p>
          
          <ul className="mb-6 text-base space-y-1">
            <li><span className="font-semibold text-white">Email:</span> sartaj9806@gmail.com</li>
            <li><span className="font-semibold text-white">Phone:</span> +91 9871990306</li>
            <li><span className="font-semibold text-white">Location:</span> Delhi NCR (Open to Work)</li>
            <li><span className="font-semibold text-white">Education:</span> BCA from IGNOU (Open Distance Learning)</li>
          </ul>

          <p className="text-base">
            I'm a passionate and self-motivated developer with hands-on experience in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I'm always learning and eager to contribute to meaningful projects. Let's build something amazing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
