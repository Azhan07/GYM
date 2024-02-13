import Wrapper from '@/Shared/Wrapper'
import React from 'react'
import { CgGym } from "react-icons/cg";
import { GiFruitBowl } from "react-icons/gi";
import { IoMdBicycle } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
const About = () => {
    const data = [
        {
            id:1,
            title:"Modern equipment",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
            icon:IoMdBicycle,
        },
        {
            id:2,
            title:"Healthy nutrition plan",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
            icon:GiFruitBowl,
        },
        {
            id:3,
            title:"Proffesponal training plan",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
            icon: CgGym,
        },
        {
            id:4,
            title:"Unique to your needs",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
            icon:FaHeartbeat,
        },
    ]
  return (
    <section className='pt-[10%] pb-[10%]'>
        <Wrapper>
            <div className='text-center'>
                <h4 className='text-orange-600 font-bold text-[22px] mb-4'>WHY CHOSE US?</h4>
                <h1 className='font-bold text-[35px]'>PUSH YOUR LIMITS FORWARD</h1>
            </div>
            <div className='grid grid-cols-4 mt-10 gap-x-4'>
                {
                    data.map((item)=>{
                        return(
                            <div key={item.id} className='text-center'>
                                <div className='w-[100px] h-[100px] rounded-[50%]  bg-slate-800 pt-[25px] m-auto' >
                                    <item.icon className=' text-orange-600 m-auto text-[45px] '/>
                                </div>
                                <h1 className='mb-5 mt-4 text-[24px] font-bold'>{item.title}</h1>
                                <p className='text-[16px]'>{item.para}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    </section>
  )
}

export default About