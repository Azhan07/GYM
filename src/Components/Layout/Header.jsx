"use client"
import Wrapper from '@/Shared/Wrapper'
import React, {useState} from 'react'
import Logo from '@/Images/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import {BiMenuAltLeft } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const data = [
        
        {id:1, title: "Home", path: "/"},
        {id:2, title: "About Us", path: "/"},
        {id:3, title: "Classes", path: "/"},
        {id:4, title: "Services", path: "/"},
        {id:5, title: "Our Team", path: "/"},
        
        {id:6, title: "Contact", path: "/"},
    
]
const[menuOpen , setMenuOpen] = useState(false);

const handleNav = () => {
  setMenuOpen(!menuOpen);
}
  return (
    
 <header className='bg-black w-full px-5 text-white z-10 shadow-2xl p-5'>
    <div className='flex justify-between items-center'>
        <div>
        <Image src={Logo} alt='logo'/>
        </div>
        <div className='hidden md:flex'>
            {
                data.map((item)=>{
                    return(
                        <ul key={item.id} className='flex mx-6 text-white my-auto'>
                        <Link href={item.path}>
                          <li className='hover:line-through hover:text-orange-500  text-lg' key={item.id}>{item.title}</li>
                        </Link>
                      </ul>
                    )
                })
            }
<div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <BiMenuAltLeft className='text-white' size={25}/>
            </div>
        </div>
    </div>
              {/* Mobile Responsive */}
              <div className={
            menuOpen
            ? "absolute top-0 left-0 w-full md:hidden h-screen bg-[#ecf0f3] p-10 ease-linear duration-700 z-10"
            : "absolute left-[-100%] top-0 p-10 ease-linear duration-700"
        } > 
         <div className='flex justify-end items-center w-full'>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <AiOutlineClose size={25} className='text-white'/>
            </div>
        </div>
        <div className='text-center'>
        {
                data.map((item)=>{
                    return(
                        <ul key={item.id} className='flex mx-6 text-white my-auto'>
                        <Link href={item.path}>
                          <li className='hover:line-through hover:text-orange-500  text-lg' key={item.id}>{item.title}</li>
                        </Link>
                      </ul>
                    )
                })
            }
           
        </div>
        </div>
 </header>
  )
}

export default Header