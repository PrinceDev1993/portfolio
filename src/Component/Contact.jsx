import React, { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [sentMessage, setSentMessage] = useState("")
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_pjk1d1r', 'template_5cy84wf', form.current, {
            publicKey: 'rJIwc6lncnr9d0HDg',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setSentMessage("Email sent successfully!")
            },
            (error) => {
              console.log('FAILED...', error.text);
              setSentMessage("Email failed!")
            },
          );
          e.target.reset()
      };

  return (
    <div name="Contact" className='w-full py-28 bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Please submit the form below to get in touch  with me.</p>
            </div>

            <div className='flex justify-center items-center'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="user_name" id="" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type="text" name="user_email" id="" placeholder='Enter your email address' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name="user_message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Please enter your message'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300 my-5'>Send message</button>

                    <p className ="text-center my-3 text-2xl">Phone Number : +234-703-721-4108</p>

                    <p className='text-2xl text-center text-green-600'>{sentMessage}</p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact