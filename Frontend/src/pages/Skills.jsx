import React from 'react'
import { assets } from '../assets/assets.js'

const Skills = () => {
  return (
    <section id='skills' className='px-2 lg:px-36  py-[68px]'>

      <h2 className='text-4xl font-bold text-center my-8 text-purple-500'>Skills</h2>

      <div className='grid max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 gap-4 justify-center '>
        {/* ---------Frontend----------- */}
        <div className='text-center bg-zinc-900 rounded-md border-4 border-purple-300 shadow-[0_0_15px_rgba(194,122,255,0.8),0_0_25px_rgba(194,122,255,0.5)]'>
          {/* Header */}
          <h3 className='text-3xl my-4 font-medium text-gray-400'>Fronted</h3>

          {/* Skills Content */}
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] px-4 gap-2 my-4'>
            {/* HTML */}
            <div className='flex w-full px-6 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.htmlLogo} alt="" />
              <p className='font-medium text-base '>HTML</p>
            </div>

            {/* CSS */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.cssLogo} alt="" />
              <p className='font-medium text-base '>CSS</p>
            </div>

            {/* JavaScript */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.jsLogo} alt="" />
              <p className='font-medium text-base '>JavaScript</p>
            </div>

            {/* React Js */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.reactLogo} alt="" />
              <p className='font-medium text-base '>React Js</p>
            </div>

            {/* Vite */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.vite} alt="" />
              <p className='font-medium text-base '>Vite</p>
            </div>

            {/* Tailwind CSS */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.tailwindLogo} alt="" />
              <p className='font-medium text-base '>Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* -------------Backend------------ */}
        <div className='text-center bg-zinc-900  rounded-md border-4 border-purple-300 shadow-[0_0_15px_rgba(194,122,255,0.8),0_0_25px_rgba(194,122,255,0.5)]'>
          {/* Heading */}
          <h3 className='text-3xl my-4 font-medium text-gray-400' >Backend</h3>

          {/* Skills content */}
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] px-4 gap-2 my-4'>
            {/* Node js */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.nodeJs} alt="" />
              <p className='font-medium text-base '>Node Js</p>
            </div>

            {/* Express js */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7 bg-white p-1 rounded-xs' src={assets.express} alt="" />
              <p className='font-medium text-base '>Express Js</p>
            </div>

            {/* MongoDB */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.mongoDB} alt="" />
              <p className='font-medium text-base '>MongoDB</p>
            </div>
          </div>
        </div>

        {/* -------------Languages------------ */}
        <div className='text-center bg-zinc-900  rounded-md border-4 border-purple-300 shadow-[0_0_15px_rgba(194,122,255,0.8),0_0_25px_rgba(194,122,255,0.5)]'>
          {/* Heading */}
          <h3 className='text-3xl my-4 font-medium text-gray-400' >Languages</h3>

          {/* Skills Content */}
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] px-4 gap-2 my-4'>

            {/* C */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.C} alt="" />
              <p className='font-medium text-base '>C</p>
            </div>

            {/* CPP */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.CPP} alt="" />
              <p className='font-medium text-base '>C++</p>
            </div>

            {/* JavaScript */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.jsLogo} alt="" />
              <p className='font-medium text-base '>JavaScript</p>
            </div>

          </div>

        </div>

        {/* -----------Tools--------------- */}
        <div className='text-center bg-zinc-900  rounded-md border-4 border-purple-300 shadow-[0_0_15px_rgba(194,122,255,0.8),0_0_25px_rgba(194,122,255,0.5)]'>
          {/* Heading */}
          <h3 className='text-3xl my-4 font-medium text-gray-400' >Tools</h3>

          {/* Skills content */}
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] px-4 gap-2 my-4'>

            {/* Git */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.git} alt="" />
              <p className='font-medium text-base '>Git</p>
            </div>

            {/* GitHub */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7 bg-white rounded-xs' src={assets.gitHub} alt="" />
              <p className='font-medium text-base '>GitHub</p>
            </div>

            {/* VS Code */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.vsCode} alt="" />
              <p className='font-medium text-base '>VS Code</p>
            </div>

            {/* PostMan */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.postman} alt="" />
              <p className='font-medium text-base '>Postman</p>
            </div>

            {/* Figma */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.figma} alt="" />
              <p className='font-medium text-base '>Figma</p>
            </div>

            {/* MongoDB compass */}
            <div className='flex w-full px-2 py-2 gap-3 items-center justify-center border rounded-full text-center'>
              <img className='w-7' src={assets.mongoDB} alt="" />
              <p className='font-medium text-base '>MongoDB Compass</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills
