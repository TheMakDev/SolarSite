import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonial/Testimonial'
import Content from './Component/Content/Content'
import Footer from './Component/Footer/Footer'
import Videoplayer from './Component/Videoplayer/Videoplayer'


const App = () => {

  const [playState, setPlayState] = useState(false)
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle ="Our Solar Solutions" title="What We Offer"/>
          <Programs/>
          <About setPlayState={setPlayState}/>
          <Title subTitle="Our Impact" title="Real-World Impact of Solar Technology"/>
          <Campus/>
          <Title subTitle="TESTIMONIAL" title="What Client Says"/>
          <Testimonial/>
          <Title subTitle="Contact Us" title="Get in Touch"/>
          <Content/>
          <Footer/>
        </div>
        <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App