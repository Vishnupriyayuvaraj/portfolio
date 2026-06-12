import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          id='experience'
          className='py-20 bg-white'
        >

          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4 text-gray-900'>Work
                <span className='text-purple-600'>Experience</span>
            </h2>
            <p className='text-gray-600 text-center max-w-2xl mx-auto mb-16'>My professional journey so far</p>

            <div className='max-w-3xl mx-auto'>
              <div className='space-y-12'>
              {
                workData.map((data, index)=>(
                 <div key={index} className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple-600 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                     {/* timeline dot */}
                     <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple-600'>

                     </div>

                     {/* box */}
                     <div className='bg-gray-100 border border-gray-200 rounded-2xl p-6'>
                      <div className='flex justify-between items-start mb-2'>
                        <h3 className='text-xl font-semibold text-gray-900'>{data.role}</h3>
                        <span className='px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs md:text-sm'>{data.duration}</span>

                      </div>
                      <p className='text-gray-600 mb-2'>{data.company}</p>
                      <p className='text-gray-800'>{data.description}</p>

                     </div>
                 </div>


                ))
              }
              </div>
            </div>
          </div>
    </motion.div>
  )
}

export default Work