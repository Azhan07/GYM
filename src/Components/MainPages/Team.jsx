import Button from '@/Shared/Button'
import Wrapper from '@/Shared/Wrapper'
import React from 'react'
import tainerimg from '@/Images/team-2.jpg.webp'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
const Team = () => {
    const data = [
        {
            id:1,
            title:"Athart Rachel",
            para:"Gym Trainer",
            img: tainerimg,
        },
        {
            id:2,
            title:"Athart Rachel",
            para:"Gym Trainer",
            img: tainerimg,
        },
        {
            id:3,
            title:"Athart Rachel",
            para:"Gym Trainer",
            img: tainerimg,
        },
       
    ]
  return (
    <section className='pt-[10%] pb-[10%]'>
        <Wrapper>
            <div className='grid grid-cols-2'>
                <div>
                    <h4 className='text-[18px] font-bold text-orange-600'>Our Team</h4>
                    <h1 className='font-bold text-[32px]'>TRAIN WITH EXPERTS</h1>
                </div>
             <div className='w-[50%] ml-auto'>
             <Button text={"Appointment"} />
             </div>
            </div>
           <div className='grid grid-cols-3 mt-12'>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id}>
                          <div className=' h-fit group cursor-pointer'>
                          <div className='overflow-hidden relative'>
                            <Image src={item.img} alt=''/>
                            <div className='absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                <div className='bg-black w-full p-5'>
                                    <h1 className='text-[28px] font-bold mb-4'>{item.title}</h1>
                                    <p className='text-[17px]'>{item.para}</p>
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                    )
                })
            }
           </div>
        </Wrapper>
    </section>
  )
}

export default Team