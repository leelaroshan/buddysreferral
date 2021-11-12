import React from 'react';
import './Login.css';




export default function Login({showmodal, setShowmodal, togglePopup }) {
    return (
        <div>
        <div className="popup-box">
            <div className="box">  
               <div className="layout"> 
                 <h1>contact us </h1>
                  <span className="close-icon" onClick={togglePopup}>x </span>
                 </div>
                
            <div className="loginform-container"> 
             <div class="mb-3"> 
              <label for="exampleFormControlInput1" 
             class="form-label">Name</label><br/>
             <input type="email" class="form-control" 
             placeholder="Your Name"
             id="exampleFormControlInput1" />
             </div>
        

        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email*</label><br/>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Adress"/>
        </div>

        <div class="mb-3">
       <label for="exampleFormControlTextarea1" class="form-label">Message*</label><br/>
       <textarea class="form-control" id="exampleFormControlTextarea1" 
       placeholder="Your message"
       rows="20"></textarea>
       </div>

        <button class="send-btn">Send Message</button>
        </div>

        </div> 
        
        </div>

        </div>
    )        
  }