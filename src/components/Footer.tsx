import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#3f2068] to-black text-white/70 py-8 max-w-[2000px] mx-auto border-t border-gray-700
    flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Nimra Talha</h1>
        <div className='flex space-x-6 mt-4'>
            <a href='https://www.linkedin.com/feed/' className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
            </a>
            <a href='https://www.facebook.com/' className='hover:text-gray-300'>
                <FaFacebook size={24}/>
            </a>
            <a href='#' className='hover:text-gray-300'>
                <FaInstagram size={24}/>
            </a>
        </div>
    </div>
  );
}

export default Footer;
