import React ,{ useState} from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Employers from './Components/Employers';
import Pricing from './Components/Pricing';
import Openpositions from './Components/Openpositions';

import Login from './Components/Login';
import Stickynavbar from './Components/Stickynavbar';

import { Switch ,Route } from 'react-router-dom';

// import Scrollspy from 'react-scrollspy';


// import { StickyContainer, Sticky } from 'react-sticky';



import Footer from './Components/Footer';

// import { Route, Switch } from "react-router-dom"


function App() {

     const [showmodal, setShowmodal] = useState(false);
    


  return (
    <div className="App">
    
        <header>
      <Stickynavbar  showmodal={showmodal} setShowmodal={setShowmodal} />

      </header>
      <Home />
      <Employers />
      <Pricing />
      <Openpositions />

      <Switch> 
      <Route path='/login' Component={Login} />
      </Switch>
      {/* <Login /> */}
      
     <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;

