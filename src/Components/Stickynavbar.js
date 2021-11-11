import React from 'react';



import { NavHashLink as Link} from 'react-router-hash-link';
import  logo  from "../Components/images/b.png";

import { useState, useEffect} from 'react';

import './Navbar.css';



export default function Stickynavbar({showmodal, setShowmodal}) {

    const [isMobile, setIsMobile] = useState(false);

    const [scrolled,setScrolled]=useState(false);


    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 100 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })

    let navbarClasses=['NavContainer'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }


      const togglePopup = () => {
        setShowmodal(!showmodal);
       }
  




    return (
    //   < className="navbar">   
        <div className={navbarClasses.join(" ")}>

        {/* <div className="company-logo">  */}
     
        <img src={logo}
        alt="logo" className="logo"></img>
        <h3 className="name">Buddy's Referral</h3>

        {/* </div>  */}
      
        <ul className= {isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=> setIsMobile(false)}>

          <Link smooth className="home"   activeClass="active" to="#home">
         <li>Home</li>
          </Link>
          
          <Link  smooth className="employers" activeStyle={{borderBottom:"1px solid white"}} to="#employers">
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
         <Link className="login" to="/login"> 
         <li>Login</li></Link>
        </ul>



        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>

      
    </div>
    
    )
}





