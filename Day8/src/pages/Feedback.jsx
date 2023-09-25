import React from 'react'
import '../assets/CSS/feedback.css'
import Topbar1 from '../components/Topbar1'
import Footer from '../components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import feed_icon from '../assets/images/feed_icon.gif'


const Feedback = () => {
  const notify = () => 
  {toast.success('Feedback added Successfully!')}
  return (
    <div className="feed">
      <br/>
      <div><Toaster/></div>
        <Topbar1/>
        <div className="feedback-form">
          <img src={feed_icon}style={{width:"20%",marginLeft:"37%"}}/>
        <h2>Feedback Form</h2>
        <form>
          <div className="form-group">
            <label >Name:</label>
            <input type="text" class="c1"
              id="name"
              name="name"
             />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email" class="c2"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label >Experience:</label>
            <textarea
              id="experience"
              name="experience"
              rows="5" // You can adjust the number of rows as needed
            />
          </div>
          <button type="submit" class="subb" onClick={notify}>Submit</button>
        </form>
      </div>
     <br/><br/><br/>
            <Footer/>
    </div>
  )
}

export default Feedback
