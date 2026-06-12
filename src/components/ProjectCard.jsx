import React from 'react'

const ProjectCard = ({title, description, image, tech, demo, code}) => {
  return (
    <div className='bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-purple-600'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm'>{item}</span>
          ))}
        </div>
        <div className='flex gap-2'>
          <a href={demo} target="_blank" rel="noopener noreferrer" className='flex-1 text-center px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700'>View Demo</a>
          <a href={code} target="_blank" rel="noopener noreferrer" className='flex-1 text-center px-4 py-2 border border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-100 transition duration-300'>Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard