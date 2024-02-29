import React from 'react'
import p2 from "../assets/p2.jpg"
import p1 from "../assets/p1.webp"
import p3 from "../assets/p3.jpeg"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import p4 from "../assets/p4.webp"
import js from "../assets/JS.png"
import frbs from "../assets/frbs.png"
import gitp from "../assets/gitp.png"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: p4,
            title : "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: p5,
            title : "CSS",
            style: "shadow-blue-600"
        },
        {
            id: 3,
            src: js,
            title : "JS",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: p6,
            title : "REACTJS",
            style: "shadow-cyan-300"
        },
        {
            id: 5,
            src: frbs,
            title : "FIREBASE",
            style: "shadow-yellow-600"
        },
        {
            id: 6,
            src: gitp,
            title : "GITHUB",
            style: "shadow-gray-500"
        }
    ]

  return (
    <div name="Experience" className='bg-gradient-to-b from-gray-500 to-black w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with it.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {techs.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}> 
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
                {/* <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'> 
                    <img src={p5} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Experience