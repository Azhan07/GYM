import Wrapper from '@/Shared/Wrapper'
import React from 'react'
import Logo from '@/Images/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
const Footet = () => {
    const data = [
        
        {id:1, title: "Home", path: "/"},
        {id:2, title: "About Us", path: "/"},
        {id:3, title: "Classes", path: "/"},
        {id:4, title: "Services", path: "/"},
        {id:5, title: "Our Team", path: "/"},
        
        {id:6, title: "Contact", path: "/"},
    
]
const data2 = [
        
    {id:1, title: "Login", path: "/"},
    {id:2, title: "My Account", path: "/"},
    {id:3, title: "Subscribe", path: "/"},
    {id:4, title: "Contact", path: "/"},
    
]
  return (
    <section className='pt-[10%] pb-[10%] '>
        <Wrapper>
            <div className='grid grid-cols-4 gap-x-4'>
                <div>
                <Image src={Logo} alt='' className='mb-5'/>
                <p className='text-[18px] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis omnis nihil nam architecto ipsa ut, maiores dignissimos numquam pariatur.</p>
                </div>
                <div>
                    <h1 className='text-[30px] font-bold mb-5'>Useful Link</h1>
                {
                data.map((item)=>{
                    return(
                        <ul key={item.id} className='flex  text-white '>
                        <Link href={item.path}>
                          <li className='hover:line-through hover:text-orange-500 mb-5 text-lg' key={item.id}>{item.title}</li>
                        </Link>
                      </ul>
                    )
                })
            }
                </div>
                <div>
                    <h1 className='text-[30px] font-bold mb-5'>Support</h1>
                {
                data2.map((item)=>{
                    return(
                        <ul key={item.id} className='flex mx-6 text-white my-auto'>
                        <Link href={item.path}>
                          <li className='hover:line-through hover:text-orange-500 mb-5 text-lg' key={item.id}>{item.title}</li>
                        </Link>
                      </ul>
                    )
                })
            }
                </div>
                <div>
                    <h1 className='text-[30px] font-bold mb-5'>Tips And GuideLine</h1>
                    <p className='text-[17px] mb-4'>Physical fitness may help prevent depression, anxiety</p>
                    <p className='text-[17px] mb-4'>Physical fitness may help prevent depression, anxiety</p>
                </div>
            </div>

            <div className='h-1 w-full bg-slate-600 mt-[100px]'></div>
            <p className='text-center mt-6 text-[20px]'>Copyright ©2024 All rights reserved</p>
        </Wrapper>
    </section>
  )
}

export default Footet