import React from 'react'
import Footer from '../components/Footer'
import '../assets/CSS/home.css';
import video from '../assets/images/video.mp4'
import piggy from '../assets/images/piggy.gif'
import arrow_down from '../assets/images/arrow_down.gif'
import vector from '../assets/images/vector.png'
import Topbar1 from '../components/Topbar1';
const Home = () => {
  return (
    <div>
     <Topbar1/>
     <video autoPlay muted loop id='aboutme'>
      <source src={video} type='video/mp4' />
      </video>
      <div className='about-content' id='aboutme'>
      <h1 style={{textAlign:"center"}}>Take Control of Your Expenses</h1>
      <br/>
      <p>Effortlessly Manage, Track, and Optimize Your Finances with Our Powerful Expense Tracker. Start Saving and Achieving Your Financial Goals Today!</p>
      <h2>Get Started now</h2>
      <img src={arrow_down} style={{width:"7%"}}/>
      <br/>
      <div className='buttons'>
        <button className='btn1'>SIGN UP</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn1'>LOG IN</button>
     </div>
     <div className='vector1'>
      <img src={vector} />
      </div>
      </div>
      
      <div className="features">
     <h3> key features of finmate </h3>
      </div>
     
     
          
    <Footer/>

    </div>
  )
}

export default Home
