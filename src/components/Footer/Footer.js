import React from 'react'

import { FaArrowCircleUp, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='bg-[#0a193d] text-gray-100 py-10 px-4 md:px-0'  >
     <div className="container relative mx-auto">
     <div className="flex flex-col flex-wrap justify-between gap-10 md:gap-0 md:flex-row">
          <div>
            <img src={Logo} alt="logo" className='object-cover w-16' />
          </div>
          <div className='flex gap-10'>
                <div className='flex flex-col gap-5'>
                <NavLink to='/home'  className='text-lg font-semibold uppercase'>হোম</NavLink>
                <NavLink to='/'  className='text-lg font-semibold uppercase'>এইচটিএমএল</NavLink>
                <NavLink to='/'  className='text-lg font-semibold uppercase'>সিএসএস</NavLink>
                </div>
                <div className='flex flex-col gap-5'>
                <NavLink to='/'  className='text-lg font-semibold uppercase'>জাভাস্ক্রিপ্ট</NavLink>
                <NavLink to='/'  className='text-lg font-semibold uppercase'>প্রজেক্টস</NavLink>
               </div>
          </div>
          <div>
            <p className='text-lg'>এই ওয়েব সাইট এর সমস্ত ডকুমেন্টস খুব সহজ ও সাধারণ ভাবে তৈরি করা হয়েছে । <br /> কোনো ভুলত্রুটি থাকলে পরিহার করুন।  কোনো পরামর্শ দিতে চাইলে মেইল করুন</p>
            <input className='px-3 py-3 mt-10 text-[#0a192f]  outline-none rounded-l-md w-80' type="text" placeholder='মেইল করুন' /><a href="mailto:forhadhossain0619@gmail.com"><button className='px-2 py-3 bg-green-600 rounded-r-md'>Send Message</button></a>
          </div>
      </div>
      <div className="flex flex-col-reverse flex-wrap justify-between gap-10 mt-16 md:flex-row">
        <p className='text-lg '>Copyright 2022 Forhad, All Rights Reserved</p>
        <div className='flex gap-5'>
          <div>
            <FaFacebook size={30} className='duration-300 cursor-pointer hover:scale-150'/>
          </div>
          <div>
            <FaInstagram size={30} className='duration-300 cursor-pointer hover:scale-150'/>
          </div>
          <div>
            <FaTwitter size={30} className='duration-300 cursor-pointer hover:scale-150'/>
          </div>
          <div>
            <FaGithub  size={30} className='duration-300 cursor-pointer hover:scale-150'/>
          </div>
        </div>
      </div>
     <a href="#" className='absolute right-0 bottom-16'> <div className='p-3 bg-[#2450b6] rounded w-fit'>
        <FaArrowCircleUp size={30}/>
      </div></a>
     </div>
    </div>
  )
}

export default Footer
