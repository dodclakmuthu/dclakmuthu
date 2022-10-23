import React from 'react'
import BackgroundAnimation from '../../BackgroundAnimation'
import Navbar from './Navbar'


function Home() {
  return (
    <div className='home-wrapper'>
      <BackgroundAnimation />
      <div className="content">
        <Navbar />
      </div>
    </div>
  )
}

export default Home
