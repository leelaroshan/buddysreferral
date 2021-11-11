import React from 'react';



import { HashLink as Link} from 'react-router-hash-link';
import  logo  from "../Components/images/br.png";

import { useState } from 'react';

import './Navbar.css';



export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);



    return (
      <div className="navbar">   
        <div className="NavContainer">

        {/* <div className="company-logo">  */}
     
        <img src={logo}
        alt="logo" className="logo"></img>
        <h3 className="name">Buddy</h3>

        {/* </div>
      */}
        <ul className= {isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=> setIsMobile(false)}>

          <Link smooth className="home"   activeClass="active" to="#home">
         <li>Home</li>
          </Link>
          
          <Link  smooth className="employers" activeClass="active" to="#employers">
           <li>employers</li>
          </Link>
          
          <Link smooth className="pricing"   activeClass="active" to="#pricing">
           <li>Pricing</li> 
          </Link>


          <Link smooth className="openpositions"  activeClass="active"  to="#openpositions">
            <li>open positions</li>
          </Link>
         
        

         </ul>

        
         <ul className=  "login-ul" >
         <ink className="login" to="/login"> 
         <li>Login</li></ink>
        </ul>



        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>

      
    </div>
    </div> 
    )
}





