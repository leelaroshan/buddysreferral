import React from 'react';
import './Employers.css';


// import bgimg from '../Components/images/office-bg-img.jpg';



// import Button from "@material-ui/core/Button"

// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// import { FormGroup } from '@material-ui/core';

// import {Checkbox } from "@material-ui/core";
// import { Checkbox } from '@material-ui/core/icons';




export default function Employers() {
    return (
        <div id="employers">
            <h3 className="for-employers">For companies</h3>
            <h1 className="employers-h1">Are you looking to hire right now?</h1>
            <div className="employers-bg-img">
                <h1 className="bg-heading">We help you hire best passive job seekers, 
                    vouched by top software engineers</h1>
              {/* <img src={bgimg} className="bg-img" alt="office image"></img> */}
            </div>
          <div className="form-container">
            <h4 className="contactus">contact us</h4>
          <h1 className="share">Share your hiring needs with us</h1> 

         <div class="mb-3"> 
         <label for="exampleFormControlInput1" 
         class="form-label">Name</label><br/>
        <input type="email" class="form-control" 
        id="exampleFormControlInput1" />
        </div>
        

       <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label><br/>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

       
        
        <div class="mb-3">
        <label for="exampleFormControlInput1" 
        class="form-label">Company Name</label><br/>
        <input type="email" class="form-control" 
        id="exampleFormControlInput1" />

        </div>
      
        <h3 className="middle-h3">what are you looking  for </h3>
        <div class="form-check">
         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault" style={{ paddingRight:"245px",paddingBottom:"50px"}}>
         Software Engineer
        </label><br />
        </div>
        
        <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
       <label class="form-check-label" for="flexCheckDefault" style={{ paddingRight:"254px",paddingBottom:"50px"}}>
         Product Manager
        </label>
        </div>
        

        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault" style={{ paddingRight:"278px",paddingBottom:"50px"}}>
         Data Scientist
        </label>
        </div>

        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Salary Range</label><br/>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="salary range/ budget for the role"/>
        </div>



        <div class="mb-3">
       <label for="exampleFormControlTextarea1" class="form-label">Additional Details</label><br />
       <textarea class="form-control" id="exampleFormControlTextarea1" 
       placeholder="Mention details like location, number of hires etc here"
       rows="20"></textarea>
       </div>

        <button class="btn-hover color-10">SUBMIT</button>



        

          </div>
            
        </div>
    )
}
