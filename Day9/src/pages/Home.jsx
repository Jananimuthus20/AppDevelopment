import React from 'react'
import Footer from '../components/Footer'
import '../assets/CSS/home.css';
import video from '../assets/images/video.mp4'
import arrow_down from '../assets/images/arrow_down.gif'
import vector from '../assets/images/vector.png'
import Topbar1 from '../components/Topbar1';
import f1 from '../assets/images/f1.png'
import f2 from '../assets/images/f2.png'
import f4 from '../assets/images/f4.png'
import { useNavigate } from 'react-router-dom'
import i1 from '../assets/images/i1.jpeg'
import i2 from '../assets/images/i2.png'
import i3 from '../assets/images/i3.jpeg'
import i4 from '../assets/images/i4.jpeg'
import logo2 from '../assets/images/logo2.png'
import d1 from '../assets/images/d1.jpeg'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.jpeg'



const Home = () => {
  const nav=useNavigate()
  const loginpage=()=>{
    nav('/login')
  }
  const signuppage=()=>{
    nav('/register')
  }
  return (
    <div>
     <Topbar1/>
     <video autoPlay muted loop id='aboutme'>
      <source src={video} type='video/mp4' />
      </video>
      <div className='about-content' id='aboutme'>
      <h1 style={{textAlign:"center"}}>Take Control of Your Expenses</h1>
      <br/>
      <p style={{color:"white"}}>Effortlessly Manage, Track, and Optimize Your Finances with Our Powerful Expense Tracker. Start Saving and Achieving Your Financial Goals Today!</p>
      <h2>Get Started now</h2>
      <img src={arrow_down} style={{width:"7%"}}/>
      <br/>
      <div className='buttons'>
        <button className='btn1' onClick={signuppage}>SIGN UP</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn1' onClick={loginpage}>LOG IN</button>
     </div>
     <div className='vector1'>
      <img src={vector} />
      </div>
      </div>    
      <div className="features">
        <br/>
     <h3><b>How finmate works</b></h3> 
     <div className="container-xl">
      <h5 style={{marginLeft:"30%"}}><b>Budgetting that works</b> <br/><br/>Transform Your Money Management with
      Budgeting That Never Misses a Beat</h5>
      <img src={f1} style={{width:"220px",marginLeft:"30%"}}/>
      <h5 style={{marginLeft:"30%"}}><b>Track your expenses</b><br/><br/>Empower Your Finances, Unleash Control
      Start Tracking Your Expenses for a Brighter Tomorrow</h5>
      <img src={f2} style={{width:"220px",marginLeft:"30%"}}/>
      <h5 style={{marginLeft:"30%"}}><b>Save for big expenses</b><br/><br/>Transform Big Dreams into Reality:
      Supercharge Your Savings for the Extraordinary</h5>
      <img src={f4} style={{width:"220px",marginLeft:"30%"}}/>
     </div>
     <br/>

  <section class="related-apps">
    <div class="content-wrap bottom-animated animated middle-animated">
      <h2>KEY FEATURES</h2>
      <div class="related-apps-cnt">
        <div class="flex-content">

          <div class="flex-part-five">
            <div class="related-apps-card">
              <a style={{height: "168px",color:"black"}}>
                <div class="related-apps-icon">
                  <img src={i1} alt=""/>
                </div>
                  <p>Enhanced Income Management</p>
              </a>
            </div>
          </div>
                  <div class="flex-part-five">
                    <div class="related-apps-card">
                      <a style={{height: "168px",color:"black"}}>
                        <div class="related-apps-icon">
                        <img src={i2} alt=""/>
                        </div>
                          <p>Custom Expense Management</p>
                      </a>
                    </div>
                  </div>

                          <div class="flex-part-five">
                            <div class="related-apps-card">
                              <a style={{height: "168px",color:"black"}}>
                                <div class="related-apps-icon">
                                <img src={i3} alt=""/>
                                </div>
                                  <p>Budgetting with <br/>Categories</p>
                              </a>
                            </div>
                          </div>

                                  <div class="flex-part-five">
                                    <div class="related-apps-card">
                                      <a style={{height: "168px",color:"black"}}>
                                        <div class="related-apps-icon">
                                        <img src={i4} alt=""/>
                                        </div>
                                        <p>Recording Financial<br/> status</p>
                                      </a>
                                    </div>
                                  </div>
      </div>
    </div>
    </div>
    <br/><br/>

<div id='contact'>
    <img src={logo2} style={{width:"13%"}}/>
    <br/><br/>
    <h2 > Contact Us</h2>
    <p >
        If you have any questions or concerns regarding these Terms and Conditions, please contact us at team@finmate.com. We are here to assist you and address any inquiries you may have.
      </p>

    <br/><br/>
    <a href="mailto:team@finmate.org" style={{textDecoration:"none",color:"black"}}>
    <img src={d1} style={{width:"3%", paddingRight:"1rem"}}/>
    team@finmate.org</a>
      <br/><br/>

      <a href="https://www.facebook.com/"><img src={facebook} style={{marginLeft:"2%",width:"4%", paddingRight:"1rem"}}/></a>
      <a href="https://www.instagram.com/"><img src={instagram} style={{width:"4%", paddingRight:"1rem"}}/></a>
      <a href="https://twitter.com/"><img src={twitter} style={{width:"4%", paddingRight:"1rem"}}/></a>
      <a href="https://www.youtube.com/"><img src={youtube} style={{width:"4%", paddingRight:"1rem"}}/></a>
      </div>

    <br/><br/><br/>  
   
   
       
   
   
   </section>


      </div>
    <Footer/>

    </div>
  )
}

export default Home
