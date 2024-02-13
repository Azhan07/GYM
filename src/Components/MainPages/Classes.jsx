import Wrapper from '@/Shared/Wrapper'
import React from 'react'
import Image from 'next/image'
import cardimg from '@/Images/class-4.jpg.webp'
const Classes = () => {
    const data = [
        {
            id:1,
            img: cardimg,
            title:"STRENGTH",
            title2:"WEIGHTLIFTING"
        },
        {
            id:2,
            img: cardimg,
            title:"CARDIO",
            title2:"INDOOR CYCLING"
        },
        {
            id:3,
            img: cardimg,
            title:"STRENGTH",
            title2:"KETTLEBELL POWER"
        },
        {
            id:4,
            img: cardimg,
            title:"CARDIO",
            title2:"INDOOR CYCLING"
        },
        {
            id:5,
            img: cardimg,
            title:"TRAINING",
            title2:"BOXING"
        },
        {
            id:6,
            img: cardimg,
            title:"TRAINING",
            title2:"BOXING"
        },
    ]
  return (
    <section className='bg-[#151515] pt-[10%] pb-[10%]'>
        <Wrapper>
        <div className='text-center'>
            <h4 className='text-orange-500 mb-4 text-[22px]'>Our Classes</h4>
            <h2 className='font-bold text-[32px] mb-10'>WHAT WE CAN OFFER</h2>
        </div>
        <div className='grid grid-cols-3 gap-x-4'>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id} className='mb-5'>
                            <div className='overflow-hidden'>
                            <Image src={item.img} alt=''/>

                        </div>
                        <div className='bg-[#0a0a0a] p-7'>
                        <h4 className='mb-4 font-bold text-orange-500'>{item.title}</h4>
                        <h1 className='font-bold text-[22px]'> {item.title2}</h1>
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

export default Classes