import React, { Profiler, useState } from 'react'
import { projects } from '../assets/assets.js'

const Project = () => {


  const [selectedProject, setSelectedProject] = useState(null)

  const handleToggleModel = (project) => {
    setSelectedProject(project)
  }

  return (
    <section id='project' className='px-2 lg:px-[10vw] py-[68px]'>
      <h2 className='text-4xl font-bold text-center my-8 text-purple-500'>Project</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          projects.map((item, index) => (
            <div onClick={() => handleToggleModel(item)} key={index} className='p-4 bg-zinc-900 rounded-md border-4 border-purple-300 shadow-[0_0_15px_rgba(194,122,255,0.8),0_0_25px_rgba(194,122,255,0.5)]'>
              <img className='rounded-md' src={item.image} alt="" />
              <h2 className='text-2xl font-bold text-purple-400 my-4'>{item.title}</h2>
              <p className='text-base text-gray-500 my-4 w-full h-[100px] overflow-hidden '>{item.description}</p>
              <div className='flex flex-wrap gap-2'>
                {
                  item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className='bg-purple-800 text-white px-2 py-1 rounded-full text-sm'>{tag}</span>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>

      {
        selectedProject && (
          <div className='fixed inset-0 z-50 flex items-center justify-center'>
            {/* Overlay */}
            <div
              className='absolute inset-0 bg-black opacity-70'
              onClick={() => setSelectedProject(null)}
            ></div>

            {/* Modal Content */}
            <div className='relative bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden z-10'>
              <div className='flex justify-end p-4'>
                <button
                  className='text-3xl font-bold text-white hover:text-purple-500 cursor-pointer'
                  onClick={() => setSelectedProject(null)}
                >
                  &times;
                </button>
              </div>

              <div className='flex flex-col px-6 pb-6'>
                <img className='rounded-md mb-4' src={selectedProject.image} alt="" />
                <h3 className='text-2xl font-bold text-purple-400 mb-2'>{selectedProject.title}</h3>
                <p className='text-gray-300 mb-4'>{selectedProject.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className='bg-purple-800 text-white px-2 py-1 rounded-full text-sm'>{tag}</span>
                  ))}
                </div>
                <div className='flex gap-4 mt-4'>
                  <a href={selectedProject.gitHubLink} target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:underline'>GitHub</a>
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:underline'>Live Site</a>
                </div>
              </div>
            </div>
          </div>
        )
      }


    </section>
  )
}

export default Project
