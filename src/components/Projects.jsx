import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='projects'
      className='py-20 bg-white'
    >
      <div className='container mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4 text-gray-900'>
          My <span className='text-purple-600'>Projects</span>
        </h2>

        <p className='text-gray-600 text-center max-w-2xl mx-auto mb-16'>
          A selection of my recent work
        </p>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {projects.map((project, index) =>(
            <ProjectCard key={index} {...project}/>
          
          ))
         }
        </div>
        
          
        
      </div>
    </motion.div>
  )
}

export default Projects