import React from 'react'
import p2 from "../assets/p2.jpg"
import p1 from "../assets/p1.webp"
import p3 from "../assets/p3.jpeg"
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"
import proj3 from "../assets/proj3.png"
import proj4 from "../assets/proj4.png"
import proj5 from "../assets/proj5.png"
import proj6 from "../assets/proj6.png"
import proj7 from "../assets/proj7.png"


const Portfolio = () => {

    const portfolioImages = [
        {
            id:1,
            src:proj1,
            href:"https://signup-login2.netlify.app/",
            gitRep: "https://github.com/PrinceDev1993/signup_login"
        },

        {
            id:2,
            src:proj2,
            href:"https://princedev1993.github.io/scientific-calculator/",
            gitRep: "https://github.com/PrinceDev1993/scientific-calculator"
        },
        {
            id:3,
            src:proj3,
            href:"https://my-react-weather-app1.netlify.app/",
            gitRep: "https://github.com/PrinceDev1993/reactWeatherApp?tab=readme-ov-file"
        },
        {
            id:4,
            src:proj4,
            href:"https://princedev1993.github.io/pagination/",
            gitRep: "https://github.com/PrinceDev1993/pagination/tree/gh-pages"
        },

        {
            id:5,
            src:proj5,
            href:"https://oroma-edibles.netlify.app/",
            gitRep: "https://github.com/PrinceDev1993/oroma-edibles?tab=readme-ov-file"
        },
        {
            id:6,
            src:proj6,
            href:"https://deprinx-installations.netlify.app/",
            gitRep: "https://github.com/PrinceDev1993/Deprinx_Installations"
        },
        {
            id:7,
            src:proj7,
            href:"https://theadorablewoman.netlify.app/",
            gitRep: "https://github.com/PrinceDev1993/ADORABLE__WOMAN"
        },
    ]

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white py-28'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolioImages.map(({id, src, href, gitRep}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex justify-center items-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                <a href={href} target='_blank'>Demo</a>
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                <a href={gitRep} target='_blank'>Code</a>
                            </button>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    </div>
  )
}

export default Portfolio