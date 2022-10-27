import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
const Navbar = () => {
  const [navbar,setNavbar] = useState(false)
  return (
    <header className='bg-[#222] text-gray-100 py-4'>
      <div className="container px-4 mx-auto md:px-0">
        <nav className='flex items-center justify-between'>
            <div className="logo">
               <NavLink to='/'> <img src={Logo} alt="logo" className='object-contain w-16' /></NavLink>
            </div>
            <div className="hidden gap-5 md:flex">
                <NavLink to='/home'  className='text-lg font-semibold uppercase'>হোম</NavLink>
                <NavLink to='/html'  className='text-lg font-semibold uppercase'>এইচটিএমএল</NavLink>
                <NavLink to='/css'  className='text-lg font-semibold uppercase'>সিএসএস</NavLink>
                <NavLink to='/javascript'  className='text-lg font-semibold uppercase'>জাভাস্ক্রিপ্ট</NavLink>
                <NavLink to='/projects'  className='text-lg font-semibold uppercase'>প্রজেক্টস</NavLink>
               
            </div>
            <div className='cursor-pointer md:hidden' onClick={()=>{setNavbar(!navbar)}}>
              {navbar ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
           {navbar &&  <div className= 'absolute z-10 flex flex-col w-full bg-[#222] left-0 top-20 gap-10 h-screen justify-center items-center 5 md:hidden'>
                <NavLink to='/home'onClick={()=>setNavbar()}  className='py-3 text-lg font-semibold uppercase'>হোম</NavLink>
                <NavLink to='/html' onClick={()=>setNavbar()}  className='py-3 text-lg font-semibold uppercase'>এইচটিএমএল</NavLink>
                <NavLink to='/css'  onClick={()=>setNavbar()} className='py-3 text-lg font-semibold uppercase'>সিএসএস</NavLink>
                <NavLink to='/javascript'  onClick={()=>setNavbar()} className='py-3 text-lg font-semibold uppercase'>জাভাস্ক্রিপ্ট</NavLink>
                <NavLink to='/'  onClick={()=>setNavbar()} className='py-3 text-lg font-semibold uppercase'>প্রজেক্টস</NavLink>
               
            </div>}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
