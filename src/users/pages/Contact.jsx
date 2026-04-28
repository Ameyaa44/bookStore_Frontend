import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


function Contact() {
  return (
    <>
    <Header/>
    <div className='min-h-[60vh] px-5 py-10 md:px-40'>
      <h1 className='text-4xl text-center'>Contact</h1>
      <p className='text-justify my-5'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores expedita deleniti debitis explicabo accusantium minus fuga vel. Fuga officiis rem expedita quam sequi natus optio, voluptas soluta quis obcaecati. Minus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, ab eveniet nulla in sapiente rem perspiciatis, quibusdam repellat qui tempora adipisci dolores sed corrupti consequatur aliquam nostrum placeat. Fugit, quisquam.
      </p>
      <div className='flex flex-col justify-center md:flex-row md:justify-around gap-5 mt-15'>
        {/* Address */}
        <div className='flex items-center gap-2'>
          <span className='p-4 bg-gray-200 inline-block rounded-full'>
            <FaLocationDot className='text-xl'/>
          </span>
          <span>
            128 Main Street, Apt 62,<br/>
            Anytown, CA 87045
          </span>
        </div>

        {/* Phone */}
        <div className='flex items-center gap-2'>
          <span className='p-4 bg-gray-200 inline-block rounded-full'>
            <FaPhoneAlt className='text-xl'/>
          </span>
          <span>
            +91 987654321
          </span>
        </div>

        {/* Email */}
        <div className='flex items-center gap-2'>
          <span className='p-4 bg-gray-200 inline-block rounded-full'>
            <FaEnvelope className='text-xl'/>
          </span>
          <span>
            bookstore@gmail.com
          </span>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-15 gap-5'>
        <div className='p-3 bg-gray-200'>
          <h1 className='text-center text-xl mt-2'>Sent Me Message</h1>
          <input type="text" className='w-full mt-5 bg-white rounded-sm py-2 px-2' placeholder='Name' />
          <input type="text" className='w-full mt-5 bg-white rounded-sm py-2 px-2' placeholder='Email ID' />
          <textarea name="" id="" className='w-full mt-5 bg-white rounded-sm py-2 px-2' rows={5} placeholder='Message'></textarea>
          <button className='bg-black text-white py-3 w-full flex justify-center items-center gap-2 mt-5'>Send<IoIosSend className='text-xl'/></button>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0329716078363!2d75.78374199999999!3d11.258984799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900d568d853%3A0x86dc9f15ee869de3!2sLuminar%20Technolab%20-%20Software%20Training%20Institute%20in%20Calicut!5e0!3m2!1sen!2sin!4v1771478148718!5m2!1sen!2sin" 
          width="100%" style={{minHeight:'426px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact