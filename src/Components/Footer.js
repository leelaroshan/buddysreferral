import React from 'react';
import './Footer.css';



import {Link} from "react-router-dom";

import  logo  from "../Components/images/b.png";


import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialLinkedinCircular
    
  } from "react-icons/ti";
   import {BsLinkedin} from "react-icons/bs";
  
  import { AiOutlineGithub, AiFillTwitterCircle} from "react-icons/ai";




export default function Footer() {
    return (


     <div className="Nav-container">
        <div className="footer-logo">  
         <img src={logo}
        alt="logo" className="logo"></img>
        <h3 className="name">Buddy's Referral</h3>
        </div>
     
        <div className="copyright-socialmedia">
          <p>Follow us on Social media</p> 
          <div className="social-media">  
           <div className="icons-div"> 
              <Link  to= {{ pathname: "https://github.com/leelaroshan" }} target="_blank" >  
              <TiSocialFacebook className="github" />
              </Link>
              <TiSocialTwitter className="twitter" />
              <TiSocialLinkedinCircular className="linkedin" />
            </div>
   
           </div>
            
   
        </div>
           
        <div className="email"> 
   
        <h4>We are always happy to help.</h4>
        <p>ask@br.com</p>
        </div>

       </div>

    )
}




