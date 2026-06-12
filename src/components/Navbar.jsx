import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-white/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>

        {/* Logo */}
        <div>
          <a href="#home" className='text-3xl font-bold text-gray-600'>
            Vishnu
            <span className='text-purple'>Priya</span>
            <div className='w-4 h-4 bg-purple rounded-full'></div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-10'>
          <a href="#home" className='relative text-gray-900/80 transition duration-300 hover:text-purple group'>
            <span>Home</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href="#about" className='relative text-gray-900/80 transition duration-300 hover:text-purple group'>
            <span>About</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href="#skills" className='relative text-gray-900/80 transition duration-300 hover:text-purple group'>
            <span>Skills</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href="#projects" className='relative text-gray-900/80 transition duration-300 hover:text-purple group'>
            <span>Projects</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href="#experience" className='relative text-gray-900/80 transition duration-300 hover:text-purple group'>
            <span>Experience</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href="#contact" className='relative text-gray-900/80 transition duration-300 hover:text-purple group'>
            <span>Contact</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>

        {/* Mobile Button */}
        <div className='md:hidden'>
          {showMenu ?
            <FaXmark onClick={() => setShowMenu(false)} className='text-2xl cursor-pointer text-gray-900' /> :
            <FaBars onClick={() => setShowMenu(true)} className='text-2xl cursor-pointer text-gray-900' />
          }
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
          <a onClick={() => setShowMenu(false)} href="#home" className='text-gray-900/80 transition duration-300 hover:text-purple'>Home</a>
          <a onClick={() => setShowMenu(false)} href="#about" className='text-gray-900/80 transition duration-300 hover:text-purple'>About</a>
          <a onClick={() => setShowMenu(false)} href="#skills" className='text-gray-900/80 transition duration-300 hover:text-purple'>Skills</a>
          <a onClick={() => setShowMenu(false)} href="#projects" className='text-gray-900/80 transition duration-300 hover:text-purple'>Projects</a>
          <a onClick={() => setShowMenu(false)} href="#experience" className='text-gray-900/80 transition duration-300 hover:text-purple'>Experience</a>
          <a onClick={() => setShowMenu(false)} href="#contact" className='text-gray-900/80 transition duration-300 hover:text-purple'>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar