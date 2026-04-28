import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <>
    <div className='md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10'>
    <div>
      <h4 className='font-bold'>ABOUT US</h4>
      <p className='text-justify mt-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae saepe incidunt ex dolores rerum illum optio, expedita 
        accusamus autem perferendis velit adipisci, itaque aut distinctio deserunt quibusdam deleniti! Non, repudiandae!
      </p>
    </div>
    <div>
      <h4 className='font-bold'>NEWSLETTER</h4>
      <p className='my-5'>Stay updated with our latest trends</p>
      <div className='flex'>
        <input type="text" placeholder='Email ID' className='p-2 placeholder-gray-400 bg-white' />
        <button className='bg-orange-400 py-3 px-2'>
          <FaArrowRight />
        </button>
      </div>
    </div>
    <div>
      <h4 className='font-bold'>FOLLOW US</h4>
      <p className='my-5'>Let us be social</p>
      <div className="flex gap-2">
        <FaInstagram/>
        <FaXTwitter/>
        <FaFacebook/>
        <FaLinkedin/>
      </div>
    </div>
    </div>
    
    <div className='bg-black p-2 text-center text-white text-xs'>
      Copyright &copy; 2026 Allrights | This Website is made by Ameya
    </div>
   
    </>
  )
}

export default Footer