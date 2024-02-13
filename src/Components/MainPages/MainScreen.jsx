import React from 'react'
import mainimg from '@/Images/hero-1.jpg.webp'
import Button from '@/Shared/Button'


const MainScreen = () => {
  return (
    <section className='pt-[5%] pb-[5%] h-[100vh] relative' style={{ backgroundImage: `url(${mainimg.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className='text-white absolute right-32 top-36'>
      <h4 className='text-[28px] font-bold mb-5'>SHAPE YOUR BODY</h4>
      <h1 className='text-[68px] font-bold'>BE <span className='text-orange-500'>STRONG</span><br/> TRAINING HARD</h1>
      <Button text={"Get Info"}/>
      </div>
    </section>
  )
}

export default MainScreen