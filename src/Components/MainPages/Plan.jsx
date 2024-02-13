import Button from '@/Shared/Button'
import Wrapper from '@/Shared/Wrapper'
import React from 'react'

const Plan = () => {
    const data = [
        {
            id:1,
            title:"Class drop-in",
            price:"$ 39.0",
            para:"SINGLE CLASS",
            list : [
                {
                    one:"Free riding"
                },
                {
                    one:"Unlimited equipments"
                },
                {
                    one:"Personal trainer"
                },
                {
                    one:"Weight losing classes"
                },
                {
                    one:"Month to mouth"
                },
                {
                    one:"No time restriction"
                },
            ]
        },
        {
            id:2,
            title:"12 Month unlimited",
            price:"$ 99.0",
            para:"SINGLE CLASS",
            list : [
                {
                    one:"Free riding"
                },
                {
                    one:"Unlimited equipments"
                },
                {
                    one:"Personal trainer"
                },
                {
                    one:"Weight losing classes"
                },
                {
                    one:"Month to mouth"
                },
                {
                    one:"No time restriction"
                },
            ]
        },
        {
            id:3,
            title:"6 Month unlimited",
            price:"$ 59.0",
            para:"SINGLE CLASS",
            list : [
                {
                    one:"Free riding"
                },
                {
                    one:"Unlimited equipments"
                },
                {
                    one:"Personal trainer"
                },
                {
                    one:"Weight losing classes"
                },
                {
                    one:"Month to mouth"
                },
                {
                    one:"No time restriction"
                },
            ]
        },
    ]
  return (
    <section className='pt-[10%] pb-[10%]'>
        <Wrapper>
        <div className='text-center'>
            <h4 className='text-orange-500 font-bold text-[20px]'>OUR PLAN</h4>
            <h1 className='text-[36px] font-bold mb-6'>CHOOSE YOUR PRICING PLAN</h1>
        </div>
        <div className='grid grid-cols-3 gap-x-4'>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id} className='border p-7 rounded-tl-2xl rounded-br-2xl text-white hover:text-black  hover:bg-slate-700 border-[#c4c4c4] text-center'>
                            <h1 className='font-bold text-[28px]'>{item.title}</h1>
                            <h2 className='text-orange-600 font-bold text-[50px]'>{item.price}</h2>
                            <p className='text-[22px] font-bold text-[#c4c4c4]'>{item.para}</p>
                            <ul>
                            {item.list.map((listItem, index) => (
                                    <li className='mt-7 mb-5 text-[17px]' key={index}>{listItem.one}</li>
                                ))}
                            </ul>
                            <Button text={"Enroll Now"}/>
                        </div>
                    )
                })
            }
        </div>
        </Wrapper>
    </section>
  )
}

export default Plan