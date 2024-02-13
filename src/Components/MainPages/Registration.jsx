import Wrapper from '@/Shared/Wrapper'
import React from 'react'
import Backimg from '@/Images/gallery-6.jpg.webp'
import Button from '@/Shared/Button'
const Registration = () => {
  return (
    <section className='pt-[10%] pb-[10%] opacity-[1]' style={{ backgroundImage: `url(${Backimg.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', backgroundSize: 'cover' }}>
        <Wrapper>
        <div className='text-center m-auto'>
            <h1 className='text-[45px] font-bold'>REGISTRATION NOW TO GET MORE DEALS</h1>
            <p className='text-gray-300 mt-4 mb-7 text-[22px]'>WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
            
        </div>
        </Wrapper>
    </section>
  )
}

export default Registration