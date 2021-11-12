import React ,{ useState, useEffect} from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Employers from './Components/Employers';
import Pricing from './Components/Pricing';
import Openpositions from './Components/Openpositions';

import Login from './Components/Login';
import Stickynavbar from './Components/Stickynavbar';

import { Switch ,Route } from 'react-router-dom';

import Footer from './Components/Footer';

// import { Route, Switch } from "react-router-dom"


function App() {

     const [showmodal, setShowmodal] = useState(false);
     const [showButton, setShowButton] = useState(false);
    
   

     const togglePopup = () => {
       setShowmodal(!showmodal);
     };


  // This function will scroll the window to the top 
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
    };
     

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);






  return (
    <div className="App">
    
        <header>
      <Stickynavbar  showmodal={showmodal} setShowmodal={setShowmodal}  togglePopup={togglePopup}/>

      </header>
      <Home />
      <Employers />
      <Pricing />
      {/* <Openpositions /> */}
      

      {showmodal && <Login showmodal={showmodal} setShowmodal={setShowmodal}  togglePopup={togglePopup} />} 
     
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}

      
     <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;

