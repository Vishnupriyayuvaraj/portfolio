import React from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin 
} from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-white'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 text-gray-900'>
          Get In <span className='text-purple-600'>Touch</span>
        </h2>

        <p className='text-gray-600 text-center max-w-2xl mx-auto mb-16'>
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

          {/* Contact Form */}
          <div>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-gray-800 mb-2'>Your Name</label>
                <input id='name' type='text' className='w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg px-4 py-3 outline-none' />
              </div>

              <div>
                <label htmlFor='email' className='block text-gray-800 mb-2'>Email Address</label>
                <input id='email' type='email' className='w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg px-4 py-3 outline-none' />
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-800 mb-2'>Your Message</label>
                <textarea id='message' className='w-full h-40 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg px-4 py-3 outline-none resize-none'></textarea>
              </div>

              <button type='submit' className='w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='text-purple-600 text-2xl mr-4'><FaMapMarkerAlt /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2 text-gray-900'>Location</h3>
                <p className='text-gray-600'>Rasipuram, Tamil Nadu, India</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple-600 text-2xl mr-4'><FaEnvelope /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2 text-gray-900'>Email</h3>
                <p className='text-gray-600'>priyash70107@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple-600 text-2xl mr-4'><FaPhone /></div>
              <div>
                <h3 className='text-lg font-semibold mb-2 text-gray-900'>Phone</h3>
                <p className='text-gray-600'>+91 7010788869</p>
              </div>
            </div>

            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-4 text-gray-900'>Follow Me</h3>
              <div className='flex space-x-4'>
                <a href="https://github.com/Vishnupriyayuvaraj" target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-purple-600 text-xl hover:bg-purple-600 hover:text-white transition-all duration-300'>
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/vishnu-priya-839647360" target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-purple-600 text-xl hover:bg-purple-600 hover:text-white transition-all duration-300'>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Contact