import React from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
   <motion.div
   initial={{opacity:0, y:50}}
   whileInView={{opacity:1, y:0}}
   transition={{duration: 0.6, ease:'easeOut'}}
   viewport={{once: true}}
   id='home'
   className='min-h-screen flex items-center pt-20 pb-16 bg-white'
   >
       <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        {/* left side content */}
           <div className='md:w-1/2 mb-10 md:mb-0'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gray-900'>
  Hi, I'm <span className='text-[#8B5CF6]'>Vishnu Priya</span>
</h1>

<h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter text-gray-700'>
  Full Stack Developer
</h2>
                <p className='text-lg text-gray-700 mb-8'>I create stunning web experiences with modern technologies and innovative design.</p>
                <div className='flex space-x-4'>
                  <a href="#projects" style={{backgroundColor:'#7C3AED', color:'white', border:'none'}} className='px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300'>View Work</a>
                  <a href="#contact" style={{border:'2px solid #7C3AED', color:'#7C3AED'}} className='px-6 py-3 rounded-lg font-medium hover:bg-purple/20 transition'>Contact Me</a>
                </div>
           </div>
           {/* right side image */}
           <div className='md:w-1/2 flex justify-center' >
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
         <div className='basolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70'>
          <motion.img 
          animate={{y:[0, -20, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className='relative rounded-full w-64 h-64 md:w-85 md:h-85 object-cover z-10'
          src={assets.profileImg} alt="Profile" />

         </div>
          </div>
           </div>
       </div>
  </motion.div>
  )
}

export default Hero