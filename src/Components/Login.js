import React from 'react'

export default function Login() {
    return (
        <div>
           
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
        
    )
}
