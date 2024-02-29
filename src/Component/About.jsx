import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 pt-48 md:pt-0}'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
        </div>
 
        <p className='text-xl mt-8 w-auto px-4'>Hello, I'm Princewill Onyebuchi, a creative educator and a front-end developer (programmer), and I'm passionate about education. I have been teaching for [6] years, and I'm excited to create a dynamic and engaging learning experience for my students. My teaching philosophy revolves around fostering a supportive and inclusive environment where every student can thrive. My expertise lies in coding [web development, data analytics, Python] and counselling [Relationship/marriage]. <br /><br /> I've had the privilege of teaching a wide range of students, from early years to grade level, and I've developed a deep understanding of their unique needs and learning styles.</p>
      </div>
    </div>
  )
}

export default About