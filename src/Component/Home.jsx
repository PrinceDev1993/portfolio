import React from 'react'
import heroImg from '../assets/4bb.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-white text-4xl font-bold sm:text-7xl'>I'm a Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>The developer you can trust to deliver on the job at any time.clear</p>

                <div className='flex justify-between'>
                    <Link to="Portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>

                    <button className=''>
                        <a href="https://github.com/PrinceDev1993" className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            GitHub Page 
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </a>
                    </button>
                </div>

                <div className='flex justify-between'>
                    <button className='lg:hidden'>
                        <a href="https://www.linkedin.com/in/princewillonyebuchi/" className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            LinkedIn 
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </a>
                    </button>

                    <button className='lg:hidden'>
                        <a href="./assets/PRINCEWILL CV.docx" download="./assets/PRINCEWILL CV.docx" target='_blank'
                        rel='noreferrer' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Download CV 
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </a>
                    </button>
                </div>
            </div>

            <div>
                <img src={heroImg} alt="" className='rounded-2xl mx-auto w-2/3 md:w-2/3 sm:mt-12 mt-0 ' />
            </div>
        </div>
    </div>
  )
}

export default Home