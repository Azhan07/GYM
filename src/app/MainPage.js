import About from '@/Components/MainPages/About'
import Classes from '@/Components/MainPages/Classes'
import MainScreen from '@/Components/MainPages/MainScreen'
import Plan from '@/Components/MainPages/Plan'
import Registration from '@/Components/MainPages/Registration'
import Team from '@/Components/MainPages/Team'
import React from 'react'

const MainPage = () => {
  return (
   <>
   <MainScreen/>
   <About/>
   <Classes/>
   <Registration/>
   <Plan/>
   <Team/>
   </>
  )
}

export default MainPage