import React from 'react'
import tubi from '/public/assets/tubis.avif'
import Whatsap from './WhatsappButton'
import Footer from './Footer2'
import IS_DEVELOPMENT from './context/config'
export const HomeScreen = () => {
  return (
    <div>HomeScreen
    <br/>
 
    <img src={tubi}/>
    <Whatsap></Whatsap>
    {IS_DEVELOPMENT && <Footer />}
    </div>
  )
}

export default HomeScreen