import React from 'react';
import './Pricing.css';

export default function Pricing() {
    return (
        <div id="pricing" className="pricing-main">
         <h1 className="pricing-h1">Pricing</h1>
          <div className="pricing-container">
             <div className="pricing-heading"> 
              <h2>15% of first Salary</h2>
               <p>Pay only when you hire</p>
              </div>
              <div className="pricing-content"> 
              <h3>Fully transparent pricing</h3>  
                <h3> No upfront cost</h3>
                 <h3>Pay only when you hire</h3>
                 <h3>Money back if candidate leaves within a month</h3>
                 </div>
             </div>
        </div>
    )
}
